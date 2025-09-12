"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            {/* <Badge variant="secondary" className="w-fit">
              Software engineer
            </Badge> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Hi, I&apos;m RUTAGANDA JEAN VALENTIN.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              As a passionate full-stack developer and technology enthusiast, I
              specialize in transforming innovative ideas into tangible
              realities. I build custom Webflow sites and code-driven projects.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-primary-foreground">⚛</span>
              </div>
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xs text-secondary-foreground">N</span>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs text-accent-foreground">TS</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs text-muted-foreground">☕</span>
              </div>
              <div className="w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center">
                <span className="text-xs text-primary-foreground">🍃</span>
              </div>
            </div>

            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              My Projects
            </Button>
          </div>

          <div className="flex-shrink-0">
            <div className="w-80 h-96 bg-card rounded-lg overflow-hidden border border-border">
              <Image
                src="/globe.svg"
                width={40}
                height={40}
                alt="RUTAGANDA JEAN VALENTIN"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
