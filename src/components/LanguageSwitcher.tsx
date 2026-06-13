import { languageOptions, useLanguage } from "../i18n";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-[60] rounded-full border border-white/50 bg-white/35 p-1.5 shadow-[0_18px_50px_rgba(29,78,216,0.16)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(135deg,rgba(255,255,255,0.65),rgba(219,234,254,0.38),rgba(96,165,250,0.18))] before:content-['']">
      <div className="relative flex gap-1">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            className={`rounded-full px-3 py-2 text-[11px] font-semibold hover:-translate-y-0.5 ${
              language === option.code ? "bg-[var(--brand-blue)] text-white shadow-sm" : "text-neutral-600 hover:text-[var(--brand-blue)]"
            }`}
            onClick={() => setLanguage(option.code)}
            aria-pressed={language === option.code}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
