import { Provider, useCreateStore } from 'lib/hooks/store';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global.style';

function MyApp({ Component, pageProps }: any) {
  const createStore = useCreateStore(pageProps.state);

  return (
    <Provider createStore={createStore}>
      <Head>
        <title>Engine Warvil</title>
        <meta name="author" content="Edward Fernandez" />
        <meta
          name="description"
          content="Warvil is an intelligent chatbot powered by artificial intelligence. It is designed to provide helpful and insightful answers to your questions. Warvil can learn from its conversations with you, allowing it to become increasingly efficient and knowledgeable over time."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
