# Provider-independent checkout prototype

The `/checkout` page lets customers enter an account ID, billing email, invoice reference and private payment code, review an order, and continue to a configured hosted payment page. No payment provider is selected by default. No card data is collected, no charge is created, and no payment success is inferred from a redirect.

## Configure a provider for testing

Create a sandbox payment link with the provider being evaluated. Store orders in a private JSON file outside `src`, `public` and `dist`, never in a `VITE_*` variable or committed customer data. Example structure (dummy values, not a payable order):

```json
[
  {
    "token": "REPLACE_WITH_64_HEX_CHARACTERS",
    "accountId": "CLIENT-1",
    "billingEmail": "billing@example.com",
    "reference": "TEST-1",
    "description": "Test service",
    "totalCents": 100,
    "currency": "EUR",
    "terms": "Replace with the actual tax breakdown, billing frequency, commitment and activation terms.",
    "expiresAt": "2026-12-31T23:59:59Z",
    "paymentUrl": "https://checkout.example.com/REPLACE_WITH_SANDBOX_LINK",
    "disabled": false
  }
]
```

Generate a unique private token per order using `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`.

Configure exact allowed payment hostnames on the server, for example:

```sh
PAYMENT_ALLOWED_HOSTS=checkout.example.com PAYMENT_ORDERS_FILE=/private/tmp/tigries-payment-orders.json npm run payments
```

Replace the example host and link with the actual sandbox host and link of the provider under evaluation. Multiple exact hosts may be comma-separated. No wildcards are supported. Without configured hosts, payment URLs are rejected. The server only accepts HTTPS, without credentials or custom ports, to explicitly allowed hosts. The browser receives the server-approved URL; clients cannot override it or the amount.

Run `npm run dev` separately. Open `/checkout#request=TOKEN` to prefill the private code. Account ID, billing email and invoice reference must also match. The code prevents account IDs alone from revealing invoices. Configuration is loaded at startup; restart the API after changes.

Amounts, taxes, recurring terms and recipient must match the provider's payment request. This prototype does not retrieve provider metadata or create subscriptions automatically. Additional billing and payment fields are completed on the hosted payment page. Submitted account details are matched in memory, not saved as an editable billing record.

## Hosting and later integration

Serve the Vite build with SPA fallback and reverse-proxy `/api/checkout/*` to the Node service on localhost:3001 under the same HTTPS origin. A static-only host cannot run this API. Keep configuration private, redact private request paths from access logs, disable caching and configure request throttling before exposing the service.

There are no configured real orders or credentials in this repository. Use sandbox payments while comparing providers. Expiring or disabling a local link does not revoke the external payment URL; revoke it through the provider too. For production, add durable order storage, verified webhooks and idempotent payment reconciliation before automatic service activation. Never mark an invoice paid based only on a return URL.

Checks: `npm run test:payments` and `npm run build`.
