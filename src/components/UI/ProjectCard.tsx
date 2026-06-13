import { Project } from "../../data/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.copy}>
        <span>{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}
