import { useI18n } from "../i18n";
import ScreenshotSlot from "./ScreenshotSlot";
import trackingScreenshot from "../assets/screenshot-tracking.png";

function ModuleGrid() {
  const t = useI18n();

  return (
    <section id="product" data-section-reveal className="px-5 py-24">
      <div className="mx-auto max-w-[1120px] rounded-[40px] border border-black/5 bg-white/55 p-5 soft-shadow md:p-8">
        <div className="rounded-[32px] border border-black/5 bg-[#f8fbff] p-8 text-center md:p-14">
          <p className="mx-auto inline-flex rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">{t.product.label}</p>
          <h2 className="font-display-modern mx-auto mt-6 max-w-[720px] text-4xl font-normal leading-[0.98] text-neutral-950 md:text-6xl">
            {t.product.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-neutral-500">
            {t.product.subtitle}
          </p>
          <a href="/demo" className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5">
            {t.product.cta}
          </a>

          <div className="mesh-blue relative mx-auto mt-12 max-w-[860px] overflow-hidden rounded-[24px] border border-white/70 p-4 md:p-7">
            <ScreenshotSlot
              id="product-tracking"
              label="Suivi terrain Tigries"
              src={trackingScreenshot}
              aspectRatio="3020/1674"
              className="mx-auto"
            />
            <div className="absolute bottom-[4%] left-1/2 w-[min(460px,calc(100%-40px))] -translate-x-1/2 rounded-[18px] border border-white/70 bg-white/80 p-5 text-left shadow-[0_18px_50px_rgba(26,26,26,0.12)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)]">{t.product.cardLabel}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{t.product.cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModuleGrid;
