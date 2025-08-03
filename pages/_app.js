import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // Import global styles
  useEffect(() => {
    // Import CSS only on client side
    if (typeof window !== 'undefined') {
      require('../styles/main.css');
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
