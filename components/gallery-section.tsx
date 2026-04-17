"use client";

import Image from "next/image";
import { useState } from "react";

import { usePortfolio } from "@/components/portfolio-provider";

export function GallerySection() {
  const { t } = usePortfolio();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? t.gallery.items[activeIndex] : null;

  return (
    <section id="gallery" className="section-padding">
      <div className="container-max space-y-10">
        <div>
          <p className="section-eyebrow">{t.gallery.eyebrow}</p>
          <h2 className="section-title">{t.gallery.title}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.gallery.items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card text-left"
              onClick={() => setActiveIndex(index)}
              aria-label={`${t.gallery.open}: ${item.caption}`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-5 text-white">
                <p className="font-medium">{item.caption}</p>
                {item.placeholder ? (
                  <p className="text-xs text-white/75">Placeholder</p>
                ) : null}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
            onClick={() => setActiveIndex(null)}
          >
            {t.gallery.close}
          </button>
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black">
            <div className="relative aspect-[16/10]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="border-t border-white/10 px-6 py-4 text-white">
              <p className="font-medium">{activeItem.caption}</p>
              {activeItem.placeholder ? (
                <p className="text-sm text-white/70">Placeholder</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
