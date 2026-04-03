import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0f1113 0%, #171a1d 50%, #0f1113 100%)",
        position: "relative",
      }}
    >
      {/* Particle canvas — fixed, behind everything */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
