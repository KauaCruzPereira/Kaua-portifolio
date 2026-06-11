import { ProjectCard } from "../../components/ProjectCard";

type SectionProjetosProps = {
  projects: {
    title: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    websiteUrl: string;
    gif: string;
    icon: string;
  }[];
  handleSetFullScreen: (gif: string) => void;
};

export const SectionProjetos = ({
  projects,
  handleSetFullScreen,
}: SectionProjetosProps) => {
  return (
    <section className="section section-projetos">
      <span className="tag">Projetos</span>

      <h2 className="sec-title">Meus Projetos</h2>

      <p className="sec-body">
        Confira alguns dos meus trabalhos recentes e tecnologias utilizadas.
      </p>

      <div
        className={`projects-grid ${
          projects.length === 1 ? "single-project" : ""
        }`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            setFullscreenVideo={() => handleSetFullScreen(project.gif)}
          />
        ))}
      </div>
    </section>
  );
};
