import { motion } from "motion/react";

const STATS = [
  { value: "5+", label: "Años de experiencia" },
  { value: "120+", label: "Proyectos completados" },
  { value: "40+", label: "Clientes satisfechos" },
  { value: "15+", label: "Premios recibidos" },
];

export function AboutSection() {
  return (
    <section
      id="acerca"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
            Mi historia
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#f2f4f6",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            Acerca de mí
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#9aa3ab",
              lineHeight: 1.75,
              marginBottom: "20px",
            }}
          >
            Soy un diseñador 3D especializado en visualización arquitectónica,
            diseño de producto y arte digital. Mi trabajo combina precisión
            técnica con visión artística para crear experiencias visuales que
            trascienden lo ordinario.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#9aa3ab",
              lineHeight: 1.75,
              marginBottom: "32px",
            }}
          >
            Cada proyecto es una oportunidad para explorar nuevas dimensiones
            del espacio, la luz y la forma. Trabajo con herramientas de
            vanguardia para transformar conceptos abstractos en realidades
            visuales impactantes.
          </p>
          <a
            href="#contacto"
            data-ocid="about.primary_button"
            className="cta-button"
            style={{ display: "inline-flex" }}
          >
            Trabajemos juntos
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  padding: "28px 24px",
                  background: "#14171a",
                  border: "1px solid #2a2f35",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "#2fc3ff",
                    lineHeight: 1,
                    marginBottom: "8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#9aa3ab",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
