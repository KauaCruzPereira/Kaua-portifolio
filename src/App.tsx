import { useState, useEffect, useRef } from "react";
import { useNavigation } from "./hooks/useNavigation";
import { SectionHero } from "./sections/SectionHero";
import { SectionSobre } from "./sections/SectionSobre";
import { SectionContato } from "./sections/SectionContato";
import { SectionProjetos } from "./sections/SectionProjetos";
import SolverEquacoesIcon from "./assets/png/favicon.png";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  const { current, animating, sections, goTo, onTouchStart, onTouchEnd } =
    useNavigation();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [current, animating]);

  const projectsData = [
    {
      websiteUrl: "https://solver-equacoes.vercel.app/",
      gif: "/gifs/SolverEquacoes.mp4",
      title: "SolverEquações",
      description:
        "SolverEquações é uma calculadora matemática desenvolvida para dispositivos móveis que resolve expressões e equações apresentando cada etapa da resolução. O projeto também integra um assistente de inteligência artificial para auxiliar estudantes na compreensão dos cálculos e conceitos matemáticos, sendo apresentado na Feira de Ciências do CEDUP.",
      shortDescription:
        "Calculadora que resolve expressões e equações, mostrando cada etapa.",
      technologies: ["React-native", "TypeScript", "Expo", "API GroqAI"],
      githubUrl: "https://github.com/KauaCruzPereira/SolverEquacoes",
      icon: SolverEquacoesIcon,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="portfolio-root"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="sections-track"
        style={{ transform: `translateY(-${current * 100}vh)` }}
      >
        <SectionHero />
        <SectionSobre />
        <SectionContato />
        <SectionProjetos
          projects={projectsData}
          handleSetFullScreen={(gif) => setFullscreenVideo(gif)}
        />
      </div>

      <nav className="dots-nav" aria-label="Navegação por seções">
        {sections.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para seção ${i + 1}`}
          />
        ))}
      </nav>

      {fullscreenVideo && (
        <div className="video-modal" onClick={() => setFullscreenVideo(null)}>
          <video
            src={fullscreenVideo}
            controls
            autoPlay
            loop
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="close-btn"
            onClick={() => setFullscreenVideo(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
