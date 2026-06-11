export const SectionSobre = () => {
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

  return (
    <section className="section section-sobre">
      <span className="tag">Sobre mim</span>
      <h2 className="sec-title">O que eu faço</h2>
      <p className="sec-body">
        Crio experiências digitais com atenção aos detalhes. Apaixonado por
        código limpo, interfaces elegantes e soluções criativas para problemas
        complexos.
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
  );
};
