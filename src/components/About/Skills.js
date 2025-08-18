import styles from "./Skills.module.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
  SiEthereum,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const Skills = () => {
  return (
    <div className={styles.skillsRow}>
      <span className={styles.skill}>
        <FaReact /> React.js
      </span>
      <span className={styles.skill}>
        <FaNodeJs /> Node.js
      </span>
      <span className={styles.skill}>
        <SiTailwindcss /> Tailwind
      </span>
      <span className={styles.skill}>
        <SiMongodb /> MongoDB
      </span>
      <span className={styles.skill}>
        <SiNextdotjs /> Next.js
      </span>
      <span className={styles.skill}>
        <SiJavascript /> JavaScript
      </span>
      <span className={styles.skill}>
        <MdSecurity /> Cryptography
      </span>
      <span className={styles.skill}>
        <SiEthereum /> Web3
      </span>
    </div>
  );
};

export default Skills;
