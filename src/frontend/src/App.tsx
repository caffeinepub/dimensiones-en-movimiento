import { useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  if (selectedProjectId !== null) {
    return (
      <ProductDetailPage
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    );
  }

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
        <ProjectsSection onSelectProject={(id) => setSelectedProjectId(id)} />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
