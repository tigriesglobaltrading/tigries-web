import logo from "../assets/logo.png";
import { useI18n } from "../i18n";
import { company } from "../company";

function Footer() {
  const t = useI18n();
  const columns = [
    { title: "Explore", links: [
      { label: "Home", href: "/" }, { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" }, { label: "Checkout", href: "/checkout" }, { label: "Request a demo", href: "/demo" },
    ] },
    { title: "Legal & policies", links: [
      { label: "Legal notice", href: "/legal-notice" }, { label: "Imprint", href: "/imprint" },
      { label: "Subscription terms", href: "/terms" }, { label: "Cancellations", href: "/cancellations" },
      { label: "Returns & withdrawal", href: "/returns" }, { label: "Refunds", href: "/refunds" },
      { label: "Service delivery", href: "/delivery" },
    ] },
  ];

  return (
    <footer className="border-t border-black/5 px-5 py-12">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <a href="/" className="flex items-center gap-3" aria-label={t.brand.homeAria}>
            <img src={logo} alt="Tigries Global Trading" width={500} height={74} className="h-auto w-[260px] max-w-full" />
          </a>
          <p className="mt-5 max-w-[340px] text-xs leading-6 text-neutral-400">
            {t.footer.disclaimer}
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic leading-6 text-neutral-600">
            <p className="font-semibold text-neutral-900">{company.name}</p>
            <p>NIF: {company.nif}</p>
            <p>{company.street}<br />{company.city}<br />{company.region}</p>
            <a className="block break-words text-[var(--brand-blue)] hover:underline" href={`mailto:${company.email}`}>{company.email}</a>
            <a className="block text-[var(--brand-blue)] hover:underline" href={company.phoneHref}>{company.phone}</a>
          </address>
        </div>
        <nav className="grid gap-8 text-left sm:grid-cols-2" aria-label="Footer">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">{column.title}</h3>
              <div className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-neutral-500 hover:text-[var(--brand-blue)]">
                    {link.label}
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
