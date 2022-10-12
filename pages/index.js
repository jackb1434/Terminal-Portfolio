import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import { createLine } from '../scripts/terminal';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Jack's portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
      </main>
    </div>
  )
}