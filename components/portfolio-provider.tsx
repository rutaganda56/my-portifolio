"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  type Language,
  languageOptions,
  socialLinks,
  translations,
} from "@/lib/portfolio-content";

type Theme = "light" | "dark";

type PortfolioContextValue = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  theme: Theme;
  toggleTheme: () => void;
  visitCount: number;
  t: (typeof translations)[Language];
  socialLinks: typeof socialLinks;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

const LANGUAGE_KEY = "portfolio-language";
const THEME_KEY = "portfolio-theme";
const VISIT_KEY = "portfolio-visit-count";

function getPreferredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(LANGUAGE_KEY);
  if (saved && languageOptions.some((option) => option.code === saved)) {
    return saved as Language;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("fr")) {
    return "fr";
  }
  if (browserLanguage.startsWith("rw")) {
    return "rw";
  }
  return "en";
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const nextLanguage = getPreferredLanguage();
    const nextTheme = getPreferredTheme();

    setLanguage(nextLanguage);
    setTheme(nextTheme);

    const currentCount = Number(window.localStorage.getItem(VISIT_KEY) ?? "0") + 1;
    window.localStorage.setItem(VISIT_KEY, String(currentCount));
    setVisitCount(currentCount);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const value: PortfolioContextValue = {
    language,
    setLanguage,
    theme,
    toggleTheme: () => {
      setTheme((current) => (current === "dark" ? "light" : "dark"));
    },
    visitCount,
    t: translations[language],
    socialLinks,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
}

