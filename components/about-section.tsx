import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-80 bg-card rounded-lg overflow-hidden border border-border">
              <Image
                src="/globe.svg"
                width={40}
                height={40}
                alt="RUTAGANDA JEAN VALENTIN"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <p className="text-muted-foreground mb-2">
                Get to know me better
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m RUTAGANDA JEAN VALENTIN, a developer with three years of
              experience building web solutions. I specialize in turning ideas
              into tangible products with a focus on React, Next.js, TypeScript,
              Java, and Spring Boot.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Companies where I have worked
              </h3>
              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Full stack developer, Hepta Dev
                      </h4>
                      <p className="text-muted-foreground">
                        May 2025 - present
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Harness the power of AI, backed by 50+ skilled developers
                    and designers, to redefine your digital workflow with fast,
                    flexible, and cost-efficient solutions.
                  </p>
                  <div className="flex gap-2">
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
        </div>
      </div>
    </section>
  );
}
