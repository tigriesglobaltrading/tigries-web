import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "../company";

export default function ContactPage() {
  return <main lang="en" className="mx-auto max-w-[1120px] px-5 py-20 md:py-28">
    <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Contact</p>
    <h1 className="font-display-modern mt-5 text-4xl md:text-6xl">Let’s talk about your business.</h1>
    <p className="mt-6 max-w-[650px] text-lg leading-8 text-neutral-600">Questions about a subscription, your workspace or a payment? Contact our team directly.</p>
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <section className="rounded-3xl border border-blue-100 bg-white p-8"><Mail className="text-[var(--brand-blue)]" /><h2 className="mt-5 text-xl font-semibold">Contact our team</h2><a href={`mailto:${company.email}`} className="mt-4 block break-words text-[var(--brand-blue)] underline">{company.email}</a><a href={company.phoneHref} className="mt-3 block text-[var(--brand-blue)] underline">{company.phone}</a><p className="mt-5 text-sm leading-7 text-neutral-600">For billing, cancellation or refund enquiries, include your company name and invoice or subscription reference. Do not send passwords or full card details.</p></section>
      <section className="rounded-3xl border border-blue-100 bg-white p-8"><MapPin className="text-[var(--brand-blue)]" /><h2 className="mt-5 text-xl font-semibold">Company details</h2><address className="mt-4 text-sm not-italic leading-7 text-neutral-600"><strong>{company.name}</strong><br />NIF: {company.nif}<br />{company.street}<br />{company.city}<br />{company.region}</address></section>
    </div>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-blue-50 p-8"><div><h2 className="text-xl font-semibold">See Tigries in action</h2><p className="mt-2 text-neutral-600">Explore the modules and setup your team needs.</p></div><a href="/demo" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">Request a demo<ArrowUpRight size={18} /></a></div>
  </main>;
}
