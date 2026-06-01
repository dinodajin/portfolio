import { useState, useEffect } from "react";
import { PROFILE, PROJECTS } from "../data/portfolio";
import Tag from "../components/Tag";
import MonoLabel from "../components/MonoLabel";
import StatBox from "../components/StatBox";
import SideArrow from "../components/SideArrow";

export default function HomePage({ onNavigate, onNavigateAbout, onNext }) {
  const [count, setCount] = useState(0);
  const [btnHov, setBtnHov] = useState(false);

  useEffect(() => {
    let c = 0;
    const t = setInterval(() => {
      c++; setCount(c);
      if (c >= PROJECTS.length) clearInterval(t);
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="anim-fade" style={{ padding: "72px 0 80px", position: "relative" }}>
      {/* 다음 코스(About)로 연동되는 오른쪽 고정 화살표 */}
      <SideArrow dir="right" onClick={onNext} disabled={false} />

      {/* Top Navigation Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "80px" }}>
        <MonoLabel style={{ fontSize: "12px", color: "#1a1a1a", fontWeight: 600 }}>Portfolio · {PROFILE.tagline}</MonoLabel>
        <button 
          onClick={onNavigateAbout}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fontWeight: 700,
            letterSpacing: "0.08em", color: "#1a1a1a", borderBottom: "2px solid #1a1a1a",
            paddingBottom: "4px", transition: "opacity 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.opacity = 0.6}
          onMouseLeave={(e) => e.target.style.opacity = 1}
        >ABOUT ME ↗</button>
      </div>

      {/* Hero Headline */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(80px, 14vw, 140px)", fontWeight: 700, lineHeight: 0.95, color: "#1a1a1a", letterSpacing: "-0.04em", marginBottom: "20px" }}>
          <span style={{ color: "#C8C6BC" }}>0{count}</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
          <div style={{ width: "3px", background: "#1a1a1a", flexShrink: 0, alignSelf: "stretch", minHeight: "64px", borderRadius: "2px" }} />
          <div>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, lineHeight: 1.1, whiteSpace: "pre-line", marginBottom: "16px" }}>{PROFILE.headline}</h1>
            <p style={{ fontSize: "16px", color: "#7A7870", lineHeight: 1.7, whiteSpace: "pre-line" }}>{PROFILE.subheadline}</p>
          </div>
        </div>
      </div>

      {/* 시각적 인지 향상을 위한 대형 인트로 커넥션 배너 버튼 */}
      <div style={{ marginBottom: "48px" }}>
        <button
          onClick={onNavigateAbout}
          onMouseEnter={() => setBtnHov(true)}
          onMouseLeave={() => setBtnHov(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            padding: "14px 24px", background: btnHov ? "#1a1a1a" : "transparent",
            color: btnHov ? "#fff" : "#1a1a1a", border: "1.5px solid #1a1a1a",
            borderRadius: "30px", cursor: "pointer", fontSize: "14px", fontWeight: 700,
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: btnHov ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
          }}
        >
          <span>엔지니어 소개 및 이력(About) 확인하기</span>
          <span style={{ transform: btnHov ? "translateX(4px)" : "none", transition: "transform 0.2s" }}>→</span>
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "48px" }}>
        {PROFILE.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>

      {/* Meta Statistics Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #E4E2D8", borderBottom: "1px solid #E4E2D8", padding: "24px 0", marginBottom: "72px" }}>
        {[
          { label: "플랫폼", value: PROFILE.platform },
          { label: "주요 역할", value: PROFILE.mainRole },
          { label: "추가 역할", value: PROFILE.subRole },
        ].map((item, i) => (
          <div key={item.label} style={{ padding: "0 24px", borderLeft: i > 0 ? "1px solid #E4E2D8" : "none" }}>
            <StatBox {...item} />
          </div>
        ))}
      </div>

      {/* Case Study Project List */}
      <div>
        <MonoLabel style={{ display: "block", marginBottom: "20px" }}>Selected Case Studies</MonoLabel>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} project={p} onClick={() => onNavigate(i)} />
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: "pointer", display: "grid", gridTemplateColumns: "52px 1fr auto", alignItems: "center", gap: "20px",
        padding: "22px 16px", margin: "0 -16px", borderRadius: "10px", background: hov ? "#EFEDE5" : "transparent",
        transition: "background 0.16s", borderBottom: "1px solid #E4E2D8",
      }}
    >
      <MonoLabel style={{ fontSize: "12px", color: hov ? project.accentColor : "#9A9890" }}>{project.index}</MonoLabel>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
          <span style={{ fontSize: "19px", fontWeight: 700, color: hov ? project.accentColor : "#1a1a1a", transition: "color 0.16s" }}>{project.title}</span>
          <MonoLabel style={{ fontSize: "10px" }}>{project.subtitle}</MonoLabel>
        </div>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {project.tags.map(t => (
            <Tag key={t} color={hov ? project.accentColor : "#6B6B6B"} bg={hov ? project.accentLight : "#ECECEC"}>{t}</Tag>
          ))}
        </div>
      </div>
      <span style={{ fontSize: "20px", color: hov ? project.accentColor : "#C8C6BC", transform: hov ? "translateX(4px)" : "none", transition: "all 0.16s" }}>→</span>
    </div>
  );
}