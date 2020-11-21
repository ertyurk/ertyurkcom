import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mehmet Erturk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You will be welcome when I finish this!
        </h1>

        <p className={styles.description}>
          But meanwhile, you can find me from any social media!{' '}
          <br></br><code className={styles.code}>but where?</code>
        </p>
        <Image src="/images/kod_yazin.gif" alt="me" width="500" height="280"/>
      </main>

      <footer className={styles.footer}>
          <p className={styles.description} >Once upon a time, I had time to do things..</p>
      </footer>
    </div>
  )
}
