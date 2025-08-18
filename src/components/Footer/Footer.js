import React from "react";
import styles from "./Footer.module.css";
import github from "../../assets/icon/github.png";
import linkedin from "../../assets/icon/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://github.com/FarzanehAhmadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/farzanehahmadi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className={styles.icon} />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} | Designed & Developed by{" "}
        <span className={styles.name}>Farzaneh Ahmadi</span>
      </p>
    </footer>
  );
};

export default Footer;
