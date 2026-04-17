"use client";

import Link from "next/link";

import { usePortfolio } from "@/components/portfolio-provider";

const companyLinks = [
  "https://a2sv.org/",
  "https://www.heptadev.com/",
];

export function ExperienceSection() {
  const { t } = usePortfolio();

  return (
    <section id="experience" className="section-padding">
      <div className="container-max space-y-10">
        <div>
          <p className="section-eyebrow">{t.experience.title}</p>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t.experience.intro}
          </p>
        </div>

        <div className="space-y-6">
          {t.experience.items.map((item, index) => (
            <article
              key={`${item.role}-${item.period}`}
              className="rounded-3xl border border-border/70 bg-card/80 p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-primary">{item.period}</p>
                </div>
                <Link
                  href={companyLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {t.experience.website}
                </Link>
              </div>

              <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
