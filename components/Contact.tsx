"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("section-visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "stotawtilahun21@gmail.com",
      href: "mailto:stotawtilahun21@gmail.com",
      color: "#6c63ff",
      copyValue: "stotawtilahun21@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "0925292124",
      href: "tel:0925292124",
      color: "#43e97b",
      copyValue: "0925292124",
    },
    {
      icon: "🏫",
      label: "University",
      value: "Woldia University",
      href: "#education",
      color: "#ff6584",
      copyValue: "Woldia University",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-hidden"
      style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <span className="tag" style={{ marginBottom: "12px", display: "inline-block" }}>
          05. Contact
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg,#6c63ff,#ff6584)",
            borderRadius: "2px",
            margin: "0 auto 20px",
          }}
        />
        <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.8 }}>
          I&apos;m actively looking for internship opportunities. Whether you have a project, a question, or just want
          to say hi — my inbox is always open!
        </p>
      </div>

      {/* Main CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.08))",
          border: "1px solid rgba(108,99,255,0.3)",
          borderRadius: "24px",
          padding: "48px",
          textAlign: "center",
          marginBottom: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(108,99,255,0.15), transparent)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255,101,132,0.12), transparent)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>👋</div>
        <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "12px" }}>
          Open to Internship Opportunities
        </h3>
        <p style={{ color: "var(--muted)", marginBottom: "28px", maxWidth: "400px", margin: "0 auto 28px", lineHeight: 1.7 }}>
          I&apos;m a motivated CS student ready to contribute, learn, and grow in a professional environment.
        </p>
        <a
          href="mailto:stotawtilahun@gmail.com"
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "14px 32px" }}
        >
          📧 Send Me an Email
        </a>
      </div>

      {/* Contact cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        {contacts.map((c) => (
          <div
            key={c.label}
            className="glass"
            style={{
              padding: "24px",
              textAlign: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => copy(c.copyValue, c.label)}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: `${c.color}22`,
                border: `1px solid ${c.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                margin: "0 auto 12px",
              }}
            >
              {c.icon}
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              {c.label}
            </p>
            <a
              href={c.href}
              style={{ color: c.color, fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", wordBreak: "break-all" }}
              onClick={(e) => e.stopPropagation()}
            >
              {c.value}
            </a>
            {copied === c.label && (
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#43e97b",
                  color: "#000",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                Copied!
              </div>
            )}
            <p style={{ color: "var(--muted)", fontSize: "0.7rem", marginTop: "8px" }}>Click to copy</p>
          </div>
        ))}
      </div>

      {/* Thank you note */}
      <div
        style={{
          textAlign: "center",
          padding: "32px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
        }}
      >
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>
          Thank you for visiting my portfolio. I&apos;m excited to learn, grow, and contribute through internship
          opportunities and professional experiences in the field of Computer Science.
        </p>
        <p style={{ color: "var(--accent)", fontWeight: 700, marginTop: "12px", fontSize: "1rem" }}>
          — Stotaw Tilahun 🚀
        </p>
      </div>
    </section>
  );
}
