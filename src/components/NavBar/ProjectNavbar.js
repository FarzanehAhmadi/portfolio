import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
const ProjectsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};
export default ProjectsNavbar;
