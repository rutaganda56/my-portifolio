import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AwardsSection } from "@/components/awards-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { PortfolioProvider } from "@/components/portfolio-provider";

export default function Home() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          {/* <AwardsSection /> */}
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}
