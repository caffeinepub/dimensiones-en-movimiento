import { Box, Eye, Layers, Zap } from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: Box,
    title: "Modelado 3D",
    description:
      "Creación de modelos tridimensionales detallados para arquitectura, producto y personajes.",
  },
  {
    icon: Eye,
    title: "Visualización",
    description:
      "Renders fotorrealistas y animaciones que transmiten tus ideas con claridad cinematográfica.",
  },
  {
    icon: Zap,
    title: "Motion Design",
    description:
      "Animaciones fluidas y efectos visuales que dan vida a tus proyectos digitales.",
  },
  {
    icon: Layers,
    title: "Dirección de Arte",
    description:
      "Concepto visual, identidad estética y supervisión creativa para proyectos complejos.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 24px",
        background:
          "linear-gradient(180deg, transparent, rgba(20, 23, 26, 0.6) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#2fc3ff",
              marginBottom: "12px",
            }}
          >
            Lo que ofrezco
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#f2f4f6",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textTransform: "uppercase",
            }}
          >
            Servicios
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  padding: "32px 28px",
                  background: "#14171a",
                  border: "1px solid #2a2f35",
                  borderRadius: "12px",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(47, 195, 255, 0.35)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(47, 195, 255, 0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#2a2f35";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(47, 195, 255, 0.1)",
                    border: "1px solid rgba(47, 195, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    color: "#2fc3ff",
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#f2f4f6",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9aa3ab",
                    lineHeight: 1.65,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
