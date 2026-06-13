import { useI18n } from "../i18n";

function Footer() {
  const t = useI18n();
  const hrefForLink = (link: string) => {
    const normalized = link.toLowerCase();

    if (normalized.includes("imprint") || normalized.includes("impressum")) {
      return "/imprint";
    }

    if (normalized.includes("legal") || normalized.includes("mentions") || normalized.includes("aviso")) {
      return "/legal-notice";
    }

    return "#";
  };

  return (
    <footer className="border-t border-black/5 px-5 py-12">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <a href="/" className="flex items-center gap-3" aria-label={t.brand.homeAria}>
            <span className="text-[22px] leading-none text-neutral-950">tigriesglobaltrading</span>
          </a>
          <p className="mt-5 max-w-[340px] text-xs leading-6 text-neutral-400">
            {t.footer.disclaimer}
          </p>
        </div>
        <nav className="grid gap-8 sm:grid-cols-2 md:justify-self-end md:text-right" aria-label="Footer">
          {t.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">{column.title}</h3>
              <div className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <a key={link} href={hrefForLink(link)} className="text-sm text-neutral-500 hover:text-[var(--brand-blue)]">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
