import Image from "next/image";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Experience
            </h2>
            <p className="text-muted-foreground">
              Companies where I have worked
            </p>
          </div>

          <div className="space-y-8">
            <div className="border border-border rounded-lg p-8 bg-card hover:bg-card/80 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Full stack developer, Hepta Dev
                  </h3>
                  <p className="text-muted-foreground">May 2025 - present</p>
                </div>
                <Link
                  href="https://www.heptadev.com/"
                  className="text-primary hover:text-primary/80 transition-colors text-sm underline w-fit"
                >
                  View Website
                </Link>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Harness the power of AI, backed by 50+ skilled developers and
                designers, to redefine your digital workflow with fast,
                flexible, and cost-efficient solutions.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
