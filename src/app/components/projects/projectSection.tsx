import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <img src="next.svg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1 goes here...</p>
        </div>
        <div className={styles.projectCard}>
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2 goes here...</p>
        </div>
        <div className={styles.projectCard}>
          <img src="project2.jpg" alt="Project 3" />
          <h3>Project 3</h3>
          <p>Description of Project 3 goes here...</p>
        </div>
        <div className={styles.projectCard}>
          <img src="next.svg" alt="Project 4" />
          <h3>Project 4</h3>
          <p>Description of Project 4 goes here...</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
}
