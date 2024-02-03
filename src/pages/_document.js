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
          {/* font */}

          {/**
           * Preload and load fonts using various methods.
           *
           * For more information, see:
           * {@link https://csswizardry.com/2020/05/the-fastest-google-fonts/ The Fastest Google Fonts}
           */}

          {/* #Preemptively warm up the fonts’ origin. */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          {/* ##Initiate a high-priority, asynchronous fetch for the CSS file. Works in most modern browsers. */}
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Pacifico&display=swap"
          />
          {/**
           * Initiate a low-priority, asynchronous fetch that gets applied to the page
           *    only after it’s arrived. Works in all browsers with JavaScript enabled.
           *
           * workaround added to fix onload getting removed in displayed output
           */}
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              </style>
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Pacifico&display=swap"
                  media="print"
                  onLoad="this.media='all';"
                />
              <style>`,
            }}
          />
          {/**
           * In the unlikely event that a visitor has intentionally disabled
           *    JavaScript, fall back to the original method. The good news is that,
           *    although this is a render-blocking request, it can still make use of the
           *    preconnect which makes it marginally faster than the default.
           */}
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Pacifico&display=swap"
              rel="stylesheet"
            />
          </noscript>

          {/* favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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
