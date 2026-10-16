import { useState, type FormEvent } from "react";
import { ArrowRight, CreditCard, FileText, LockKeyhole } from "lucide-react";
import { company } from "../company";

type Order = { reference: string; description: string; totalCents: number; currency: string; terms: string; expiresAt: string };

export default function CheckoutPage() {
  const [code, setCode] = useState(() => new URLSearchParams(window.location.hash.slice(1)).get("request") || "");
  const [accountId, setAccountId] = useState("");
  const [email, setEmail] = useState("");
  const [reference, setReference] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const inputClass = "brand-focus mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base font-normal outline-none disabled:bg-neutral-50";

  async function readResponse(response: Response) {
    if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("Checkout is temporarily unavailable. Please contact our team.");
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Unable to open this payment request.");
    return body;
  }

  async function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setError(""); setLoading(true); setAccepted(false);
    try {
      const response = await fetch("/api/checkout/resolve", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim(), accountId: accountId.trim(), email: email.trim(), reference: reference.trim() }),
      });
      setOrder(await readResponse(response));
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to load this payment request."); }
    finally { setLoading(false); }
  }

  async function pay() {
    if (!accepted || !order || redirecting) return;
    setRedirecting(true); setError("");
    try {
      const response = await fetch(`/api/checkout/${code.trim()}/pay`, { method: "POST", headers: { "X-Checkout-Terms": "accepted", "Content-Type": "application/json" }, body: JSON.stringify({ accountId: accountId.trim(), email: email.trim(), reference: reference.trim() }) });
      const data = await readResponse(response);
      const url = new URL(data.redirectUrl);
      if (url.protocol !== "https:" || url.port || url.username || url.password) throw new Error("The payment link is unavailable. Please contact our team.");
      window.location.assign(url.href);
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to open checkout. Please try again."); setRedirecting(false); }
  }

  return <main lang="en" className="mx-auto max-w-[1120px] px-5 py-20 md:py-28">
    <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Client payments</p>
    <h1 className="font-display-modern mt-5 text-4xl md:text-6xl">Checkout</h1>
    <p className="mt-6 max-w-[660px] text-lg leading-8 text-neutral-600">Enter your account ID and billing details, review your invoice, then continue to secure payment.</p>
    <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
      <section aria-label="Payment request" aria-busy={loading} className="rounded-[28px] border border-blue-100 bg-white p-6 md:p-9">
        <div className="flex items-center gap-3"><FileText className="text-[var(--brand-blue)]" /><h2 className="text-xl font-semibold">{order ? "Order summary" : "Your payment request"}</h2></div>
        {loading && <p role="status" className="mt-8 text-neutral-600">Loading your payment request…</p>}
        {error && <p role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-800">{error}</p>}
        {!order && <form onSubmit={review} className="mt-7">
          <fieldset disabled={loading} className="grid gap-5 sm:grid-cols-2">
            <legend className="mb-5 text-sm leading-7 text-neutral-600 sm:col-span-2">Use the details shown on your invoice or payment request.</legend>
            <label className="text-sm font-semibold">Account ID <span aria-hidden="true">*</span>
              <input name="accountId" value={accountId} onChange={event => setAccountId(event.target.value)} required maxLength={100} autoCapitalize="none" spellCheck={false} placeholder="Your Tigries account ID" className={inputClass} aria-describedby="account-help" />
              <span id="account-help" className="mt-2 block text-xs font-normal leading-5 text-neutral-500">Your client account number, not your bank account or IBAN.</span>
            </label>
            <label className="text-sm font-semibold">Billing email <span aria-hidden="true">*</span>
              <input name="email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} required maxLength={254} placeholder="you@company.com" className={inputClass} />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">Invoice / order reference <span aria-hidden="true">*</span>
              <input name="reference" value={reference} onChange={event => setReference(event.target.value)} required maxLength={100} autoCapitalize="none" spellCheck={false} placeholder="Reference on your invoice" className={inputClass} />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">Payment code <span aria-hidden="true">*</span>
              <input name="paymentCode" value={code} onChange={event => setCode(event.target.value)} required pattern="[a-f0-9]{64}" maxLength={64} autoCapitalize="none" spellCheck={false} autoComplete="off" placeholder="Code provided with your payment request" className={inputClass} aria-describedby="code-help" />
              <span id="code-help" className="mt-2 block text-xs font-normal leading-5 text-neutral-500">Automatically filled when you open your personal payment link. This code keeps your invoice private.</span>
            </label>
          </fieldset>
          <p className="mt-5 text-xs leading-6 text-neutral-500">These details are used to match your payment request. Your amount is taken from the invoice and cannot be changed here.</p>
          <button type="submit" disabled={loading} className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold disabled:cursor-wait disabled:opacity-50">{loading ? "Finding your invoice…" : "Review my payment"}<ArrowRight size={18} /></button>
          <p className="mt-5 text-center text-sm leading-6 text-neutral-600">Missing your account ID or payment code? <a href={`mailto:${company.email}?subject=Checkout%20assistance`} className="text-blue-700 underline">Contact our team</a>.</p>
        </form>}

        {order && <>
          <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-7"><p className="break-words"><strong>Account:</strong> {accountId}</p><p className="break-words"><strong>Billing email:</strong> {email}</p><button type="button" disabled={redirecting} onClick={() => { setOrder(null); setAccepted(false); setError(""); }} className="mt-2 font-semibold text-blue-700 underline disabled:opacity-50">Edit details</button></div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-neutral-500">{order.reference}</p>
          <h3 className="mt-3 text-xl font-semibold">{order.description}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-neutral-600">{order.terms}</p>
          <div className="my-7 flex items-center justify-between gap-4 border-y border-black/10 py-6"><span>Total due, including applicable taxes</span><strong className="shrink-0 text-2xl">{new Intl.NumberFormat("en-IE", { style: "currency", currency: order.currency }).format(order.totalCents / 100)}</strong></div>
          <label className="flex items-start gap-3 text-sm leading-6 text-neutral-600"><input type="checkbox" checked={accepted} onChange={event => setAccepted(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-blue-700" /><span>I accept the payment terms above and the <a href="/terms" target="_blank" rel="noreferrer" className="text-blue-700 underline">subscription terms</a>, and have read the <a href="/cancellations" target="_blank" rel="noreferrer" className="text-blue-700 underline">cancellation</a> and <a href="/refunds" target="_blank" rel="noreferrer" className="text-blue-700 underline">refund policies</a>.</span></label>
          <button onClick={() => void pay()} disabled={!accepted || redirecting} className="btn-primary mt-7 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold disabled:cursor-not-allowed disabled:opacity-50">{redirecting ? "Opening secure checkout…" : "Continue to payment"}<ArrowRight size={18} /></button>
          <p className="mt-4 text-center text-xs leading-6 text-neutral-500">You will review and authorise your payment on the secure payment page.</p>
        </>}
      </section>
      <aside className="rounded-[28px] bg-blue-50 p-7 md:p-9">
        <LockKeyhole size={28} className="text-[var(--brand-blue)]" /><h2 className="mt-5 text-xl font-semibold">A clear payment process</h2>
        <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-7 text-neutral-600"><li>Enter your account ID, billing email and invoice reference.</li><li>Review your services, total amount and payment terms.</li><li>Continue to secure checkout to select an available payment method.</li><li>Keep the confirmation provided after your payment is processed.</li></ol>
        <div className="mt-7 border-t border-blue-200 pt-6"><CreditCard size={22} className="text-[var(--brand-blue)]" /><p className="mt-3 text-sm leading-7 text-neutral-600">Card details are entered on the secure payment page. This website does not collect your card number.</p></div>
        <p className="mt-7 text-sm font-semibold">{company.name}</p><p className="mt-1 text-xs text-neutral-500">NIF {company.nif}</p><a href="/contact" className="mt-5 inline-block text-sm font-semibold text-blue-700 underline">Contact our team</a>
      </aside>
    </div>
  </main>;
}
