"use client";

import { usePortfolio } from "@/components/portfolio-provider";

export function AwardsSection() {
  const { t } = usePortfolio();

  return (
    <section id="awards" className="section-padding">
      <div className="container-max space-y-10">
        <div>
          <p className="section-eyebrow">{t.awards.eyebrow}</p>
          <h2 className="section-title">{t.awards.title}</h2>
        </div>

        <div className="space-y-5">
          {t.awards.items.map((award) => (
            <article
              key={`${award.title}-${award.year}`}
              className="grid gap-4 rounded-3xl border border-border/70 bg-card/80 p-6 md:grid-cols-[140px_1fr]"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {award.year}
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                  {award.placeholder ? (
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
                      Placeholder
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-primary">{award.organization}</p>
                <p className="text-muted-foreground">{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
