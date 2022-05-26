import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <div id="root" />
        <NextScript />
      </body>
    </Html>
  )
}
