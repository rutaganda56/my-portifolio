"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { usePortfolio } from "@/components/portfolio-provider";
import { Button } from "@/components/ui/button";
import { languageOptions, sectionIds } from "@/lib/portfolio-content";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M12 2C6.477 2 2 6.589 2 12.25c0 4.53 2.865 8.372 6.839 9.728.5.096.682-.223.682-.495 0-.244-.008-.89-.013-1.748-2.782.62-3.369-1.393-3.369-1.393-.455-1.183-1.11-1.498-1.11-1.498-.907-.638.069-.625.069-.625 1.002.073 1.53 1.055 1.53 1.055.891 1.563 2.337 1.111 2.907.85.09-.664.349-1.112.635-1.367-2.221-.26-4.555-1.139-4.555-5.069 0-1.12.389-2.036 1.029-2.754-.103-.26-.446-1.307.098-2.725 0 0 .84-.276 2.75 1.052A9.345 9.345 0 0 1 12 6.84a9.32 9.32 0 0 1 2.504.349c1.909-1.328 2.748-1.052 2.748-1.052.546 1.418.202 2.465.1 2.725.64.718 1.027 1.633 1.027 2.754 0 3.94-2.338 4.806-4.566 5.062.359.319.679.95.679 1.916 0 1.384-.012 2.5-.012 2.839 0 .274.18.595.688.494A10.253 10.253 0 0 0 22 12.25C22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.3 4.99 1.96 1.96 0 0 0 5.22 7a1.97 1.97 0 0 0 1.98-2.01A1.96 1.96 0 0 0 5.25 3Zm6.87 5.5H8.84V20h3.28v-6.03c0-1.59.3-3.12 2.22-3.12 1.89 0 1.91 1.77 1.91 3.22V20h3.29v-6.6c0-3.24-.7-5.73-4.49-5.73-1.82 0-3.03 1.02-3.53 1.99h-.05V8.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.2 1.9A3.65 3.65 0 0 0 3.9 7.55v8.9a3.65 3.65 0 0 0 3.65 3.65h8.9a3.65 3.65 0 0 0 3.65-3.65v-8.9a3.65 3.65 0 0 0-3.65-3.65h-8.9Zm8.97 1.43a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9A3.1 3.1 0 1 0 12 15.1 3.1 3.1 0 0 0 12 8.9Z" />
    </svg>
  );
}

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

export function Navigation() {
  const { language, setLanguage, theme, toggleTheme, t, socialLinks } =
    usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "work", label: t.nav.work },
    { id: "skills", label: t.nav.skills },
    // { id: "awards", label: t.nav.awards },
    { id: "gallery", label: t.nav.gallery },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/80 bg-background/92 shadow-[0_12px_32px_rgba(15,23,42,0.12)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-3"
            aria-label="Go to about section"
          >
            <div className="relative size-11 overflow-hidden rounded-2xl border border-border/70 bg-card">
              <Image
                src="/updatedroundedlogo.png"
                alt="Rutaganda Jean Valentin logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <label className="sr-only" htmlFor="language-select">
              {t.nav.language}
            </label>
            <select
              id="language-select"
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value as (typeof languageOptions)[number]["code"])
              }
              className="rounded-full border border-border bg-card px-3 py-2 text-sm"
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label={t.nav.theme}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            </Button>

            <div className="hidden items-center gap-2 lg:flex">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];
                if (!Icon) return null;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    aria-label={link.placeholder ? `${link.label} placeholder link` : link.label}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>

            <Button onClick={() => scrollToSection("contact")}>{t.nav.contact}</Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={t.nav.menu}
          >
            <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 rounded-3xl border border-border/80 bg-card/95 p-4 shadow-xl lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <select
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value as (typeof languageOptions)[number]["code"])
                }
                className="flex-1 rounded-2xl border border-border bg-background px-3 py-3 text-sm"
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>

              <Button type="button" variant="outline" onClick={toggleTheme}>
                {theme === "dark" ? "Light" : "Dark"}
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];
                if (!Icon) return null;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-background p-3 text-muted-foreground"
                    aria-label={link.placeholder ? `${link.label} placeholder link` : link.label}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
