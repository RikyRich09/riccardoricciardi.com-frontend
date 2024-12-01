import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Benvenuto nel mio sito!</h1>
      <p>Questa è la pagina principale del mio progetto Next.js.</p>
    </main>
  );
}
