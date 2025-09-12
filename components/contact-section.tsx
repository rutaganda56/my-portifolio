import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea"

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

          <div className="bg-card rounded-lg p-8 border border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background" />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="bg-background"
                />
              </div>
              <Input placeholder="Subject" className="bg-background" />
              {/* <Textarea placeholder="Your Message" rows={5} className="bg-background" /> */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
