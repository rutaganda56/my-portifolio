import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Information:
            </h2>
            <p className="text-muted-foreground">
              Let&apos;s work together on your next project
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-muted-foreground">📞</span>
              <a
                href="tel:0786862012"
                className="text-foreground hover:text-primary transition-colors"
              >
                0786862012
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-muted-foreground">✉️</span>
              <a
                href="mailto:valentinrutaganda04@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                valentinrutaganda04@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
