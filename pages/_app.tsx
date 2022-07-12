import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import client from "../graphql/client";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <link
            rel="shortcut icon"
            href="/rickandmorty.png"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
