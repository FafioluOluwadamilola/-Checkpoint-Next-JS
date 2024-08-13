import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.formContainer}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className={styles.formInput}
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className={`${styles.formInput} ${styles.textarea}`}
          placeholder="Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
}
