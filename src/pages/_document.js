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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Pacifico&display=swap"
          />
          {/* workaround added to fix onload getting removed in displayed output */}
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              </style>
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Pacifico&display=swap"
                  media="print"
                  onload="this.media='all';"
                />
              <style>`,
            }}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Pacifico&display=swap"
              rel="stylesheet"
            />
          </noscript>
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
