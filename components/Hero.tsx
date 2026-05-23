"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Computer Science Student",
  "Web Developer",
  "AI Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  const current = roles[roleIndex];

  let timeout: NodeJS.Timeout;

  if (typing) {
    if (charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setTyping(false);
      }, 1800);
    }
  } else {
    if (charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else {
      timeout = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }, 300);
    }
  }

  return () => clearTimeout(timeout);
}, [charIndex, typing, roleIndex]);
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 40px",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(255,101,132,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(67,233,123,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Orbit rings */}
      <div
        className="orbit-ring animate-spin-slow"
        style={{ width: "500px", height: "500px", top: "50%", left: "50%", marginTop: "-250px", marginLeft: "-250px" }}
      />
      <div
        className="orbit-ring"
        style={{
          width: "700px",
          height: "700px",
          top: "50%",
          left: "50%",
          marginTop: "-350px",
          marginLeft: "-350px",
          animation: "spin-slow 20s linear infinite reverse",
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Avatar */}
        <div
          className="animate-float"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#6c63ff,#ff6584)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
            margin: "0 auto 24px",
            boxShadow: "0 0 40px rgba(108,99,255,0.4)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image src="/profile.png" alt="Profile" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Badge */}
        <div
          className="animate-fadeInUp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(108,99,255,0.12)",
            border: "1px solid rgba(108,99,255,0.3)",
            borderRadius: "50px",
            padding: "6px 16px",
            fontSize: "0.82rem",
            color: "#a89fff",
            marginBottom: "20px",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#43e97b" }}>●</span>
          Available for Internship
        </div>

        {/* Name */}
        <h1
          className="animate-fadeInUp delay-100"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Stotaw Tilahun</span>
        </h1>

        {/* Typewriter */}
        <div
          className="animate-fadeInUp delay-200"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "var(--muted)",
            marginBottom: "24px",
            height: "2rem",
            opacity: 0,
          }}
        >
          <span style={{ color: "var(--accent)" }}>&gt; </span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>{displayed}</span>
          <span className="animate-blink" style={{ color: "var(--accent)" }}>|</span>
        </div>

        {/* Description */}
        <p
          className="animate-fadeInUp delay-300"
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            maxWidth: "560px",
            margin: "0 auto 36px",
            lineHeight: 1.8,
            opacity: 0,
          }}
        >
          3rd Year CS student at <strong style={{ color: "var(--text)" }}>Woldia University</strong> passionate about
          building intelligent systems, modern web apps, and mobile experiences that solve real-world problems.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fadeInUp delay-400"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
            opacity: 0,
          }}
        >
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fadeInUp delay-500"
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          {[
            { value: "2+", label: "Projects Built" },
            { value: "5+", label: "Technologies" },
            { value: "3rd", label: "Year Student" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg,#6c63ff,#ff6584)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--muted)",
            fontSize: "0.75rem",
          }}
        >
          <span>Scroll to explore</span>
          <div
            style={{
              width: "24px",
              height: "40px",
              border: "2px solid rgba(108,99,255,0.4)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                background: "var(--accent)",
                borderRadius: "2px",
                animation: "float 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
