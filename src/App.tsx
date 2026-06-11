import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "./components/ProjectCard";
import SolverEquacoesIcon from "./assets/png/favicon.png";

const sections = [
  { id: "hero" },
  { id: "sobre" },
  { id: "contato" },
  { id: "projetos" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    if (idx < 0 || idx >= sections.length) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 800);
  };

  const goNext = () => goTo(current + 1);

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

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 40) dy > 0 ? goTo(current + 1) : goTo(current - 1);
    touchStartY.current = null;
  };

  const handleNavigate = (value: string) => () => {
    switch (value) {
      case "Email":
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=kauacruzps@gmail.com",
          "_blank",
        );
        break;
      case "GitHub":
        window.open("https://github.com/KauaCruzPereira", "_blank");
        break;
      case "LinkedIn":
        window.open("https://linkedin.com/in/kauã-cruz-pereira", "_blank");
        break;
      case "WhatsApp":
        window.open("https://wa.me/5548991596521", "_blank");
        break;
    }
  };

  const skillsData = [
    {
      name: "HTML",
      desc: "Marcação semântica, acessibilidade e estrutura de documentos web.",
      level: 95,
      levelLabel: "avançado",
      tags: ["semântica", "acessibilidade", "SEO"],
    },
    {
      name: "CSS",
      desc: "Estilização avançada com Flexbox, Grid, animações e variáveis.",
      level: 90,
      levelLabel: "avançado",
      tags: ["flexbox", "grid", "animações"],
    },
    {
      name: "React",
      desc: "Componentes reutilizáveis, hooks, context e gerenciamento de estado.",
      level: 85,
      levelLabel: "avançado",
      tags: ["hooks", "context", "vite"],
    },
    {
      name: "React Native",
      desc: "Apps móveis multiplataforma com componentes nativos e expo.",
      level: 90,
      levelLabel: "avançado",
      tags: ["expo", "iOS", "Android"],
    },
    {
      name: "JavaScript",
      desc: "ES6+, async/await, manipulação do DOM e lógica de negócio.",
      level: 65,
      levelLabel: "intermediário",
      tags: ["ES6+", "async", "DOM"],
    },
    {
      name: "TypeScript",
      desc: "Tipagem estática, interfaces, generics e melhor tooling.",
      level: 80,
      levelLabel: "avançado",
      tags: ["tipos", "interfaces", "generics"],
    },
    {
      name: "Node.js",
      desc: "APIs REST, middleware, autenticação e integração com bancos.",
      level: 72,
      levelLabel: "intermediário",
      tags: ["express", "REST", "auth"],
    },
  ];

  const projectsData = [
    {
      websiteUrl: "https://solver-equacoes.vercel.app/",
      gif: "/gifs/SolverEquacoes.mp4",
      title: "SolverEquações",
      description:
        "SolverEquações é uma calculadora matemática desenvolvida para dispositivos móveis que resolve expressões e equações apresentando cada etapa da resolução. O projeto também integra um assistente de inteligência artificial para auxiliar estudantes na compreensão dos cálculos e conceitos matemáticos, sendo apresentado na Feira de Ciências do CEDUP.",
      shortDescription:
        "Calculadora que resolve expressões e equações, mostrando cada etapa.",
      technologies: ["React", "Node.js", "Express"],
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
        <section className="section section-hero">
          <span className="tag">Bem vindo ao meu portfólio</span>
          <h1 className="hero-title">
            Olá, me chamo <span className="outlined">Kauã</span>
          </h1>
          <p className="subtitle">desenvolvedor · inovador · criador</p>
          <button className="btn-explore" onClick={goNext}>
            Explorar mais →
          </button>
        </section>

        <section className="section section-sobre">
          <span className="tag">Sobre mim</span>
          <h2 className="sec-title">O que eu faço</h2>
          <p className="sec-body">
            Crio experiências digitais com atenção aos detalhes. Apaixonado por
            código limpo, interfaces elegantes e soluções criativas para
            problemas complexos.
          </p>
          <div className="skill-row">
            {skillsData.map((s) => (
              <div key={s.name} className="skill-pill">
                {s.name}
                <div className="skill-tooltip">
                  <div className="tt-name">{s.name}</div>
                  <div className="tt-desc">{s.desc}</div>
                  <div className="tt-bar-wrap">
                    <div className="tt-bar-bg">
                      <div
                        className="tt-bar-fill"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                    <span className="tt-level">{s.levelLabel}</span>
                  </div>
                  <div className="tt-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="tt-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-contato">
          <span className="tag">Contato</span>
          <h2 className="sec-title">Vamos conversar</h2>
          <p className="sec-body">
            Aberto a projetos freelance, colaborações e oportunidades.
          </p>
          <div className="contact-grid">
            {[
              {
                label: "Email",
                val: "kauacruzps@email.com",
              },
              {
                label: "GitHub",
                val: "@KauaCruzPereira",
              },
              {
                label: "LinkedIn",
                val: "/in/kauã-cruz-pereira",
              },
              {
                label: "WhatsApp",
                val: "48 99159-6521",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="contact-card"
                onClick={handleNavigate(c.label)}
              >
                <div className="c-label">{c.label}</div>
                <div className="c-val">{c.val}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-projetos">
          <span className="tag">Projetos</span>

          <h2 className="sec-title">Meus Projetos</h2>

          <p className="sec-body">
            Confira alguns dos meus trabalhos recentes e tecnologias utilizadas.
          </p>

          <div
            className={`projects-grid ${
              projectsData.length === 1 ? "single-project" : ""
            }`}
          >
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                setFullscreenVideo={setFullscreenVideo}
              />
            ))}
          </div>
        </section>
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
