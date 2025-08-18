import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.buttons}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
