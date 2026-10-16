import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

// Private configuration: never put customer orders in public/ or VITE_* variables.
export function validateOrders(orders, allowedHosts = []) {
  if (!Array.isArray(orders)) throw new Error('Orders must be an array');
  const tokens = new Set();
  for (const order of orders) {
    if (!/^[a-f0-9]{64}$/.test(order.token) || tokens.has(order.token)) throw new Error('Use unique 32-byte random tokens');
    tokens.add(order.token);
    if (!order.reference || !order.description || !order.terms || !Number.isSafeInteger(order.totalCents) || order.totalCents <= 0 || order.currency !== 'EUR') throw new Error('Invalid order details');
    if (!Number.isFinite(Date.parse(order.expiresAt))) throw new Error('Invalid expiry');
    const url = new URL(order.paymentUrl);
    if (url.protocol !== 'https:' || !allowedHosts.includes(url.hostname) || url.port || url.username || url.password) throw new Error('Payment links must use HTTPS and an explicitly configured payment host');
  }
  return orders;
}

export function createCheckoutServer(orders, allowedHosts = []) {
  validateOrders(orders, allowedHosts);
  return createServer(async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    const send = (status, body) => { res.writeHead(status); res.end(JSON.stringify(body)); };
    const url = new URL(req.url, 'http://localhost');
    let details;
    if (req.method === 'POST') {
      try {
        let raw = '';
        for await (const chunk of req) {
          raw += chunk.toString();
          if (Buffer.byteLength(raw) > 4096) return send(413, { error: 'Request too large.' });
        }
        details = JSON.parse(raw || '{}');
        if (!details || typeof details !== 'object') throw new Error();
      } catch { return send(400, { error: 'Invalid request.' }); }
    }
    const matchesAccount = (item) => item.accountId && item.billingEmail &&
      typeof details?.accountId === 'string' && details.accountId.trim() === item.accountId &&
      typeof details?.email === 'string' && details.email.trim().toLowerCase() === item.billingEmail.toLowerCase() &&
      typeof details?.reference === 'string' && details.reference.trim() === item.reference;
    if (url.pathname === '/api/checkout/resolve' && req.method === 'POST') {
      const item = orders.find(entry => entry.token === details.code);
      if (!item || item.disabled || Date.parse(item.expiresAt) <= Date.now() || !matchesAccount(item)) {
        return send(404, { error: 'We could not find a payment request matching these details. Check your payment code, account ID, billing email and invoice reference.' });
      }
      const { reference, description, totalCents, currency, terms, expiresAt } = item;
      return send(200, { reference, description, totalCents, currency, terms, expiresAt });
    }
    const match = /^\/api\/checkout\/([a-f0-9]{64})(\/pay)?$/.exec(url.pathname);
    if (!match) return send(404, { error: 'Payment request not found.' });
    const order = orders.find(item => item.token === match[1]);
    if (!order || Date.parse(order.expiresAt) <= Date.now() || order.disabled) return send(404, { error: 'This payment request is unavailable or has expired. Contact our team.' });
    if (!match[2] && req.method === 'GET') {
      const { reference, description, totalCents, currency, terms, expiresAt } = order;
      return send(200, { reference, description, totalCents, currency, terms, expiresAt });
    }
    if (match[2] && req.method === 'POST') {
      if (req.headers['x-checkout-terms'] !== 'accepted') return send(400, { error: 'Accept the terms before continuing.' });
      if (!matchesAccount(order)) return send(400, { error: 'Your account details do not match this payment request.' });
      return send(200, { redirectUrl: order.paymentUrl });
    }
    return send(405, { error: 'Method not allowed.' });
  });
}

if (process.argv[1] && import.meta.url === new URL(process.argv[1], 'file:').href) {
  const path = process.env.PAYMENT_ORDERS_FILE;
  const allowedHosts = (process.env.PAYMENT_ALLOWED_HOSTS || '').split(',').map(host => host.trim().toLowerCase()).filter(Boolean);
  const orders = path ? validateOrders(JSON.parse(await readFile(path, 'utf8')), allowedHosts) : [];
  createCheckoutServer(orders, allowedHosts).listen(Number(process.env.PAYMENT_PORT || 3001), '127.0.0.1', () => {
    console.log(`Checkout API listening on localhost:${process.env.PAYMENT_PORT || 3001}; ${orders.length} configured payment request(s).`);
  });
}
