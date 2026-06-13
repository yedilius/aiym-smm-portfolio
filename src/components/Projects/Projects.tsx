import { projects } from "../../data/projects";
import { Section } from "../UI/Section";
import { ProjectCard } from "../UI/ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section id="projects" tone="dark" ariaLabel="Кейсы">
      <div className={styles.heading}>
        <span>Selected work</span>
        <h2>Кейсы</h2>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
