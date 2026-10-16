import test from 'node:test';
import assert from 'node:assert/strict';
import { createCheckoutServer, validateOrders } from './checkout.mjs';
const hosts = ['checkout.example.com'];
const order = { token: 'a'.repeat(64), accountId: 'CLIENT-1', billingEmail: 'billing@example.com', reference: 'TEST-1', description: 'Test service', totalCents: 100, currency: 'EUR', terms: 'One-time payment, taxes included.', expiresAt: '2099-01-01', paymentUrl: 'https://checkout.example.com/pay/test' };
test('reject unsafe destinations, duplicate capabilities and invalid prices', () => {
  for (const paymentUrl of ['https://evil.example/pay', 'https://checkout.example.com.evil.example', 'http://checkout.example.com/pay', 'https://user@checkout.example.com/pay']) assert.throws(() => validateOrders([{ ...order, paymentUrl }], hosts));
  assert.throws(() => validateOrders([order]));
  assert.doesNotThrow(() => validateOrders([order], hosts));
  assert.doesNotThrow(() => validateOrders([{ ...order, paymentUrl: 'https://another.example/pay' }], ['another.example']));
  assert.throws(() => validateOrders([order, order], hosts));
  assert.throws(() => validateOrders([{ ...order, totalCents: 1.5 }], hosts));
});
test('private checkout only exposes valid requests and requires terms acceptance', async () => {
  const server = createCheckoutServer([order, { ...order, token: 'b'.repeat(64), expiresAt: '2000-01-01' }, { ...order, token: 'c'.repeat(64), disabled: true }], hosts);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `http://127.0.0.1:${server.address().port}/api/checkout/`;
    const response = await fetch(base + order.token);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    const data = await response.json();
    assert.equal(data.totalCents, 100);
    assert.equal(data.paymentUrl, undefined);
    assert.equal(data.token, undefined);
    for (const token of ['invalid', 'b'.repeat(64), 'c'.repeat(64), 'd'.repeat(64)]) assert.equal((await fetch(base + token)).status, 404);
    assert.equal((await fetch(base + order.token + '/pay', { method: 'POST' })).status, 400);
    assert.equal((await fetch(base + order.token + '/pay', { method: 'GET' })).status, 405);
    const details = { code: order.token, accountId: 'CLIENT-1', email: 'billing@example.com', reference: 'TEST-1' };
    const resolve = body => fetch(base + 'resolve', { method: 'POST', body: JSON.stringify(body) });
    assert.equal((await resolve(details)).status, 200);
    assert.equal((await resolve({ ...details, email: 'BILLING@example.com' })).status, 200);
    for (const wrong of [{ accountId: 'OTHER' }, { email: 'other@example.com' }, { reference: 'OTHER' }, { code: 'b'.repeat(64) }, { code: 'c'.repeat(64) }, { code: 'd'.repeat(64) }]) {
      assert.equal((await resolve({ ...details, ...wrong })).status, 404);
    }
    assert.equal((await fetch(base + 'resolve', { method: 'POST', body: '{' })).status, 400);
    assert.equal((await fetch(base + 'resolve', { method: 'POST', body: 'a'.repeat(5000) })).status, 413);
    assert.equal((await fetch(base + order.token + '/pay', { method: 'POST', headers: { 'X-Checkout-Terms': 'accepted' }, body: JSON.stringify({ ...details, accountId: 'OTHER' }) })).status, 400);
    const pay = await fetch(base + order.token + '/pay', { method: 'POST', headers: { 'X-Checkout-Terms': 'accepted' }, body: JSON.stringify({ accountId: 'CLIENT-1', email: 'billing@example.com', reference: 'TEST-1', totalCents: 1, paymentUrl: 'https://evil.example' }) });
    assert.deepEqual(await pay.json(), { redirectUrl: order.paymentUrl });
  } finally { await new Promise(resolve => server.close(resolve)); }
});
