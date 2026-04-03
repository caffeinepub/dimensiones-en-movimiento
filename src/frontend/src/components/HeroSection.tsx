import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-label="Scroll hacia abajo">
      <div className="scroll-indicator-mouse">
        <div className="scroll-indicator-wheel" />
      </div>
      <span
        style={{
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#9aa3ab",
        }}
      >
        Scroll
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Vignette overlay */}
      <div className="vignette-overlay" />

      {/* Centered content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          padding: "0 24px",
        }}
      >
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(47, 195, 255, 0.3)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2fc3ff",
              background: "rgba(47, 195, 255, 0.06)",
            }}
          >
            Portafolio de Diseño 3D
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ display: "block" }}>nexgenx</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #f2f4f6 0%, #9aa3ab 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            figures
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            fontSize: "15px",
            color: "#9aa3ab",
            letterSpacing: "0.04em",
            fontWeight: 400,
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          Diseño 3D&nbsp;&bull;&nbsp;Visualización&nbsp;&bull;&nbsp;Arte Digital
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <a
            href="#proyectos"
            className="cta-button"
            data-ocid="hero.primary_button"
            aria-label="Ver Portafolio"
          >
            <span>Ver Portafolio</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>

      {/* Decorative side particles hint — faint horizontal lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "220px",
          height: "300px",
          background:
            "linear-gradient(90deg, transparent, rgba(47, 195, 255, 0.04))",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "220px",
          height: "300px",
          background:
            "linear-gradient(270deg, transparent, rgba(47, 195, 255, 0.04))",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </section>
  );
}
