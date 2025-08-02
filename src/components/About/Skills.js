import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsRow}>
      <span className={styles.skill}>⚛️ React.js</span>
      <span className={styles.skill}>🌐 Node.js</span>
      <span className={styles.skill}>💨 Tailwind</span>
      <span className={styles.skill}>🍃 MongoDB</span>
      <span className={styles.skill}>⚡ Next.js</span>
      <span className={styles.skill}>🧠 JavaScript</span>
      <span className={styles.skill}>🛡️ Cryptography</span>
      <span className={styles.skill}>🕵️ ZK Proofs</span>
      <span className={styles.skill}>🔗 Web3</span>
    </div>
  );
};

export default Skills;
