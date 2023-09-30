import React, { useState, useEffect } from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.css"; // Importing a CSS module for styling

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds before setting the loading variable to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.loadingText}>Caricamento...</div>
      </div>
    );
  }

  return (
    <ContainerBlock>
      <AboutMe />
    </ContainerBlock>
  );
}
