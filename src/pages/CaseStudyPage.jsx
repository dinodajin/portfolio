import { useEffect, useRef } from "react";
import { PROJECTS } from "../data/portfolio";
import Tag from "../components/Tag";
import MonoLabel from "../components/MonoLabel";
import StatBox from "../components/StatBox";

export default function CaseStudyPage({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const scrollRef = useRef(null);

  // 새로운 프로젝트로 데이터가 교체될 때 팝업창 내부를 맨 위로 부드럽게 초기화
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project.id]);

  const ac = project.accentColor;
  const al = project.accentLight;

  return (
    <div 
      onClick={onClose} // 어두운 흐림막을 선택하면 홈으로 복귀
      style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(26, 26, 26, 0.25)", backdropFilter: "blur(12px)",
        zIndex: 999, display: "flex", justifyContent: "center", alignItems: "flex-start",
        overflowY: "auto", padding: "40px 20px"
      }}
      ref={scrollRef}
    >
      {/* 프로젝트 카드 몸통 레이아웃 */}
      <div 
        onClick={(e) => e.stopPropagation()} // 본문 래퍼 클릭 시 오버레이 닫힘 방지
        className="anim-fade"
        style={{
          background: "#FAF9F5", maxWidth: "840px", width: "100%",
          borderRadius: "16px", border: "1px solid #E4E2D8",
          padding: "48px", boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          position: "relative", marginBottom: "40px"
        }}
      >
        {/* 모달 조작 및 페이징 탑 링커 유틸 헤더 바 */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
          <button 
            onClick={onClose} 
            style={{ 
              background: "none", border: "none", cursor: "pointer", 
              fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", 
              fontWeight: 700, color: "#9A9890", transition: "color 0.2s" 
            }}
            onMouseEnter={(e) => e.target.style.color = "#1a1a1a"}
            onMouseLeave={(e) => e.target.style.color = "#9A9890"}
          >
            ✕ CLOSE CASE
          </button>
          
          {/* 이전 / 다음 연동 좌우 미니멀 페이징 컨트롤러 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button 
              disabled={!hasPrev} 
              onClick={onPrev} 
              style={{ background: "none", border: "none", cursor: hasPrev ? "pointer" : "default", color: hasPrev ? "#1a1a1a" : "#D4D2C8", fontWeight: 700, fontSize: "16px" }}
            >
              ‹ PREV
            </button>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#B0AEA6" }}>
              {project.index} / 0{PROJECTS.length}
            </span>
            <button 
              disabled={!hasNext} 
              onClick={onNext} 
              style={{ background: "none", border: "none", cursor: hasNext ? "pointer" : "default", color: hasNext ? "#1a1a1a" : "#D4D2C8", fontWeight: 700, fontSize: "16px" }}
            >
              NEXT ›
            </button>
          </div>
        </div>

        {/* 메인 케이스 스터디 내용물 출력 스크립트 */}
        <div style={{ display: "inline-block", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: ac, background: al, letterSpacing: "0.12em", padding: "5px 12px", borderRadius: "4px", marginBottom: "20px" }}>
          {project.category}
        </div>
        
        <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
          {project.title}
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px" }}>
          {project.tags.map(t => <Tag key={t} color={ac} bg={al}>{t}</Tag>)}
        </div>

        <div style={{ borderLeft: `3px solid ${ac}`, paddingLeft: "20px", marginBottom: "40px" }}>
          <p style={{ fontSize: "17px", fontWeight: 600, color: "#2a2a2a", lineHeight: 1.6 }}>{project.headline}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", background: "#fff", border: "1px solid #E4E2D8", borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
          {project.stats.map((s, i) => (
            <div key={s.label} style={{ padding: "20px", borderLeft: i > 0 ? "1px solid #E4E2D8" : "none", borderTop: i > 1 ? "1px solid #E4E2D8" : "none" }}>
              <StatBox {...s} accent={i === 0 ? ac : undefined} />
            </div>
          ))}
        </div>

        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#5A5850", marginBottom: "48px" }}>{project.description}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginBottom: "64px" }}>
          {project.features.map(f => (
            <FeatureCard key={f.title} {...f} accent={ac} />
          ))}
        </div>

        {project.sections.map(part => (
          <PartBlock key={part.part} part={part} accent={ac} accentLight={al} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, badge, accent }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #E4E2D8", borderRadius: "12px", padding: "24px 20px" }}>
      <div style={{ fontSize: "24px", marginBottom: "12px" }}>{icon}</div>
      <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", color: "#1a1a1a" }}>{title}</h4>
      <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#7A7870", marginBottom: "14px" }}>{desc}</p>
      <MonoLabel style={{ color: accent, fontSize: "10px" }}>{badge}</MonoLabel>
    </div>
  );
}

function PartBlock({ part, accent, accentLight }) {
  return (
    <div style={{ marginBottom: "64px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px", paddingBottom: "16px", borderBottom: "1px solid #E4E2D8" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: accent, background: accentLight, padding: "5px 12px", borderRadius: "4px", fontWeight: 600 }}>{part.part}</span>
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a" }}>{part.title}</h2>
          <p style={{ fontSize: "13px", color: "#9A9890" }}>{part.subtitle}</p>
        </div>
      </div>
      {part.items.map(item => (
        <div key={item.sectionNum} style={{ marginBottom: "32px", paddingLeft: "20px", borderLeft: `2px solid #E4E2D8` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <MonoLabel style={{ fontSize: "10px" }}>{item.sectionNum}</MonoLabel>
            <div style={{ width: "16px", height: "1px", background: "#D4D2C8" }} />
            <MonoLabel style={{ fontSize: "10px", color: "#7A7870" }}>{item.sectionTitle}</MonoLabel>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4E2D8", borderRadius: "10px", padding: "24px" }}>
            <p style={{ fontSize: "14px", color: "#5A5850", lineHeight: "1.6" }}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}