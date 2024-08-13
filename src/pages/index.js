import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Killer from '/public/Images/lolzz.jpg';
import Project1Img from '/public/Images/Killua.jpg'; // Update paths as necessary
import Project2Img from '/public/Images/knsdkajsa.jpg'; // Update paths as necessary

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contacts">Contact</Link></li>
          </ul>
        </nav>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <section className={styles.introduction}>
        <Image
          src={Killer}
          alt="Profile Pic of Killua Lv"
          width={300}
          height={200}
          className={styles.profilePic}
        />
        <h2>About Me</h2>
        <p>Hello! I'm Damilola Daniel, a Software Developer. This is my portfolio where I showcase my skills and projects.</p>
      </section>

      <section className={styles.highlights}>
        <h2>Highlights</h2>
        <ul>
          <li>Project 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. In blanditiis odit nesciunt nulla, voluptatum vero!</li>
          <li>Project 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. In blanditiis odit nesciunt nulla, voluptatum vero!</li>
          <li>Achievement: Lorem ipsum dolor, sit amet consectetur adipisicing elit. In blanditiis odit nesciunt nulla, voluptatum vero!</li>
        </ul>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectContainer}>
          <div className={styles.projectCard}>
            <Image src={Project1Img} alt="Project 1" width={300} height={200} />
            <h3>Project 1 Title</h3>
          </div>
          <div className={styles.projectCard}>
            <Image src={Project2Img} alt="Project 2" width={300} height={200} />
            <h3>Project 2 Title</h3>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </div>
  );
}
