import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data/portfolio";
import Tag from "../components/Tag";
import MonoLabel from "../components/MonoLabel";
import StatBox from "../components/StatBox";

export default function CaseStudyPage({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project.id]);

  const ac = project.accentColor;
  const al = project.accentLight;

  return (
    <div 
      onClick={onClose}
      style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(26, 26, 26, 0.25)", backdropFilter: "blur(12px)",
        zIndex: 999, display: "flex", justifyContent: "center", alignItems: "flex-start",
        overflowY: "auto", padding: "40px 20px"
      }}
      ref={scrollRef}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="anim-fade"
        style={{
          background: "#FAF9F5", maxWidth: "840px", width: "100%",
          borderRadius: "16px", border: "1px solid #E4E2D8",
          padding: "48px", boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          position: "relative", marginBottom: "40px"
        }}
      >
        {/* Top Navigation Utilities Header */}
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

        {/* 유동적 파트 컴포넌트 분기 채널 */}
        {project.sections.map(part => (
          (project.id === "onguard" && part.part === "Part II")
            ? <InteractivePartII key={part.part} part={part} project={project} accent={ac} accentLight={al} />
            : <PartBlock key={part.part} part={part} project={project} accent={ac} accentLight={al} />
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

function PartBlock({ part, project, accent, accentLight }) {
  return (
    <div style={{ marginBottom: "64px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px", paddingBottom: "16px", borderBottom: "1px solid #E4E2D8" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: accent, background: accentLight, padding: "5px 12px", borderRadius: "4px", fontWeight: 600 }}>{part.part}</span>
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a" }}>{part.title}</h2>
          <p style={{ fontSize: "13px", color: "#9A9890" }}>{part.subtitle}</p>
        </div>
      </div>
      
      {part.items.map(item => {
        const targetMediaSrc = 
          (item.gif && project.images?.gifs?.[item.gif]) || 
          (item.image && project.images?.[item.image]);
        const mediaLabel = item.gif ? "실시간 탐지 연동 시연 파이프라인" : "시스템 UI 스크린샷";

        return (
          <div key={item.sectionNum} style={{ marginBottom: "32px", paddingLeft: "20px", borderLeft: `2px solid #E4E2D8` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <MonoLabel style={{ fontSize: "10px" }}>{item.sectionNum}</MonoLabel>
              <div style={{ width: "16px", height: "1px", background: "#D4D2C8" }} />
              <MonoLabel style={{ fontSize: "10px", color: "#7A7870" }}>{item.sectionTitle}</MonoLabel>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: targetMediaSrc ? "1fr 280px" : "1fr", gap: "20px", alignItems: "start" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E2D8", borderRadius: "10px", padding: "24px" }}>
                <p style={{ fontSize: "14px", color: "#5A5850", lineHeight: "1.6" }}>{item.content}</p>
              </div>

              {targetMediaSrc && (
                <div style={{ border: "1px solid #E4E2D8", borderRadius: "10px", overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column" }}>
                  <img src={targetMediaSrc} alt={item.sectionTitle} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                  <div style={{ padding: "8px 12px", background: "#FAF9F5", borderTop: "1px solid #E4E2D8", textAlign: "center" }}>
                    <span style={{ fontSize: "11px", color: "#9A9890", fontWeight: 500 }}>{mediaLabel}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InteractivePartII({ part, project, accent, accentLight }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = part.items[activeIdx];

  return (
    <div style={{ marginBottom: "64px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px", paddingBottom: "16px", borderBottom: "1px solid #E4E2D8" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: accent, background: accentLight, padding: "5px 12px", borderRadius: "4px", fontWeight: 600 }}>
          {part.part}
        </span>
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a" }}>{part.title}</h2>
          <p style={{ fontSize: "13px", color: "#9A9890" }}>{part.subtitle}</p>
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "240px 1fr",
        border: "1px solid #E4E2D8", borderRadius: "12px",
        overflow: "hidden", background: "#fff",
      }}>
        {/* 왼쪽 리스트업 보드 슬롯 */}
        <div style={{ borderRight: "1px solid #E4E2D8", background: "#FAF9F5" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #E4E2D8" }}>
            <MonoLabel style={{ fontSize: "9px", letterSpacing: "0.14em" }}>ENGINEERING MODULES</MonoLabel>
          </div>

          {part.items.map((item, idx) => {
            const isActive = activeIdx === idx;
            const isLive = item.interactive === "latency_sim";
            return (
              <button
                key={item.sectionNum}
                onClick={() => setActiveIdx(idx)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "16px 20px",
                  borderBottom: idx < part.items.length - 1 ? "1px solid #E4E2D8" : "none",
                  borderLeft: `3px solid ${isActive ? accent : "transparent"}`,
                  background: isActive ? "#fff" : "transparent",
                  borderTop: "none", borderRight: "none",
                  cursor: "pointer", transition: "all 0.15s",
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", color: isActive ? accent : "#B0AEA6", marginBottom: "5px" }}>
                  {item.sectionNum}
                </div>
                <div style={{ fontSize: "12px", fontWeight: isActive ? 700 : 500, color: isActive ? "#1a1a1a" : "#6B6965", lineHeight: 1.4 }}>
                  {item.sectionTitle}
                </div>
                {isLive && (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "6px", fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", fontWeight: 600, color: accent, background: accentLight, padding: "2px 7px", borderRadius: "3px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: accent, display: "inline-block" }} />
                    LIVE SIM
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* 우측 본문 디테일 슬롯 보드 */}
        <div style={{ padding: "28px 32px", minHeight: "380px", background: "#FAF9F5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <MonoLabel style={{ fontSize: "10px", color: accent }}>{activeItem.sectionNum}</MonoLabel>
            <div style={{ width: "16px", height: "1px", background: "#D4D2C8" }} />
            <MonoLabel style={{ fontSize: "10px", color: "#7A7870" }}>{activeItem.sectionTitle}</MonoLabel>
          </div>

          {activeItem.interactive === "latency_sim"
            ? <LatencySimulator item={activeItem} project={project} accent={accent} />
            : (
              <div style={{ background: "#fff", border: "1px solid #E4E2D8", borderRadius: "10px", padding: "28px" }}>
                <p style={{ fontSize: "14px", color: "#5A5850", lineHeight: 1.8 }}>{activeItem.content}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

function LatencySimulator({ item, project, accent }) {
  const [mode, setMode] = useState(true); 
  const [isRunning, setIsRunning] = useState(false);
  const [scanWidth, setScanWidth] = useState(0); 
  const timerRef = useRef(null);

  const startReplay = (optimizedMode) => {
    if (isRunning) return;
    setMode(optimizedMode);
    setIsRunning(true);
    setScanWidth(0); 
    clearInterval(timerRef.current);

    const duration = optimizedMode ? 748 : 2500;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    let cur = 0;
    timerRef.current = setInterval(() => {
      cur += step;
      if (cur >= 100) {
        clearInterval(timerRef.current);
        setIsRunning(false);
        cur = 100;
      }
      setScanWidth(cur);
    }, intervalTime);
  };

  useEffect(() => {
    startReplay(true);
    return () => clearInterval(timerRef.current);
  }, []);

  const barColor = mode ? accent : "#1a1a1a";
  const latencyText = mode ? "748 ms (0.74s)" : "8,050 ms (8.05s)";

  const barX = mode ? 703 : 841; 
  const barY = mode ? 134 : 45;
  const barH = mode ? 14 : 103;
  const barColorHex = mode ? "#73BF69" : "#E0B356"; 

  const tempPath = "M 67 220 L 133 220 L 202 220 L 268 219 L 336 219 L 402 219 L 471 219 L 537 206 L 606 201 L 671 224 L 739 204 L 806 190 L 874 204 L 940 192 L 956 215 L 1000 215";
  const strokeColor = mode ? "#56A64B" : "#B87FD9"; 
  const fillColor = mode ? "rgba(86, 166, 75, 0.12)" : "rgba(184, 127, 217, 0.12)";

  const areaPath = `${tempPath} L 1000 250 L 67 250 Z`;
  const widthPercent = scanWidth + "%";

  return (
    <div>
      <div style={{ background: "#fff", border: "1px solid #E4E2D8", borderRadius: "10px", padding: "24px", marginBottom: "20px" }}>
        <p style={{ fontSize: "14px", color: "#5A5850", lineHeight: 1.6 }}>{item.content}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "20px", alignItems: "start" }}>
        {/* 제어 패널 */}
        <div style={{ background: "#fff", border: "1px solid #E4E2D8", borderRadius: "10px", padding: "24px" }}>
          <div style={{ background: "#FAF9F5", border: "1px solid #E4E2D8", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#7A7870" }}>하드웨어 상태 가속 모드 설정</span>
              <span style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: accent }}>
                {isRunning ? "DRAWING..." : "COMPLETED"}
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <button 
                onClick={() => startReplay(false)}
                disabled={isRunning}
                style={{
                  flex: 1, padding: "10px 8px", fontSize: "12px", fontWeight: 700, borderRadius: "6px", cursor: isRunning ? "default" : "pointer", transition: "all 0.15s",
                  border: "1.5px solid #E4E2D8",
                  background: !mode ? "#1a1a1a" : "#fff",
                  color: !mode ? "#fff" : "#6B6B6B"
                }}
              >▶ CPU 모드 재현</button>
              <button 
                onClick={() => startReplay(true)}
                disabled={isRunning}
                style={{
                  flex: 1, padding: "10px 8px", fontSize: "12px", fontWeight: 700, borderRadius: "6px", cursor: isRunning ? "default" : "pointer", transition: "all 0.15s",
                  border: "1.5px solid #E4E2D8",
                  background: mode ? accent : "#fff",
                  color: mode ? "#fff" : "#6B6B6B"
                }}
              >▶ QNN 가속 재현</button>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", marginBottom: "6px" }}>
                <span style={{ color: "#9A9890" }}>On-Device Inference Latency:</span>
                <span style={{ fontWeight: 700, color: "#1a1a1a" }}>{latencyText}</span>
              </div>
              <div style={{ width: "100%", height: "6px", background: "#E4E2D8", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ width: widthPercent, height: "100%", background: barColor, transition: isRunning ? "none" : "width 0.2s ease-out" }} />
              </div>
            </div>
          </div>
        </div>

        {/* 진짜 그라파나 이미지 백그라운드 위 실시간 스캔 그리드 락룸 */}
        <div style={{ border: "1px solid #E4E2D8", borderRadius: "10px", overflow: "hidden", background: "#0B0C0E", display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ position: "relative", width: "100%", height: "260px" }}>
            <img 
              src={project.images?.grafana} 
              alt="Grafana Telemetry Matrix" 
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.9 }} 
            />

            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
              <svg width="100%" height="100%" viewBox="0 0 1000 620" preserveAspectRatio="none">
                <defs>
                  <clipPath id="grafana-scan-mask">
                    <rect x="0" y="0" width={widthPercent} height="100%" />
                  </clipPath>
                </defs>

                <g clipPath="url(#grafana-scan-mask)">
                  <rect 
                    x={barX} 
                    y={barY} 
                    width="77" 
                    height={barH} 
                    fill={barColorHex} 
                    opacity="0.85"
                    style={{ transition: isRunning ? "none" : "all 0.3s" }} 
                  />

                  <path 
                    d={areaPath}
                    fill={fillColor}
                    style={{ transition: isRunning ? "none" : "fill 0.3s" }}
                  />

                  <path 
                    d={tempPath} 
                    fill="none" 
                    stroke={strokeColor} 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={{ transition: isRunning ? "none" : "stroke 0.3s" }}
                  />

                  {scanWidth > 0 && scanWidth < 100 && (
                    <circle 
                      cx={widthPercent} 
                      cy="215" 
                      r="8" 
                      fill="#fff" 
                      stroke={strokeColor} 
                      strokeWidth="4" 
                    />
                  )}
                </g>
              </svg>
            </div>

            <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(11,12,14,0.9)", color: "#fff", fontSize: "8px", fontFamily: "'JetBrains Mono', monospace", padding: "3px 8px", borderRadius: "4px", fontWeight: 600, border: "1px solid #222" }}>
              ● LIVE METRIC DRAWING
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#0B0C0E", borderTop: "1px solid #222", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: mode ? "#73BF69" : "#E0B356", fontWeight: 600 }}>
              {mode ? "✓ HTP 가속 활성화: Avg Latency 748ms 지점 수렴 실측" : "⚠ CPU 런타임 병목: Max Latency 8.05s 상단 임계 계측"}
            </span>
            <span style={{ fontSize: "8px", fontFamily: "'JetBrains Mono', monospace", color: "#4A4E57" }}>
              1000x620 RESOLUTION SYNC
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}