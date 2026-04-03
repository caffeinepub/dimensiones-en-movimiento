import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface ProductDetailPageProps {
  projectId: number;
  onClose: () => void;
}

const CAROUSEL_IMAGES = [
  "/assets/generated/product-detail-1.dim_1200x800.jpg",
  "/assets/generated/product-detail-2.dim_1200x800.jpg",
  "/assets/generated/product-detail-3.dim_1200x800.jpg",
  "/assets/generated/product-detail-4.dim_1200x800.jpg",
];

const CAROUSEL_IMAGE_KEYS = ["detail-1", "detail-2", "detail-3", "detail-4"];

const TECH_SPECS = [
  { label: "Poligonaje", value: "2.4M tris" },
  { label: "Software", value: "ZBrush + Blender" },
  { label: "Render Engine", value: "Cycles" },
  { label: "Materiales", value: "PBR 4K" },
  { label: "Dimensiones", value: "Escala 1:6" },
  { label: "Texturas", value: "Albedo, Normal, AO" },
];

const SOFTWARE_BADGES = ["ZBrush", "Blender", "Cycles"];
const STYLE_TAGS = ["Sci-Fi", "Hard Surface", "Character", "Collectible"];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        role="img"
        aria-label="Instagram"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "18px", height: "18px" }}
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          stroke="white"
          strokeWidth="1.8"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="4.5"
          stroke="white"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    name: "ArtStation",
    href: "https://artstation.com",
    icon: (
      <svg
        role="img"
        aria-label="ArtStation"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "18px", height: "18px" }}
      >
        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.164-1.333H9.419L21.598 22.54l1.99-3.44a2.42 2.42 0 0 0 .412-1.352zm-11.129-3.462L7.428 4.538 1.997 13.286h10.874z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://behance.net",
    icon: (
      <svg
        role="img"
        aria-label="Behance"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "18px", height: "18px" }}
      >
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.336.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.67 1.45.67 2.36 0 .75-.13 1.39-.41 1.93-.28.54-.67.98-1.16 1.32-.49.33-1.05.57-1.69.72-.63.15-1.28.22-1.96.22H0V4.502h6.938zm-.412 5.803c.596 0 1.077-.14 1.44-.43.363-.29.545-.73.545-1.33 0-.33-.06-.61-.176-.84a1.35 1.35 0 0 0-.48-.53 2.04 2.04 0 0 0-.717-.3 3.954 3.954 0 0 0-.892-.09H2.59v3.52h3.936zm.22 6.095c.334 0 .65-.03.95-.1.3-.07.565-.18.79-.33.225-.16.408-.37.543-.64.136-.27.204-.61.204-1.02 0-.81-.23-1.39-.686-1.74-.456-.35-1.063-.52-1.82-.52H2.59v4.35h4.156zm11.52-1.565c.38.37.924.55 1.64.55.51 0 .95-.13 1.32-.38.37-.26.6-.53.69-.82h2.507c-.4 1.24-1.015 2.13-1.845 2.66-.83.53-1.834.8-3.012.8-.817 0-1.555-.13-2.21-.39-.655-.26-1.21-.63-1.665-1.11-.454-.48-.806-1.06-1.053-1.73-.248-.67-.372-1.42-.372-2.22 0-.78.127-1.51.38-2.18.254-.67.612-1.25 1.073-1.73.46-.48 1.014-.86 1.66-1.14.646-.28 1.365-.42 2.157-.42.88 0 1.65.17 2.31.51.66.34 1.2.8 1.63 1.38.43.58.74 1.25.93 2.01.19.76.26 1.56.21 2.41h-7.45c.043.86.33 1.49.71 1.87zm2.87-4.98c-.302-.34-.786-.51-1.45-.51-.422 0-.775.07-1.054.21-.28.14-.507.32-.68.52-.17.2-.29.42-.36.65a3.1 3.1 0 0 0-.12.65h4.31c-.098-.68-.34-1.18-.645-1.52zm-3.44-4.977h5.14v1.37h-5.14V4.88z" />
      </svg>
    ),
  },
];

export function ProductDetailPage({ onClose }: ProductDetailPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number, dir: "next" | "prev" = "next") => {
    if (isAnimating || index === activeIndex) return;
    setDirection(dir);
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => {
    const newIndex =
      activeIndex === 0 ? CAROUSEL_IMAGES.length - 1 : activeIndex - 1;
    goTo(newIndex, "prev");
  };

  const next = () => {
    const newIndex =
      activeIndex === CAROUSEL_IMAGES.length - 1 ? 0 : activeIndex + 1;
    goTo(newIndex, "next");
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const sidebarDelays = [0.15, 0.25, 0.35, 0.45];

  return (
    <motion.div
      data-ocid="product.page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        minHeight: "100vh",
        background: "#0d1014",
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid #1e2429",
          background: "rgba(13,16,20,0.92)",
          backdropFilter: "blur(12px)",
          padding: "0 32px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2fc3ff",
          }}
        >
          nexgenxfigures
        </span>
        <NavBackButton onClose={onClose} />
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
        }}
        className="product-grid"
      >
        {/* ── Left: Carousel ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{ minWidth: 0 }}
        >
          {/* Main image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(300px, 45vw, 580px)",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#111417",
              border: "1px solid #1e2429",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeIndex}
                src={CAROUSEL_IMAGES[activeIndex]}
                alt={`Vista ${activeIndex + 1} - Aegis Sentinel`}
                initial={{
                  opacity: 0,
                  scale: direction === "next" ? 1.04 : 0.96,
                  x: direction === "next" ? 20 : -20,
                }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  scale: direction === "next" ? 0.96 : 1.04,
                  x: direction === "next" ? -20 : 20,
                }}
                transition={{ duration: 0.38, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </AnimatePresence>

            {/* Arrow: Prev */}
            <ArrowButton
              data-ocid="product.pagination_prev"
              onClick={prev}
              aria-label="Imagen anterior"
              side="left"
            />

            {/* Arrow: Next */}
            <ArrowButton
              data-ocid="product.pagination_next"
              onClick={next}
              aria-label="Siguiente imagen"
              side="right"
            />

            {/* Image counter badge */}
            <div
              style={{
                position: "absolute",
                bottom: "14px",
                right: "14px",
                zIndex: 10,
                background: "rgba(13,16,20,0.75)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(6px)",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#9aa3ab",
                letterSpacing: "0.04em",
              }}
            >
              {activeIndex + 1} / {CAROUSEL_IMAGES.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
            {CAROUSEL_IMAGES.map((img, i) => (
              <ThumbnailButton
                key={CAROUSEL_IMAGE_KEYS[i]}
                img={img}
                index={i}
                activeIndex={activeIndex}
                onSelect={() => goTo(i, i > activeIndex ? "next" : "prev")}
              />
            ))}
          </div>

          {/* Dot indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            {CAROUSEL_IMAGES.map((_, i) => (
              <DotButton
                key={CAROUSEL_IMAGE_KEYS[i]}
                index={i}
                activeIndex={activeIndex}
                onSelect={() => goTo(i, i > activeIndex ? "next" : "prev")}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Right: Sidebar ── */}
        <div style={{ minWidth: 0 }}>
          {/* Back button (sidebar top) */}
          <NavBackButton onClose={onClose} style={{ paddingBottom: "20px" }} />

          {/* Product title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: sidebarDelays[0] }}
          >
            <h1
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#f2f4f6",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Aegis Sentinel
            </h1>

            {/* Software badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {SOFTWARE_BADGES.map((sw) => (
                <span
                  key={sw}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    background: "rgba(47,195,255,0.08)",
                    border: "1px solid rgba(47,195,255,0.3)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#2fc3ff",
                    textTransform: "uppercase",
                  }}
                >
                  {sw}
                </span>
              ))}
            </div>

            {/* Separator */}
            <div
              style={{
                height: "1px",
                background: "#1e2429",
                marginBottom: "24px",
              }}
            />
          </motion.div>

          {/* Technical description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: sidebarDelays[1] }}
            style={{ marginBottom: "28px" }}
          >
            <SectionLabel>Descripción Técnica</SectionLabel>
            <div
              data-ocid="product.panel"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 16px",
              }}
            >
              {TECH_SPECS.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: "#111417",
                    border: "1px solid #1e2429",
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9aa3ab",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#f2f4f6",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Style tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: sidebarDelays[2] }}
            style={{ marginBottom: "28px" }}
          >
            <SectionLabel>Categorías</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STYLE_TAGS.map((tag) => (
                <StyleTag key={tag}>{tag}</StyleTag>
              ))}
            </div>
          </motion.div>

          {/* Social media buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: sidebarDelays[3] }}
          >
            <SectionLabel>Síguenos</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {SOCIAL_LINKS.map(({ name, href, icon }) => (
                <SocialButton key={name} href={href} icon={icon}>
                  {name}
                </SocialButton>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 900px) {
          .product-grid {
            grid-template-columns: 60% 40% !important;
            align-items: start;
          }
          .product-grid > :first-child {
            position: sticky;
            top: 72px;
          }
        }
      `}</style>
    </motion.div>
  );
}

/* ── Sub-components ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#9aa3ab",
        marginBottom: "12px",
      }}
    >
      {children}
    </p>
  );
}

function StyleTag({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      data-ocid="product.toggle"
      style={{
        padding: "6px 14px",
        borderRadius: "9999px",
        background: hovered ? "rgba(47,195,255,0.05)" : "#1a1e22",
        border: hovered
          ? "1px solid rgba(47,195,255,0.5)"
          : "1px solid #2a2f35",
        fontSize: "12px",
        fontWeight: 500,
        color: "#f2f4f6",
        letterSpacing: "0.02em",
        cursor: "default",
        transition: "border-color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}

function SocialButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="product.link"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        padding: "11px 18px",
        borderRadius: "12px",
        background: hovered ? "#252b32" : "#1e2227",
        border: hovered ? "1px solid #363d47" : "1px solid #2a2f35",
        color: "white",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        letterSpacing: "0.03em",
        transition:
          "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        whiteSpace: "nowrap",
        boxShadow: hovered ? "0 0 20px rgba(255,255,255,0.06)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      {children}
    </a>
  );
}

function NavBackButton({
  onClose,
  style: extraStyle,
}: {
  onClose: () => void;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      data-ocid="product.close_button"
      onClick={onClose}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: hovered ? "#f2f4f6" : "#9aa3ab",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        padding: "8px 0",
        transition: "color 0.2s ease",
        ...extraStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ChevronLeftIcon />
      Volver a galería
    </button>
  );
}

function ArrowButton({
  onClick,
  "aria-label": ariaLabel,
  side,
  "data-ocid": dataOcid,
}: {
  onClick: () => void;
  "aria-label": string;
  side: "left" | "right";
  "data-ocid": string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      data-ocid={dataOcid}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        position: "absolute",
        [side]: "14px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: hovered ? "rgba(47,195,255,0.15)" : "rgba(13,16,20,0.7)",
        border: hovered
          ? "1px solid rgba(47,195,255,0.4)"
          : "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {side === "left" ? (
        <ChevronLeftIcon color="white" />
      ) : (
        <ChevronRightIcon color="white" />
      )}
    </button>
  );
}

function ThumbnailButton({
  img,
  index,
  activeIndex,
  onSelect,
}: {
  img: string;
  index: number;
  activeIndex: number;
  onSelect: () => void;
}) {
  const isActive = index === activeIndex;
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      data-ocid={`product.item.${index + 1}`}
      onClick={onSelect}
      aria-label={`Ver imagen ${index + 1}`}
      style={{
        flex: 1,
        height: "72px",
        borderRadius: "10px",
        overflow: "hidden",
        border: isActive ? "2px solid #2fc3ff" : "2px solid transparent",
        outline: "none",
        cursor: "pointer",
        padding: 0,
        background: "#111417",
        transition: "border-color 0.2s ease, opacity 0.2s ease",
        opacity: isActive ? 1 : hovered ? 0.85 : 0.55,
        boxShadow: isActive ? "0 0 12px rgba(47,195,255,0.35)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img}
        alt={`Thumbnail ${index + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </button>
  );
}

function DotButton({
  index,
  activeIndex,
  onSelect,
}: {
  index: number;
  activeIndex: number;
  onSelect: () => void;
}) {
  const isActive = index === activeIndex;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Ir a imagen ${index + 1}`}
      style={{
        width: isActive ? "24px" : "8px",
        height: "8px",
        borderRadius: "9999px",
        background: isActive ? "#2fc3ff" : "#2a2f35",
        border: "none",
        cursor: "pointer",
        padding: 0,
        transition: "width 0.3s ease, background 0.3s ease",
      }}
    />
  );
}

/* ── Icon helpers ── */
function ChevronLeftIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      role="img"
      aria-label="Anterior"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      role="img"
      aria-label="Siguiente"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
