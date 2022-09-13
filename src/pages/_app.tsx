import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global-style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Warvil AI Bot</title>
        <meta name="author" content="Edward Fernandez" />
        <meta
          name="description"
          content="Warvil bot is an AI bot the seeks to respond to your queries about Javascript."
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
