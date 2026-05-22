"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const strengths = [
  { icon: "⚡", label: "Fast Learner" },
  { icon: "🤝", label: "Team Player" },
  { icon: "🧩", label: "Problem Solver" },
  { icon: "💡", label: "Creative Thinker" },
  { icon: "🎯", label: "Self-Motivated" },
  { icon: "💬", label: "Communicator" },
];

const interests = [
  { icon: "🤖", label: "Artificial Intelligence" },
  { icon: "🌐", label: "Web Development" },
  { icon: "🎨", label: "UI/UX Design" },
  { icon: "🚀", label: "Tech Innovation" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-hidden"
      style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <span className="tag" style={{ marginBottom: "12px", display: "inline-block" }}>
          01. About Me
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            marginBottom: "16px",
          }}
        >
          Who I <span className="gradient-text">Am</span>
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg,#6c63ff,#ff6584)",
            borderRadius: "2px",
            margin: "0 auto",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Bio card */}
        <div className="glass" style={{ padding: "36px", textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "0 auto 20px",
              boxShadow: "0 0 30px rgba(108,99,255,0.3)",
              overflow: "hidden",
              position: "relative",
              border: "3px solid #6c63ff"
            }}
          >
            <Image src="/profile.jpg" alt="Stotaw Tilahun" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>
            Stotaw Tilahun
          </h3>
          <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "16px" }}>
            3rd Year Computer Science Student
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px", fontSize: "0.95rem" }}>
            I&apos;m a passionate CS student at <strong style={{ color: "var(--text)" }}>Woldia University</strong> with
            a strong interest in software development, artificial intelligence, and modern web technologies.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            I enjoy solving real-world problems through code and continuously improve my skills by building practical
            projects. My goal is to become a professional software engineer specializing in{" "}
            <strong style={{ color: "var(--text)" }}>AI and Full Stack Development</strong>.
          </p>

          <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { icon: "📧", label: "stotawtilahun@gmail.com" },
              { icon: "📞", label: "0925292124" },
              { icon: "🏫", label: "Woldia University" },
              { icon: "📍", label: "Ethiopia" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                <span style={{ color: "var(--muted)", fontSize: "0.88rem" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths + Interests */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Strengths */}
          <div className="glass" style={{ padding: "28px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "20px", color: "var(--text)" }}>
              💪 Strengths
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {strengths.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(108,99,255,0.08)",
                    border: "1px solid rgba(108,99,255,0.15)",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.5)";
                    (e.currentTarget as HTMLDivElement).style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.15)";
                    (e.currentTarget as HTMLDivElement).style.color = "var(--muted)";
                  }}
                >
                  <span>{s.icon}</span>
                  <span style={{ fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="glass" style={{ padding: "28px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "20px", color: "var(--text)" }}>
              🎯 Interests
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {interests.map((item) => (
                <span
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(67,233,123,0.08)",
                    border: "1px solid rgba(67,233,123,0.2)",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    fontSize: "0.82rem",
                    color: "#7fffb0",
                    fontWeight: 500,
                  }}
                >
                  {item.icon} {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Future goal */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(255,101,132,0.08))",
              border: "1px solid rgba(108,99,255,0.25)",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px", color: "var(--text)" }}>
              🚀 Future Goal
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Become a professional software engineer specializing in{" "}
              <strong style={{ color: "#a89fff" }}>AI & Full Stack Development</strong>, contributing to innovative
              projects that solve real-world problems using modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
