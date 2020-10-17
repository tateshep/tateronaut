import React from 'react';
import Head from 'next/head'
import { Container, Icon } from "nes-react";
import styles from '../styles/Home.module.css'

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
        <h1>Tate Shepherd</h1>
        <Container title="Hella good score">
            <Icon icon="star" large />
            <Icon icon="star" large />
            <Icon icon="star" large />
            <Icon icon="star" large />
            <Icon icon="star" large />
          </Container>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by whiskey{' '}
        </p>
      </footer>
    </div>
  )
}
