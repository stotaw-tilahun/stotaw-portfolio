"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(108,99,255,0.15)",
        padding: "32px 24px",
        textAlign: "center",
        background: "rgba(10,10,15,0.8)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg,#6c63ff,#ff6584)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Stotaw Tilahun
          </span>

          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} · Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
