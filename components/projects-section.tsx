"use client";

import Image from "next/image";
import Link from "next/link";

import { usePortfolio } from "@/components/portfolio-provider";

export function ProjectsSection() {
  const { t } = usePortfolio();

  return (
    <section id="work" className="section-padding">
      <div className="container-max space-y-10">
        <div>
          <p className="section-eyebrow">{t.projects.eyebrow}</p>
          <h2 className="section-title">{t.projects.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {t.projects.items.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-[2rem] border border-border/70 bg-card/85"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-5 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div>
                  <p className="mb-3 text-sm font-medium text-primary">
                    {t.projects.toolsLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border/70 bg-background px-3 py-2 text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {t.projects.liveDemo}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
