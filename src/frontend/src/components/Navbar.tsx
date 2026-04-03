import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Acerca de", href: "#acerca" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "inicio",
        "proyectos",
        "servicios",
        "acerca",
        "contacto",
      ];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled
          ? "rgba(26, 29, 32, 0.92)"
          : "rgba(26, 29, 32, 0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(42, 47, 53, 0.8)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          data-ocid="nav.link"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#f2f4f6",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          NEXGENX<span style={{ color: "#2fc3ff" }}>FIGURES</span>
        </a>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className={`nav-link${activeSection === link.href ? " active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
