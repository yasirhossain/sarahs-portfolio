import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import NavProvider from '@/context/NavContext'
import Main from '@/pages/_main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah's Portfolio</title>
        <meta name="description" content="Conceptualize and execute creative and compelling digital editorial and branded content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavProvider className={styles.appContainer}>
        <Nav />
        <Main />
      </NavProvider>
    </>
  )
}
