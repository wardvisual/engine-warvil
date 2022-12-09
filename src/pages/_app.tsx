import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global.style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Warvil AI Bot</title>
        <meta name="author" content="Edward Fernandez" />
        <meta
          name="description"
          content="Warvil is an AI bot that seeks to respond to your queries about programming."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
