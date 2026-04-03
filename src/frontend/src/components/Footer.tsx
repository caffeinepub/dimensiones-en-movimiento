import { SiBehance, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const SOCIAL_LINKS = [
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiBehance, label: "Behance", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiX, label: "X / Twitter", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid #1e2228",
        background: "rgba(10, 11, 13, 0.8)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#f2f4f6",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            NEXGENX<span style={{ color: "#2fc3ff" }}>FIGURES</span>
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#9aa3ab",
            }}
          >
            Diseño 3D • Visualización • Arte Digital
          </p>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: "12px",
            color: "#9aa3ab",
            textAlign: "center",
          }}
        >
          © {year}. Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2fc3ff", textDecoration: "none" }}
          >
            caffeine.ai
          </a>
        </p>

        {/* Social icons */}
        <nav
          aria-label="Redes sociales"
          style={{ display: "flex", gap: "16px" }}
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                data-ocid="nav.link"
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid #2a2f35",
                  color: "#9aa3ab",
                  background: "transparent",
                  transition:
                    "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#2fc3ff";
                  el.style.borderColor = "rgba(47, 195, 255, 0.4)";
                  el.style.background = "rgba(47, 195, 255, 0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#9aa3ab";
                  el.style.borderColor = "#2a2f35";
                  el.style.background = "transparent";
                }}
              >
                <Icon size={15} />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
