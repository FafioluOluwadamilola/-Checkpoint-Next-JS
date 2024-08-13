
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul className={styles.ulList}>
        <li className={styles.liItem}>Project 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. In blanditiis odit nesciunt nulla, voluptatum vero!</li>
        <li className={styles.liItem}>Project 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. In blanditiis odit nesciunt nulla, voluptatum vero!</li>
        <li className={styles.liItem}>Achievement: Lorem ipsum dolor, sit amet consectetur adipisicing elit. In blanditiis odit nesciunt nulla, voluptatum vero!</li>
      </ul>
    </div>
  );
}
