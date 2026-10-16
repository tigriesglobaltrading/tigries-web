import { ArrowUpRight, Cloud, Settings, Headphones } from "lucide-react";
import { useI18n } from "../i18n";
import Features from "./Features";

export default function ServicesPage() {
  const t = useI18n();
  return <main>
    <section lang="en" className="mx-auto max-w-[1120px] px-5 py-20 md:py-28">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Subscriptions & services</p>
      <h1 className="font-display-modern mt-5 max-w-[800px] text-4xl leading-tight md:text-6xl">Your construction business.<br />Connected, from day one.</h1>
      <p className="mt-6 max-w-[700px] text-lg leading-8 text-neutral-600">TIGRIES GLOBAL TRADING SL provides a SaaS management platform for construction businesses, with setup, onboarding and ongoing support. All services are delivered online.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { icon: Cloud, title: "SaaS subscription", text: "One workspace for clients, jobsites, quotes, invoices, teams, equipment and stock. Hosting, backups, updates and user support are included." },
          { icon: Settings, title: "Setup & onboarding", text: "We configure your company workspace, roles, documents and modules, help import your data and train your team." },
          { icon: Headphones, title: "Support & guidance", text: "Get help using your workspace and adapting it to your operations. Additional integrations and project-specific work are scoped in your proposal." },
        ].map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-blue-100 bg-white p-7"><Icon className="text-[var(--brand-blue)]" size={28} /><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-4 text-sm leading-7 text-neutral-600">{text}</p></article>)}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-blue-50 p-7">
        <div><h2 className="text-xl font-semibold">A proposal tailored to your team</h2><p className="mt-2 max-w-[700px] text-sm leading-7 text-neutral-600">Your proposal sets out setup fees, subscription price, applicable taxes, billing frequency, commitment, renewal terms and activation schedule before you subscribe.</p></div>
        <a href="/demo" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">{t.nav.getStarted}<ArrowUpRight size={18} /></a>
      </div>
      <p className="mt-6 text-sm text-neutral-600">Read our <a className="underline" href="/terms">subscription terms</a> and <a className="underline" href="/delivery">service delivery policy</a>.</p>
    </section>
    <Features />
  </main>;
}
