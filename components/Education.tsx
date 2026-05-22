"use client";
import { useEffect, useRef } from "react";

const courses = [
  "Data Structures & Algorithms",
  "Database Systems",
  "Computer Networks",
  "Web Development",
  "Artificial Intelligence",
  "Operating Systems",
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("section-visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={ref}
      className="section-hidden"
      style={{
        padding: "100px 24px",
        background: "rgba(18,18,26,0.5)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="tag" style={{ marginBottom: "12px", display: "inline-block" }}>
            04. Education
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
            Academic <span className="gradient-text">Background</span>
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
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Degree card */}
          <div
            className="glass"
            style={{
              padding: "36px",
              background: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(108,99,255,0.04))",
              border: "1px solid rgba(108,99,255,0.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circle */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle, rgba(108,99,255,0.2), transparent)",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "14px",
                background: "linear-gradient(135deg,#6c63ff,#a89fff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                marginBottom: "20px",
                boxShadow: "0 0 20px rgba(108,99,255,0.4)",
              }}
            >
              🎓
            </div>

            <div
              style={{
                display: "inline-block",
                background: "rgba(67,233,123,0.15)",
                border: "1px solid rgba(67,233,123,0.3)",
                color: "#43e97b",
                borderRadius: "20px",
                padding: "3px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              ● Currently Enrolled
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "6px", color: "var(--text)" }}>
              B.Sc. Computer Science
            </h3>
            <p style={{ color: "#a89fff", fontWeight: 600, marginBottom: "4px", fontSize: "0.95rem" }}>
              Woldia University
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "20px" }}>
              2022 – Present · 3rd Year Student
            </p>

            <div
              style={{
                background: "rgba(0,0,0,0.2)",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "var(--muted)", fontSize: "0.82rem" }}>Progress</span>
                <span style={{ color: "#a89fff", fontSize: "0.82rem", fontWeight: 600 }}>Year 3 of 4</span>
              </div>
              <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px" }}>
                <div
                  style={{
                    height: "100%",
                    width: "75%",
                    background: "linear-gradient(90deg,#6c63ff,#a89fff)",
                    borderRadius: "3px",
                    boxShadow: "0 0 8px rgba(108,99,255,0.5)",
                  }}
                />
              </div>
            </div>

            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
              Pursuing a comprehensive degree in Computer Science with focus on software development,
              algorithms, and emerging technologies.
            </p>
          </div>

          {/* Courses */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="glass" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "20px", color: "var(--text)" }}>
                📚 Relevant Coursework
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {courses.map((c, i) => (
                  <div
                    key={c}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 12px",
                      background: "rgba(108,99,255,0.06)",
                      border: "1px solid rgba(108,99,255,0.12)",
                      borderRadius: "10px",
                      fontSize: "0.82rem",
                      color: "var(--muted)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.4)";
                      (e.currentTarget as HTMLDivElement).style.color = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.12)";
                      (e.currentTarget as HTMLDivElement).style.color = "var(--muted)";
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#6c63ff,#ff6584)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        color: "white",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Internship seeking */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255,101,132,0.12), rgba(255,101,132,0.04))",
                border: "1px solid rgba(255,101,132,0.25)",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px", color: "var(--text)" }}>
                🎯 Career Objective
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                Seeking an <strong style={{ color: "#ff9fb0" }}>internship opportunity</strong> to apply programming
                knowledge, improve practical software development skills, and gain professional experience in web
                development, mobile applications, and artificial intelligence.
              </p>
              <a
                href="mailto:stotawtilahun@gmail.com"
                className="btn-primary"
                style={{ marginTop: "16px", fontSize: "0.85rem", padding: "10px 20px" }}
              >
                📧 Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
