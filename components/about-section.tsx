"use client";

import Image from "next/image";

import { usePortfolio } from "@/components/portfolio-provider";

export function AboutSection() {
  const { t } = usePortfolio();

  return (
    <section id="about" className="section-padding">
      <div className="container-max grid items-start gap-10 lg:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-border/70 bg-card">
          <Image
            src="/WhatsApp Image 2026-04-17 at 11.43.24 (1).jpeg"
            alt="Rutaganda Jean Valentin"
            fill
            sizes="(max-width: 1024px) 280px, 320px"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="section-eyebrow">{t.about.eyebrow}</p>
            <h2 className="section-title">{t.about.title}</h2>
          </div>

          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t.about.body}
          </p>
        </div>
      </div>
    </section>
  );
}
