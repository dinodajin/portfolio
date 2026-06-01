import { useState, useEffect, useCallback } from "react";
import "./styles/global.css";
import { PROJECTS } from "./data/portfolio";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export default function App() {
  // 전역 라우터 상태 관리: "home" | "about" | number(project 인덱스)
  const [page, setPage] = useState("home");
  const [animDir, setAnimDir] = useState("none"); // 슬라이딩 트랜지션 방향

  const goToProject = useCallback((idx, dir = "none") => {
    setAnimDir(dir);
    setPage(idx);
  }, []);

  const goHome = useCallback(() => {
    setAnimDir("right");
    setPage("home");
  }, []);

  const goAbout = useCallback((dir = "left") => {
    setAnimDir(dir);
    setPage("about");
  }, []);

  const goNext = useCallback(() => {
    if (page === "home") {
      goAbout("left");
    } else if (page === "about") {
      goToProject(0, "left");
    } else if (typeof page === "number" && page < PROJECTS.length - 1) {
      goToProject(page + 1, "left");
    }
  }, [page, goAbout, goToProject]);

  const goPrev = useCallback(() => {
    if (page === "about") {
      goHome();
    } else if (page === 0) {
      goAbout("right");
    } else if (typeof page === "number" && page > 0) {
      goToProject(page - 1, "right");
    }
  }, [page, goHome, goAbout, goToProject]);

  // 키보드 내비게이션 바인딩 (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
      {page === "home" && (
        <HomePage 
          onNavigate={(idx) => goToProject(idx, "none")} 
          onNavigateAbout={() => goAbout("left")} 
          onNext={goNext}
        />
      )}
      {page === "about" && (
        <AboutPage 
          onBack={goPrev} 
          onNext={goNext} 
          animDir={animDir} 
        />
      )}
      {typeof page === "number" && (
        <CaseStudyPage
          project={PROJECTS[page]}
          onBack={goHome}
          onPrev={goPrev}
          onNext={goNext}
          hasNext={page < PROJECTS.length - 1}
          animDir={animDir}
        />
      )}
    </div>
  );
}