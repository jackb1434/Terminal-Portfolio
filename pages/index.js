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
        <title>Terminal</title>
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
          
          <p className={styles.version}>v0.8.9</p>
          <div className={styles.inputArea}>
              <p className={styles.inputLine}>portfolio<span className={styles.atSymbol}>@</span>jackb1434:/$</p>
              <input type="text" className={styles.inputArea} id="textAreaID" placeholder="enter input here" ></input>
          </div>
          <br></br>
          <p id="dyn">please type &apos;home&apos; or &apos;cmds&apos; to see a list of available commands.</p>
        </div>
      </main>
    </div>
  )
}