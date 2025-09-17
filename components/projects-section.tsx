import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="work" className="section-padding">
      <div className="container-max">
        <div className="space-y-12">
          <div>
            <p className="text-muted-foreground mb-2">
              Some of projects I have worked on
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">My Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group">
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src="/pickovo.JPG"
                  width={600} // Much larger to match display size
                  height={338} // 16:9 ratio (600 ÷ 16 × 9)
                  alt="PICKOVO project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">PICKOVO</h3>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Tools Used:</p>
                    <p className="text-sm font-medium">Next.js</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pickovo is Rwanda&apos;s leading mobile car service platform.
                  Get expert auto repair, maintenance, and diagnostics at your
                  doorstep. Book online for efficient.
                </p>
                <Link
                  href="https://www.pickovo.com/"
                  className="text-primary hover:text-primary/80 transition-colors text-sm underline w-fit"
                >
                  View Website
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group">
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src="/minetech.JPG"
                  width={600}
                  height={338}
                  alt="MINETECH project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">MINETECH</h3>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Tools Used:</p>
                    <p className="text-sm font-medium">Next.js</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pickovo is Rwanda&apos;s leading mobile car service platform.
                  Get expert auto repair, maintenance, and diagnostics at your
                  doorstep. Book online for efficient.
                </p>
                <Link
                  href="https://www.minetech.co.rw/"
                  className="text-primary hover:text-primary/80 transition-colors text-sm underline w-fit"
                >
                  View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
