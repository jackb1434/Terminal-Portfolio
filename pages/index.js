import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import { createLine } from '../scripts/terminal';
import React from 'react';
import {update} from '../scripts/terminal';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Jack's portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <div className={styles.terminal}>
            <pre>
              &nbsp;                              __<br/>
              &nbsp;_ _ _     _                  |  |<br/>
                  | | | |___| |___ ___ _____ ___|  |<br/>
                  | | | | -_| |  _| . |     | -_|__|<br/>
                  |_____|___|_|___|___|_|_|_|___|__|<br/>
            </pre>
          
          <p><span className={styles.event}>event</span>&nbsp;&nbsp;&nbsp;- this is the event tag</p>
          <p><span className={styles.error}>error</span>&nbsp;&nbsp;&nbsp;- this is the error tag</p>
          <p><span className={styles.success}>success</span> - this is the success tag</p>
          <p>portfolio<span className={styles.atSymbol}>@</span>jackb1434:/$</p>
          <input type="text" className={styles.inputArea} id="textAreaID"></input>
          <p id="dyn"></p>
          <button onClick={update}>Submit</button>
        </div>
      </main>
    </div>
  )
}