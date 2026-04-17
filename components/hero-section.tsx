"use client";

import Image from "next/image";

import { usePortfolio } from "@/components/portfolio-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t, visitCount } = usePortfolio();

  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <Image
                src="/WhatsApp Image 2026-04-17 at 11.43.24 (1).jpeg"
                alt="Rutaganda Jean Valentin portrait"
                fill
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
              {t.hero.badge}
            </Badge>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {["React", "Next.js", "TypeScript", "Java", "Spring Boot"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.hero.cta}
              </Button>
              <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                {t.hero.visitLabel} {visitCount} {visitCount === 1 ? "time" : "times"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
