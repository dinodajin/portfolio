import { useState, useEffect, useCallback } from "react";
import "./styles/global.css";
import { PROJECTS } from "./data/portfolio";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(null); // null 이면 닫힘, 숫자(index)면 해당 프로젝트 팝업 열림

  const openAbout = useCallback(() => setAboutOpen(true), []);
  const closeAbout = useCallback(() => setAboutOpen(false), []);

  const openProject = useCallback((idx) => setActiveProjectIdx(idx), []);
  const closeProject = useCallback(() => setActiveProjectIdx(null), []);

  const nextProject = useCallback(() => {
    if (activeProjectIdx !== null && activeProjectIdx < PROJECTS.length - 1) {
      setActiveProjectIdx(activeProjectIdx + 1);
    }
  }, [activeProjectIdx]);

  const prevProject = useCallback(() => {
    if (activeProjectIdx !== null && activeProjectIdx > 0) {
      setActiveProjectIdx(activeProjectIdx - 1);
    }
  }, [activeProjectIdx]);

  // ESC 키 클릭 시 열려있는 모든 팝업창을 닫아주는 글로벌 편리성 UX 바인딩
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeAbout();
        closeProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeAbout, closeProject]);

  // 팝업이 하나라도 열려있으면 뒷배경 홈 화면의 스크롤을 고정(가둠)하여 버그를 방지합니다.
  useEffect(() => {
    if (aboutOpen || activeProjectIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [aboutOpen, activeProjectIdx]);

  return (
    <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
      
      <HomePage 
        onNavigate={openProject} 
        onNavigateAbout={openAbout} 
      />

      {aboutOpen && (
        <AboutPage onClose={closeAbout} />
      )}

      {activeProjectIdx !== null && (
        <CaseStudyPage
          project={PROJECTS[activeProjectIdx]}
          onClose={closeProject}
          onPrev={prevProject}
          onNext={nextProject}
          hasPrev={activeProjectIdx > 0}
          hasNext={activeProjectIdx < PROJECTS.length - 1}
        />
      )}
    </div>
  );
}