import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>🪴PlantsCare</h1>

        <div>
          <p>An app to help you care for your houseplants</p>
          <p>Application in development</p>
        </div>

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/"
          >
            Login
          </Link>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            <Image
              className={styles.logo}
              src="/github-mark-white.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Repository
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>An application developed by</p>
          <Link target="_blank" rel="noopener noreferrer" href="https://github.com/clhubdev">Clément HUBERT</Link>
        </div>
      </footer>
    </div>
  );
}
