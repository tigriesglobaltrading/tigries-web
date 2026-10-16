import logo from "../assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, useLanguage } from "../i18n";

export const navigationLabels = {
  en: ["Home", "Services", "Contact"],
  fr: ["Accueil", "Services", "Contact"],
  es: ["Inicio", "Servicios", "Contacto"],
  de: ["Startseite", "Leistungen", "Kontakt"],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();
  const { language } = useLanguage();
  const links = ["/", "/services", "/contact"].map((href, i) => ({ href, label: navigationLabels[language][i] }));
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const renderLinks = () => <>
    {links.map(({ href, label }) => <a key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm ${pathname === href ? "text-[var(--brand-blue)]" : "text-neutral-500 hover:text-[var(--brand-blue)]"}`}>{label}</a>)}
    <a href="/demo" aria-current={pathname === "/demo" ? "page" : undefined} className="btn-primary rounded-full px-5 py-2.5 text-center text-sm font-semibold">{t.nav.getStarted}</a>
    <a href="/#" className="rounded-full border border-[var(--brand-blue)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--brand-blue)] hover:bg-blue-50">{t.nav.signIn}</a>
  </>;
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8fbff]/95 backdrop-blur-xl">
    <nav aria-label="Main navigation" className="mx-auto flex min-h-20 max-w-[1180px] items-center gap-6 px-5 py-3">
      <a href="/" className="shrink-0 text-[16px] text-neutral-950" aria-label={t.brand.homeAria}><img src={logo} alt="Tigries Global Trading" width={500} height={74} className="h-auto w-[190px] sm:w-[240px]" /></a>
      <div className="ml-auto hidden items-center justify-end gap-2 lg:flex">{renderLinks()}</div>
      <button type="button" className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? t.nav.close : t.nav.open} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    {isOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid max-h-[calc(100dvh-80px)] gap-3 overflow-y-auto border-t border-black/5 bg-[#f8fbff] p-5 text-right lg:hidden">{renderLinks()}</nav>}
  </header>;
}
export default Navbar;
