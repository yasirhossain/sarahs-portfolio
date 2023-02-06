import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700;800;900&family=Reenie+Beanie&display=swap" rel="stylesheet">
        <link rel="canonical" href="https://fonts.google.com/specimen/Prata">
      </Head>
      <Component {...pageProps} />
    </>
  )
}
