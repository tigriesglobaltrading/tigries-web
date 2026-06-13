import { Code2 } from "lucide-react";
import { useI18n } from "../i18n";

function Pricing() {
  const t = useI18n();

  return (
    <section id="start" data-section-reveal className="px-5 py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <h2 className="font-display-modern text-4xl font-normal leading-[0.98] text-neutral-950 md:text-6xl">{t.onboarding.title}</h2>
          <p className="mt-6 max-w-[470px] text-base leading-7 text-neutral-500">
            {t.onboarding.subtitle}
          </p>
          <div className="mt-10 grid gap-7">
            {t.onboarding.steps.map((step) => (
              <div key={step.number} className="grid grid-cols-[42px_1fr] gap-4 border-t border-black/5 pt-6">
                <span className="font-display-modern text-3xl text-[var(--brand-blue)]">{step.number}</span>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="/demo" className="btn-primary mt-10 inline-flex rounded-full px-7 py-3 text-sm font-semibold hover:-translate-y-0.5">
            {t.onboarding.cta}
          </a>
        </div>

        <div className="soft-shadow overflow-hidden rounded-[32px] border border-black/10 bg-white">
          <div className="grid min-h-[520px] grid-cols-[86px_1fr]">
            <aside className="bg-[var(--brand-blue-dark)] p-4">
              <div className="h-8 w-8 rounded-full bg-white" />
              <div className="mt-10 grid gap-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="h-8 rounded-full bg-white/15" />
                ))}
              </div>
            </aside>
            <div className="bg-[#f8fbff] p-6">
              <div className="flex items-center justify-between border-b border-black/5 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">{t.onboarding.mockup.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-950">{t.onboarding.mockup.title}</h3>
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-[var(--brand-blue)]">{t.onboarding.mockup.status}</span>
              </div>
              <div className="mt-6 grid gap-4">
                {t.onboarding.mockup.cards.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/5 bg-white p-4">
                    <p className="text-sm font-semibold text-neutral-950">{item}</p>
                    <div className="mt-3 h-2 w-3/4 rounded-full bg-neutral-100" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-neutral-100" />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[var(--brand-blue-dark)] p-5 text-white">
                <div className="flex items-center gap-2 text-xs text-blue-100/75">
                  <Code2 size={15} /> {t.onboarding.mockup.codeLabel}
                </div>
                <pre className="mt-4 overflow-hidden text-xs leading-6 text-white/75">
                  {t.onboarding.mockup.code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
