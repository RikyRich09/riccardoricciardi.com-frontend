import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Benvenuto al mio sito</h1>
      <p className={styles.description}>
        Questo è il mio progetto Next.js con TypeScript, pronto per essere personalizzato!
      </p>
    </div>
  );
}