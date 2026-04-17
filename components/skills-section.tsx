"use client";

import { usePortfolio } from "@/components/portfolio-provider";

export function SkillsSection() {
  const { t } = usePortfolio();

  return (
    <section id="skills" className="section-padding">
      <div className="container-max space-y-10">
        <div>
          <p className="section-eyebrow">{t.skills.eyebrow}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.skills.groups.map((group) => (
            <article
              key={group.name}
              className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-[0_16px_40px_rgba(2,6,23,0.12)]"
            >
              <h3 className="mb-4 text-xl font-semibold">{group.name}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-2 text-muted-foreground">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
