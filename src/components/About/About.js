import React from "react";
import styles from "./About.module.css";
import profileImage from "../../assets/images/circle-profile.png";
import github from "../../assets/icon/github.png";
import linkedin from "../../assets/icon/linkedin.png";
// import SkillsMarquee from "./SkillsMarquee";
import Skills from "./Skills";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <img
          src={profileImage}
          alt="Farzaneh"
          className={styles.profileImage}
        />
        <div className={styles.description}>
          <h2> Hi! I’m Farzaneh</h2>
          <p>
            Full-stack developer with a background in computer science and
            cryptography. My work lives where creativity meets logic from
            building apps people enjoy using, to diving into the math behind
            zero-knowledge proofs!
            <br />
            <br />
            Want to know more? You can find me on LinkedIn and GitHub, or
            explore the Projects and Blog sections to see what I’ve been working
            on and learning lately:)
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/farzanehahmadi/">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/FarzanehAhmadi">
              <img src={github} alt="Github" />
            </a>
          </div>
        </div>
      </div>
      {/* <SkillsMarquee /> */}
      <Skills />
    </section>
  );
};

export default About;
