import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ContactMe from '../Components/ContactMe/ContactMe';
import TodosDisplay from '../Components/TodosDisplay/TodosDisplay';

export default function Todos() {
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
        <h1>This is the todos page!!!</h1>
        <TodosDisplay />

      </main>
      <ContactMe />
    </div>
  )
}
