import { useI18n } from "../i18n";

function CTABanner() {
  const t = useI18n();

  return (
    <section data-section-reveal className="px-5 py-24">
      <div className="soft-shadow relative mx-auto min-h-[520px] max-w-[1120px] overflow-hidden rounded-[44px] border border-white/70 bg-[radial-gradient(circle_at_24%_24%,rgba(96,165,250,0.72),transparent_34%),linear-gradient(135deg,var(--brand-blue),var(--brand-blue-dark))] p-8 text-center md:p-14">
        <div className="absolute left-1/2 top-12 h-36 w-56 -translate-x-1/2 rounded-[55%_45%_60%_40%] border border-white/20 bg-white/10 blur-[1px]" />
        <div className="absolute left-1/2 top-24 h-52 w-40 -translate-x-1/2 rounded-[48%_52%_40%_60%] border border-white/25 bg-white/10 shadow-[0_30px_80px_rgba(15,30,61,0.18)] backdrop-blur-sm" />
        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[760px] flex-col items-center justify-end pb-4">
          <h2 className="font-display-modern text-4xl font-normal leading-[0.98] text-white md:text-6xl">
            {t.finalCta.title}
          </h2>
          <a href="/demo" className="btn-on-dark mt-8 rounded-full px-7 py-3 text-sm font-semibold hover:-translate-y-0.5">
            {t.finalCta.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
