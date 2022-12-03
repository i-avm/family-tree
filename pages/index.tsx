import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Family Tree</title>
        <meta name="description" content="Genogram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
          <span className={styles.logo}>
            Created By Meppadam Boys
          </span>
      </footer>
    </div>
  )
}
