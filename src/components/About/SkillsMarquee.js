import React from "react";
import styles from "./SkillsMarquee.module.css";

const SkillsMarquee = () => {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <span>
          React ⚛️ &nbsp; Node.js 🌐 &nbsp; MongoDB 🍃 &nbsp; Tailwind 💨 &nbsp;
          Cryptography 🔐 &nbsp; ZK Proofs 🧠 &nbsp; Next.js 🚀 &nbsp; Web3 🌐
          &nbsp;
        </span>
      </div>
    </div>
  );
};

export default SkillsMarquee;
