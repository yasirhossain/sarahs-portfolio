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
        <title>Sarah's Portfolio</title>
        <meta name="description" content="Conceptualize and execute creative and compelling digital editorial and branded content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>
  )
}
