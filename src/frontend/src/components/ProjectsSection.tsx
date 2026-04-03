import { motion } from "motion/react";

interface Project {
  id: number;
  title: string;
  software: string[];
  image: string;
  span: "large" | "medium" | "small";
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nexus Tower",
    software: ["Blender", "Substance Painter"],
    image: "/assets/generated/project-architecture.dim_600x400.jpg",
    span: "large",
  },
  {
    id: 2,
    title: "Aegis Sentinel",
    software: ["ZBrush", "Marvelous Designer"],
    image: "/assets/generated/project-character.dim_600x400.jpg",
    span: "medium",
  },
  {
    id: 3,
    title: "Phantom Device",
    software: ["KeyShot", "Rhinoceros"],
    image: "/assets/generated/project-product.dim_600x400.jpg",
    span: "small",
  },
  {
    id: 4,
    title: "Forma Infinita",
    software: ["Cinema 4D", "Redshift"],
    image: "/assets/generated/project-sculpture.dim_600x400.jpg",
    span: "medium",
  },
  {
    id: 5,
    title: "Sigma Core",
    software: ["Blender", "HDRI Haven"],
    image: "/assets/generated/project-product.dim_600x400.jpg",
    span: "small",
  },
  {
    id: 6,
    title: "Echo Fragment",
    software: ["ZBrush", "Blender"],
    image: "/assets/generated/project-sculpture.dim_600x400.jpg",
    span: "small",
  },
];

/* Map span variant → Tailwind grid classes */
function getSpanClasses(span: Project["span"]): string {
  switch (span) {
    case "large":
      return "col-span-2 row-span-2";
    case "medium":
      return "col-span-2 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
}

/* Minimum height per span variant */
function getMinHeight(span: Project["span"]): string {
  switch (span) {
    case "large":
      return "480px";
    default:
      return "220px";
  }
}

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ marginBottom: "56px" }}
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
          Portafolio
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#f2f4f6",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Proyectos
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#9aa3ab",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          Trabajos en 3D y diseño digital
        </p>
      </motion.div>

      {/* Bento grid */}
      <div
        data-ocid="projects.list"
        className="bento-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "220px",
          gap: "16px",
        }}
      >
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            data-ocid={`projects.item.${index + 1}`}
            className={`group bento-card ${getSpanClasses(project.span)}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              border: "1px solid #2a2f35",
              background: "#14171a",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
              cursor: "pointer",
              minHeight: getMinHeight(project.span),
              transition: "border-color 0.35s ease, box-shadow 0.35s ease",
            }}
            whileHover={{
              boxShadow:
                "0 16px 56px rgba(0,0,0,0.65), 0 0 24px rgba(47,195,255,0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(47,195,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2f35";
            }}
          >
            {/* Image — zooms on card hover via CSS .bento-card:hover .bento-img */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="bento-img"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
                transform: "scale(1)",
                willChange: "transform",
              }}
            />

            {/* Dark gradient overlay — always visible at bottom for readability */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />

            {/* Hover overlay — fades in */}
            <div
              className="bento-overlay"
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                opacity: 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Hover content — project name + software badges */}
            <div
              className="bento-content"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: project.span === "large" ? "28px 28px" : "18px 20px",
                zIndex: 3,
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <h3
                style={{
                  fontSize: project.span === "large" ? "22px" : "15px",
                  fontWeight: 700,
                  color: "#f2f4f6",
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    style={{
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      background: "rgba(0,0,0,0.55)",
                      border: "1px solid rgba(47,195,255,0.35)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      color: "#2fc3ff",
                      textTransform: "uppercase" as const,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View all CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ textAlign: "center", marginTop: "56px" }}
      >
        <a
          href="#proyectos"
          data-ocid="projects.secondary_button"
          className="cta-button"
          style={{ display: "inline-flex" }}
        >
          Ver todos los proyectos
        </a>
      </motion.div>
    </section>
  );
}
