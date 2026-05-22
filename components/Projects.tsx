"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction for Telecom",
    emoji: "🤖",
    category: "Artificial Intelligence",
    categoryColor: "#6c63ff",
    description:
      "An intelligent system that predicts future telecommunication customer behavior and service patterns using machine learning and data analysis techniques.",
    longDesc:
      "Helps telecom companies improve customer satisfaction and business decision-making by forecasting customer trends, analyzing communication patterns, and visualizing performance data.",
    tech: ["Python", "Machine Learning", "Data Analysis", "AI", "Data Visualization"],
    features: [
      "Customer behavior prediction",
      "Future trend forecasting",
      "Data visualization dashboard",
      "Performance analysis reports",
      "Pattern recognition engine",
    ],
    outcomes: "Helps organizations understand customer trends and improve future telecommunication services.",
    gradient: "linear-gradient(135deg, #6c63ff22, #6c63ff08)",
    border: "rgba(108,99,255,0.25)",
    glow: "rgba(108,99,255,0.15)",
  },
  {
    id: 2,
    title: "Real-Time QUIZ & Examination Platform",
    emoji: "📝",
    category: "Web Development",
    categoryColor: "#ff6584",
    description:
      "A modern web-based quiz and examination platform for online student assessment with full user management and result tracking.",
    longDesc:
      "Designed and developed a full-stack web application enabling students and instructors to manage examinations efficiently with real-time score calculation and result management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "User login & registration",
      "Quiz management system",
      "Multiple-choice questions",
      "Automatic score calculation",
      "Result management & history",
      "Database integration",
    ],
    outcomes: "A functional online quiz platform that allows students and instructors to manage examinations efficiently.",
    gradient: "linear-gradient(135deg, #ff658422, #ff658408)",
    border: "rgba(255,101,132,0.25)",
    glow: "rgba(255,101,132,0.15)",
  },
  {
    id: 3,
    title: "Real-Time Student Performance Analytics Dashboard",
    emoji: "📝",
    category: "Web Development",
    categoryColor: "#ff6584",
    description:
      "A modern web-based quiz and examination platform for online student assessment with full user management and result tracking.",
    longDesc:
      "Designed and developed a full-stack web application enabling students and instructors to manage examinations efficiently with real-time score calculation and result management.",
    tech: ["react", "javascript", "node.js", "mongodb"],
    features: [
  "Real-time student performance tracking",
  "Interactive analytics dashboard",
  "Attendance monitoring system",
  "Assignment & quiz tracking",
  "Automatic grade calculation",
  "Performance trend analysis",
  "AI-based performance prediction",
  "Student progress reports",
  "Teacher & parent notifications",
  "Role-based user access",
  "Data visualization charts",
  "Database integration system",
],
    outcomes: [
  "Improved student academic performance",
  "Early identification of struggling students",
  "Better attendance management",
  "Enhanced teacher decision-making",
  "Accurate real-time performance insights",
  "Increased student engagement",
  "Efficient academic progress tracking",
  "Data-driven educational planning",
  "Improved parent-teacher communication",
  "Automated reporting and analytics",
],
    gradient: "linear-gradient(135deg, #ff658422, #ff658408)",
    border: "rgba(255,101,132,0.25)",
    glow: "rgba(255,101,132,0.15)",
  },
  {
    id: 4,
    title: "Customer Behaviour Analytics Dashboard",
    emoji: "📝",
    category: "Web Development",
    categoryColor: "#ff6584",
    description:
    "A modern customer behaviour analytics dashboard designed to track customer activities, analyze purchasing patterns, monitor sales performance, and provide intelligent business insights through interactive visualizations and real-time analytics.",
    longDesc:
      "Designed and developed a full-stack web application enabling students and instructors to manage examinations efficiently with real-time score calculation and result management.",
    tech: ["react", "javascript", "node.js", "mongodb"],
  features: [
  "Customer behavior tracking system",
  "Real-time analytics dashboard",
  "Purchase pattern analysis",
  "Customer segmentation",
  "Sales performance monitoring",
  "Interactive data visualization",
  "AI-based customer insights",
  "Customer retention analytics",
  "Report generation & export",
  "Database integration system",
],
    outcomes: "A functional online quiz platform that allows students and instructors to manage examinations efficiently.",
    gradient: "linear-gradient(135deg, #ff658422, #ff658408)",
    border: "rgba(255,101,132,0.25)",
    glow: "rgba(255,101,132,0.15)",
  },
];

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="section-hidden"
      style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <span className="tag" style={{ marginBottom: "12px", display: "inline-block" }}>
          03. Projects
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
          What I&apos;ve <span className="gradient-text">Built</span>
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg,#6c63ff,#ff6584)",
            borderRadius: "2px",
            margin: "0 auto 16px",
          }}
        />
        <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto", fontSize: "0.95rem" }}>
          Projects I&apos;ve developed during my academic journey, combining theory with practical implementation.
        </p>
      </div>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            style={{
              background: p.gradient,
              border: `1px solid ${p.border}`,
              borderRadius: "20px",
              padding: "40px",
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
              gap: "40px",
              alignItems: "start",
              transition: "all 0.3s ease",
              boxShadow: `0 4px 30px ${p.glow}`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 50px ${p.glow}`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 30px ${p.glow}`;
            }}
            className="project-card"
          >
            {/* Left: info */}
            <div>
              {/* Category badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: `${p.categoryColor}22`,
                  border: `1px solid ${p.categoryColor}44`,
                  color: p.categoryColor,
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                {p.category}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  color: "var(--text)",
                }}
              >
                {p.emoji} {p.title}
              </h3>

              {/* Description */}
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.92rem" }}>
                {p.description}
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px", fontSize: "0.88rem" }}>
                {p.longDesc}
              </p>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: `${p.categoryColor}15`,
                      border: `1px solid ${p.categoryColor}30`,
                      color: p.categoryColor,
                      borderRadius: "6px",
                      padding: "3px 10px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  fontStyle: "italic",
                }}
              >
                <strong style={{ color: "var(--text)", fontStyle: "normal" }}>Outcome: </strong>
                {p.outcomes}
              </div>
            </div>

            {/* Right: features */}
            <div>
              <div
                style={{
                  background: "rgba(0,0,0,0.2)",
                  border: `1px solid ${p.border}`,
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: p.categoryColor,
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  ✨ Key Features
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "var(--muted)",
                        fontSize: "0.88rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: p.categoryColor,
                          flexShrink: 0,
                          boxShadow: `0 0 6px ${p.categoryColor}`,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project number */}
              <div
                style={{
                  marginTop: "20px",
                  textAlign: "right",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: `${p.categoryColor}15`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                0{p.id}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
