import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TateIntro from '../Components/TateIntro/TateIntro';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://fonts.googleapis.com/css?family=Press+Start+2P'
          rel='stylesheet'
        />
      </Head>

      <main className={styles.main}>
        <TateIntro />
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Tateronaut{' '}
        </p>
      </footer>
    </div>
  )
}
