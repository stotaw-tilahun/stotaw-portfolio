"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: "💻",
    color: "#6c63ff",
    skills: [
      { name: "JavaScript", level: 80, icon: "🟨" },
      { name: "Java", level: 72, icon: "☕" },
      { name: "C++", level: 70, icon: "⚙️" },
      { name: "Python", level: 68, icon: "🐍" },
    ],
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    color: "#ff6584",
    skills: [
      { name: "HTML5", level: 90, icon: "🔶" },
      { name: "CSS3", level: 85, icon: "🔷" },
      { name: "JavaScript", level: 80, icon: "🟨" },
      { name: "PHP", level: 65, icon: "🐘" },
      { name: "Next.js", level: 60, icon: "▲" },
    ],
  },
  
  {
    category: "Database & Tools",
    icon: "🗄️",
    color: "#f7971e",
    skills: [
      { name: "MySQL", level: 78, icon: "🐬" },
      { name: "MongoDB", level: 65, icon: "🍃" },
      { name: "SQL", level: 75, icon: "📊" },
      { name: "Git & GitHub", level: 80, icon: "🐙" },
      { name: "VS Code", level: 90, icon: "🔵" },
    ],
  },
];

function SkillBar({ name, level, icon, color, animate }: {
  name: string; level: number; icon: string; color: string; animate: boolean;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "0.88rem", color: "var(--text)", fontWeight: 500, display: "flex", gap: "6px", alignItems: "center" }}>
          <span>{icon}</span> {name}
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 600 }}>{level}%</span>
      </div>
      <div
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            borderRadius: "3px",
            transition: "width 1.2s ease",
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("section-visible");
            setAnimate(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
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
            02. Technical Skills
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
            My <span className="gradient-text">Tech Stack</span>
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
            Technologies and tools I&apos;ve worked with during my academic journey and personal projects.
          </p>
        </div>

        {/* Skill groups grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass"
              style={{ padding: "28px", transition: "all 0.3s ease" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${group.color}22`,
                    border: `1px solid ${group.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {group.icon}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name + group.category}
                  {...skill}
                  color={group.color}
                  animate={animate}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "20px" }}>
            Also familiar with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["XAMPP", "Android Studio", "VS Code", "Git", "GitHub", "Linux", "REST APIs", "OOP"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
