import Head from 'next/head';
import Image from 'next/image';
import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practical AI Toolkit</title>
        <meta name="description" content="Educational resource for AI presentations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh'
        }}>
          <Image
            src="/logoStacked.png"
            alt="Practical AI Toolkit Logo"
            width={500}
            height={300}
            priority
            style={{
              maxWidth: '400px',
              width: '80%',
              height: 'auto',
            }}
          />
        </div>
        <p>test test</p>
      </main>
    </div>
  );
}
