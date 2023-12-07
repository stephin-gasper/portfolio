import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component for setting up the document structure.
 * This component is used to enhance SEO and optimize loading performance.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="canonical" href="https://stephin-gasper.vercel.app/" />
        </Head>
        <body>
          <Main />
          {/* Render the Next.js script and additional scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
