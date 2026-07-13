import { useRef } from "react";
import GithubIcon from "../../assets/svg/github";

//GIFS MOBILE DEVEM SER GRAVADOS NO NAVEGADOR COM 1637x907

export type Project = {
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  websiteUrl: string;
  gif: string;
  icon: string;
};

type ProjectCardProps = {
  project: Project;
  onClick?: (project: Project) => void;
  setFullscreenVideo: (value: string | null) => void;
};

export function ProjectCard({ project, setFullscreenVideo }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleNavigate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <article
      className="project-card"
      onClick={() => handleNavigate(project.websiteUrl)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="media-area">
        {project.gif && (
          <video
            ref={videoRef}
            src={project.gif}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>

      <button
        className="fullscreen-btn"
        onClick={(e) => {
          e.stopPropagation();
          setFullscreenVideo(project.gif);
        }}
      >
        ⛶
      </button>

      <div className="bottom-preview">
        <div className="indicator" />
        <div className="project-identity">
          <img
            className="project-initial"
            src={project.icon}
            alt={project.title}
          />

          <h3 className="project-name">{project.title}</h3>
        </div>

        <p className="short-description">{project.shortDescription}</p>
      </div>

      <div className="details-panel">
        <div className="project-identity">
          <img
            className="project-initial"
            src={project.icon}
            alt={project.title}
          />
          <h3 className="project-name">{project.title}</h3>
        </div>

        <p className="long-description">{project.description}</p>

        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-item">
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 30,
            }}
          >
            <GithubIcon width={20} height={20} />

            <a
              className="github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Ver no GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
