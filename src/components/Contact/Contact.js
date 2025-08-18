import React, { useState } from "react";
import styles from "./Contact.module.css";
import contactImage from "../../assets/images/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/meozwvlg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Contact Me</h2>

      <div className={styles.contactFrame}>
        <div className={styles.formSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>

          {status === "SUCCESS" && (
            <p className={styles.success}>
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "ERROR" && (
            <p className={styles.error}>
              Oops! Something went wrong. Please try again.
            </p>
          )}
          <p>OR</p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href = "mailto:f_ahmadi74@yahoo.com")
            }
          >
            Email Me
          </button>
        </div>
        <div className={styles.imageSection}>
          <img
            src={contactImage}
            alt="Contact illustration"
            className={styles.contactImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
