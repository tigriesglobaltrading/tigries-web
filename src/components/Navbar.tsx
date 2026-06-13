import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();
  const linkHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8fbff]/85 backdrop-blur-xl">
      <a href="#announcement" className="block bg-[var(--brand-blue)] px-4 py-2 text-center text-xs font-medium text-white hover:bg-[var(--brand-blue-dark)]">
        {t.nav.announcement}
      </a>
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5">
        <a href="/" className="flex items-center gap-3" aria-label={t.brand.homeAria}>
          <span className="text-[16px] leading-none text-neutral-950">tigriesglobaltrading</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => (
            <a key={link.label} href={linkHref(link.href)} className="text-sm text-neutral-500 hover:text-[var(--brand-blue)]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="/demo" className="text-sm text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">
            {t.nav.getStarted}
          </a>
          <a href="#" className="text-sm text-neutral-950 hover:text-[var(--brand-blue)]">
            {t.nav.signIn}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-neutral-950 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? t.nav.close : t.nav.open}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="fixed inset-x-0 top-[105px] min-h-[calc(100vh-105px)] border-t border-black/5 bg-[#f8fbff] px-5 py-8 md:hidden">
          <div className="grid gap-2">
            {t.nav.links.map((link) => (
              <a key={link.label} href={linkHref(link.href)} className="rounded-2xl px-3 py-4 text-lg text-neutral-950" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="/demo" className="rounded-2xl px-3 py-4 text-lg text-neutral-950" onClick={() => setIsOpen(false)}>
              {t.nav.getStarted}
            </a>
            <a href="#" className="rounded-2xl px-3 py-4 text-lg text-neutral-950" onClick={() => setIsOpen(false)}>
              {t.nav.signIn}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
