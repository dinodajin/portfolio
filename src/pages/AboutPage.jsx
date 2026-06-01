import { useState } from "react";
import { PROFILE } from "../data/portfolio";
import MonoLabel from "../components/MonoLabel";
import SideArrow from "../components/SideArrow";

export default function AboutPage({ onBack, onNext, animDir }) {
  const { about } = PROFILE;

  return (
    <div className={animDir === "left" ? "anim-right" : animDir === "right" ? "anim-left" : "anim-fade"} style={{ padding: "32px 0 120px", position: "relative" }}>
      <SideArrow dir="left" onClick={onBack} disabled={false} />
      <SideArrow dir="right" onClick={onNext} disabled={false} />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "56px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#9A9890" }}>← BACK TO HOME</button>
        <MonoLabel>ABOUT ME</MonoLabel>
      </div>

      {/* Section 1: Intro */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "36px", alignItems: "center", marginBottom: "56px" }}>
        <img src={about.avatar} alt={PROFILE.name} style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4E2D8" }} />
        <div>
          <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>{PROFILE.name}</h1>
          <p style={{ fontSize: "15px", color: "#5A5850", lineHeight: 1.6, whiteSpace: "pre-line" }}>{about.intro}</p>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

      {/* Section 2: Skills */}
      <div style={{ marginBottom: "56px" }}>
        <MonoLabel style={{ display: "block", marginBottom: "20px" }}>Technical Skills</MonoLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {Object.entries(about.skills).map(([category, list]) => (
            <div key={category} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#7A7870" }}>{category}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {list.map(s => (
                  <span key={s} style={{ fontSize: "13px", padding: "4px 10px", background: "#fff", border: "1px solid #E4E2D8", borderRadius: "6px" }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

      {/* 신설된 자격증 & 어학 성적 섹션 영역 */}
      <div style={{ marginBottom: "56px" }}>
        <MonoLabel style={{ display: "block", marginBottom: "20px" }}>Certifications & Language</MonoLabel>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "12px" 
        }}>
          {about.certifications && about.certifications.map((cert, idx) => (
            <div key={idx} style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "12px 16px", 
              background: "#fff", 
              border: "1px solid #E4E2D8", 
              borderRadius: "8px" 
            }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{cert.name}</span>
              <span style={{ fontSize: "12px", color: "#9A9890", fontFamily: "'Pretendard Variable', sans-serif" }}>{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

      {/* Section 3: Education & Career Timeline */}
      <div style={{ marginBottom: "56px" }}>
        <MonoLabel style={{ display: "block", marginBottom: "24px" }}>Education & Experience</MonoLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", borderLeft: "2px solid #E4E2D8", paddingLeft: "20px", marginLeft: "8px" }}>
          {about.timeline.map((item, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <div style={{ position: "absolute", width: "10px", height: "10px", background: "#1a1a1a", borderRadius: "50%", left: "-26px", top: "5px" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#9A9890", display: "block", marginBottom: "4px" }}>{item.date}</span>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#5A5850" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

      {/* Section 4: Contact Links */}
      <div>
        <MonoLabel style={{ display: "block", marginBottom: "16px" }}>Connect</MonoLabel>
        <div style={{ display: "flex", gap: "24px" }}>
          {about.contacts.map(c => (
            <a key={c.label} href={c.url} target="_blank" rel="noreferrer" style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a", textDecoration: "none", borderBottom: "1.5px solid #1a1a1a", paddingBottom: "2px" }}>
              {c.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}