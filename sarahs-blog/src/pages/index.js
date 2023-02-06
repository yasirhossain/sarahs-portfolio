import Head from 'next/head'
import { Inter } from '@next/font/google'
import Nav from '@/components/Nav'
import NavProvider from '@/context/NavContext'
import Main from '@/pages/_main'
import styles from '@/styles/Pages.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Head>
        <title>Sarahs Portfolio</title>
        <meta name="description" content="Sarah Hashim-Waris is a video producer and creative director specializing in entertainment, beauty and news content. Check out examples of my work in directing, writing, producing, and researching." />
        <meta name="keywords" content="video producer, entertainment, beauty, news, directing, writing, producing, researching" />
        <meta name="author" content="Sarah Hashim-Waris" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sarah Hashim-Waris - Video Producer Portfolio" />
        <meta property="og:description" content="Sarah Hashim-Waris is a video producer and creative director specializing in entertainment, beauty and news content. Check out examples of my work in directing, writing, producing, and researching." />
        <meta property="og:url" content="https://www.sarahhashimwaris.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>
  )
}
