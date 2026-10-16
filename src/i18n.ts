import { createContext, createElement, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { de } from "./locales/de";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr, type Locale } from "./locales/fr";

const locales = { fr, en, es, de } satisfies Record<string, Locale>;
const languageStorageKey = "tigries-language-v2";

export type Language = keyof typeof locales;

export const languageOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Locale;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value !== null && value in locales;
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(languageStorageKey);
  if (isLanguage(stored)) {
    return stored;
  }

  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(() => ({ language, setLanguage, t: locales[language] }), [language]);

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context.t;
}

export function useLanguage() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLanguage must be used inside I18nProvider");
  }

  return { language: context.language, setLanguage: context.setLanguage };
}
