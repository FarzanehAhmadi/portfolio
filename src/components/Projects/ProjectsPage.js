import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <section className={styles.projectsPage}>
      <h1>All Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
