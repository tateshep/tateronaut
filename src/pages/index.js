import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TateIntro from '../Components/TateIntro/TateIntro';
import SlackContact from '../Components/SlackContact/SlackContact';
import ContactMe from '../Components/ContactMe/ContactMe';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tateronaut | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://fonts.googleapis.com/css?family=Press+Start+2P'
          rel='stylesheet'
        />
      </Head>

      <main className={styles.main}>
        <TateIntro />
        <SlackContact />
      </main>
      <ContactMe />
    </div>
  )
}
