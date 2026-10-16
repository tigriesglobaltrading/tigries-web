import { useI18n } from "../i18n";

function LogoBar() {
  const t = useI18n();

  return (
    <section data-section-reveal className="px-5 py-12">
      <div className="mx-auto max-w-[1040px]">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-y border-black/5 py-8">
          {t.logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-300 grayscale">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoBar;
