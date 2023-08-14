"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ContactSection from "./components/contact/contactSection";
import Projects from "./components/projects/projectSection";
import { useEffect, useState } from "react";
export default function Home() {
  const date = new Date().getFullYear();
  console.log(date, "date");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme based on user's preferred color scheme
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update theme when isDarkMode changes
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Javaria Brascom</h1>
        <p>Full Stack Developer</p>
        <section className={styles.section}>
          <h2>Toggle Theme</h2>
          <button onClick={toggleTheme}>
            {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </button>
        </section>
      </header>

      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          Full Stack developer with a passion for utilizing JavaScript and React
          to build accessible and impactful code. With their background in
          helping local companies launch and professionally as a Quality and
          Service engineer, they are well adapted to balancing company deadlines
          as well as customer needs! Very curious and competitive by nature,
          they can be found learning new topics or playing sports outside of
          coding.
        </p>
      </section>

      <section className={styles.section}>
        <Projects />
        {/* Your project items go here */}
      </section>

      <section className={styles.section}>
        <ContactSection />
        {/* Your contact information goes here */}
      </section>

      <footer className={styles.footer}>
        <p>&copy; {date} Javaria Brascom</p>
      </footer>
    </div>
  );
}
