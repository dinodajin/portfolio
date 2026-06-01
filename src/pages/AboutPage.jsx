import { PROFILE } from "../data/portfolio";
import MonoLabel from "../components/MonoLabel";

export default function AboutPage({ onClose }) {
  const { about } = PROFILE;

  return (
    <div 
      onClick={onClose} // 바깥 검은 영역을 클릭하면 닫힘
      style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(26, 26, 26, 0.25)", backdropFilter: "blur(12px)",
        zIndex: 999, display: "flex", justifyContent: "center", alignItems: "flex-start",
        overflowY: "auto", padding: "40px 20px"
      }}
    >
      {/* 실제 하얀색 팝업 카드 콘텐츠 본문 */}
      <div 
        onClick={(e) => e.stopPropagation()} // 본문 내부 클릭 시 닫힘 방지
        className="anim-fade"
        style={{
          background: "#FAF9F5", maxWidth: "800px", width: "100%",
          borderRadius: "16px", border: "1px solid #E4E2D8",
          padding: "48px", boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          position: "relative", marginBottom: "40px"
        }}
      >
        {/* 우측 상단 닫기 기능 탑재 버튼 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
          <MonoLabel style={{ color: "#1a1a1a", fontWeight: 700 }}>ABOUT ME</MonoLabel>
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
            ✕ CLOSE
          </button>
        </div>

        {/* Section 1: Intro */}
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "36px", alignItems: "center", marginBottom: "48px" }}>
          <img src={about.avatar} alt={PROFILE.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4E2D8" }} />
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>{PROFILE.name}</h1>
            <p style={{ fontSize: "15px", color: "#5A5850", lineHeight: 1.6, whiteSpace: "pre-line" }}>{about.intro}</p>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

        {/* Section 2: Skills */}
        <div style={{ marginBottom: "48px" }}>
          <MonoLabel style={{ display: "block", marginBottom: "20px" }}>Technical Skills</MonoLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {Object.entries(about.skills).map(([category, list]) => (
              <div key={category} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#7A7870" }}>{category}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {list.map(s => (
                    <span key={s} style={{ fontSize: "12px", fontWeight: 500, padding: "4px 10px", background: "#fff", border: "1px solid #E4E2D8", borderRadius: "6px", color: "#2a2a2a" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

        {/* Section 3: Certifications */}
        <div style={{ marginBottom: "48px" }}>
          <MonoLabel style={{ display: "block", marginBottom: "20px" }}>Certifications & Language</MonoLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            {about.certifications && about.certifications.map((cert, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#fff", border: "1px solid #E4E2D8", borderRadius: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{cert.name}</span>
                <span style={{ fontSize: "12px", color: "#9A9890" }}>{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #E4E2D8", marginBottom: "40px" }} />

        {/* Section 4: Education & Experience */}
        <div style={{ marginBottom: "48px" }}>
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

        {/* Section 5: Contacts */}
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
    </div>
  );
}