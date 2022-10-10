import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { RunService } from '../scripts/terminal'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Jack's portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.content}>
          <div className={styles.terminal}>
            <pre>
              &nbsp;                              __<br/>
              &nbsp;_ _ _     _                  |  |<br/>
                  | | | |___| |___ ___ _____ ___|  |<br/>
                  | | | | -_| |  _| . |     | -_|__|<br/>
                  |_____|___|_|___|___|_|_|_|___|__|<br/>
            </pre>

            <p className={styles.inputArea}>portfolio<span className={styles.atSymbol}>@</span>jackb1434:/$</p>
          </div>
        </div>
      </main>
    </div>
  )
}

