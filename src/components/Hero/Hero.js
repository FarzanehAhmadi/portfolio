// Hero.js
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Hi, I'm Farzaneh</h1>
      <h2>
        <Typewriter
          words={[
            "Full-Stack Developer 💻",
            "Privacy Enthusiast 🔐",
            "ZK Researcher 🧠",
            "Code Crafter ✨",
          ]}
          loop={0} // infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </div>
  );
};

export default Hero;
