"use client";

import Link from "next/link";

import { usePortfolio } from "@/components/portfolio-provider";

function iconPath(label: string) {
  switch (label) {
    case "GitHub":
      return "M12 2C6.477 2 2 6.589 2 12.25c0 4.53 2.865 8.372 6.839 9.728.5.096.682-.223.682-.495 0-.244-.008-.89-.013-1.748-2.782.62-3.369-1.393-3.369-1.393-.455-1.183-1.11-1.498-1.11-1.498-.907-.638.069-.625.069-.625 1.002.073 1.53 1.055 1.53 1.055.891 1.563 2.337 1.111 2.907.85.09-.664.349-1.112.635-1.367-2.221-.26-4.555-1.139-4.555-5.069 0-1.12.389-2.036 1.029-2.754-.103-.26-.446-1.307.098-2.725 0 0 .84-.276 2.75 1.052A9.345 9.345 0 0 1 12 6.84a9.32 9.32 0 0 1 2.504.349c1.909-1.328 2.748-1.052 2.748-1.052.546 1.418.202 2.465.1 2.725.64.718 1.027 1.633 1.027 2.754 0 3.94-2.338 4.806-4.566 5.062.359.319.679.95.679 1.916 0 1.384-.012 2.5-.012 2.839 0 .274.18.595.688.494A10.253 10.253 0 0 0 22 12.25C22 6.589 17.523 2 12 2Z";
    case "LinkedIn":
      return "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.3 4.99 1.96 1.96 0 0 0 5.22 7a1.97 1.97 0 0 0 1.98-2.01A1.96 1.96 0 0 0 5.25 3Zm6.87 5.5H8.84V20h3.28v-6.03c0-1.59.3-3.12 2.22-3.12 1.89 0 1.91 1.77 1.91 3.22V20h3.29v-6.6c0-3.24-.7-5.73-4.49-5.73-1.82 0-3.03 1.02-3.53 1.99h-.05V8.5Z";
    default:
      return "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.2 1.9A3.65 3.65 0 0 0 3.9 7.55v8.9a3.65 3.65 0 0 0 3.65 3.65h8.9a3.65 3.65 0 0 0 3.65-3.65v-8.9a3.65 3.65 0 0 0-3.65-3.65h-8.9Zm8.97 1.43a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9A3.1 3.1 0 1 0 12 15.1 3.1 3.1 0 0 0 12 8.9Z";
  }
}

export function Footer() {
  const { t, socialLinks, visitCount } = usePortfolio();

  return (
    <footer className="border-t border-border/70 bg-card/80">
      <div className="container-max py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Rutaganda Jean Valentin</p>
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} • {t.footer.location} • {t.footer.rights}
            </p>
            <p className="text-sm text-muted-foreground">Visited {visitCount} times</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-primary">{t.footer.social}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-background p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={link.placeholder ? `${link.label} placeholder link` : link.label}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
                    <path d={iconPath(link.label)} />
                  </svg>
                </Link>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{t.footer.placeholderNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
