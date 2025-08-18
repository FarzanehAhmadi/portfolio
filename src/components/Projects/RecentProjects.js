import { Link } from "react-router-dom";
import styles from "./RecentProjects.module.css";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const RecentProjects = () => {
  const recentProjects = projects.slice(0, 3);
  return (
    <div className={styles["recent-projects-section"]}>
      <h2 className={styles.title}>Recent Projects</h2>
      <div className={styles["recent-projects"]}>
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link to="/projects" className={styles.showMore}>
        Show More
      </Link>
    </div>
  );
};

export default RecentProjects;
