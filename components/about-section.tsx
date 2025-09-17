import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-80 bg-card rounded-lg overflow-hidden border border-border">
              <Image
                src="/myImage.jpg"
                width={256} // Match w-64 (64 * 4 = 256px)
                height={320} // Match h-80 (80 * 4 = 320px)
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
          </div>
        </div>
      </div>
    </section>
  );
}
