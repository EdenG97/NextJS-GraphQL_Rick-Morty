import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocuments extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="7bXUWi-XyMHNH7bBAm1HB4scWbFit_-curnpMA0EfzM"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocuments;
