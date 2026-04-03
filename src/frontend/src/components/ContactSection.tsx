import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contacto"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 24px 120px",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(47, 195, 255, 0.1)",
              border: "1px solid rgba(47, 195, 255, 0.25)",
              color: "#2fc3ff",
              marginBottom: "20px",
            }}
          >
            <Mail size={22} />
          </div>
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
            Hablemos
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
            Contacto
          </h2>
        </motion.div>

        <motion.form
          data-ocid="contact.modal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#9aa3ab",
                  marginBottom: "8px",
                  letterSpacing: "0.04em",
                }}
              >
                Nombre
              </label>
              <input
                id="contact-name"
                data-ocid="contact.input"
                type="text"
                placeholder="Tu nombre"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#14171a",
                  border: "1px solid #2a2f35",
                  borderRadius: "8px",
                  color: "#f2f4f6",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = "#2fc3ff";
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = "#2a2f35";
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#9aa3ab",
                  marginBottom: "8px",
                  letterSpacing: "0.04em",
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                data-ocid="contact.input"
                type="email"
                placeholder="tu@email.com"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#14171a",
                  border: "1px solid #2a2f35",
                  borderRadius: "8px",
                  color: "#f2f4f6",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = "#2fc3ff";
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = "#2a2f35";
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 500,
                color: "#9aa3ab",
                marginBottom: "8px",
                letterSpacing: "0.04em",
              }}
            >
              Mensaje
            </label>
            <textarea
              id="contact-message"
              data-ocid="contact.textarea"
              placeholder="Cuéntame sobre tu proyecto..."
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "#14171a",
                border: "1px solid #2a2f35",
                borderRadius: "8px",
                color: "#f2f4f6",
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                resize: "vertical",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "#2fc3ff";
              }}
              onBlur={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "#2a2f35";
              }}
            />
          </div>

          <button
            type="submit"
            data-ocid="contact.submit_button"
            className="cta-button"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            {submitted ? (
              <span data-ocid="contact.success_state">¡Mensaje enviado!</span>
            ) : (
              <>
                <Send size={14} />
                <span>Enviar mensaje</span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
