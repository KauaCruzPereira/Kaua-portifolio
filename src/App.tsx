import { useState, useEffect, useRef } from "react";
import { useNavigation } from "./hooks/useNavigation";
import { SectionHero } from "./sections/SectionHero";
import { SectionSobre } from "./sections/SectionSobre";
import { SectionContato } from "./sections/SectionContato";
import { SectionProjetos } from "./sections/SectionProjetos";
import BibliotecaDoEstudante from "./assets/png/203logo.png";

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
      websiteUrl: "https://biblioteca-do-estudante.vercel.app/",
      gif: "/gifs/BibliotecaDoEstudante.mp4",
      title: "Biblioteca do Estudante",
      description:
        "Plataforma de estudos para ENEM e Ensino Médio, com biblioteca digital, simulados, página de redação, calculadoras matemáticas com resolução passo a passo e assistente de IA para apoio aos estudos. Desenvolvida como projeto para uma Feira de Ciências.",
      shortDescription: "Plataforma de estudos para ENEM e Ensino Médio.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "CSS",
        "API GroqAI",
      ],
      githubUrl: "https://github.com/KauaCruzPereira/BibliotecaDoEstudante",
      icon: BibliotecaDoEstudante,
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
