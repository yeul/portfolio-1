import Document, { Html, Head, Main, NextScript } from "next/document";

class Portfolio extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
            integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
            crossOrigin='anonymous'
          />
          <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://unpkg.com/aos@next/dist/aos.js' />
          <script>AOS.init();</script>
        </body>
      </Html>
    );
  }
}

export default Portfolio;
