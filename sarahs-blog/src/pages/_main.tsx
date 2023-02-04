import styles from '@/styles/Home.module.css'
import Home from '@/pages/Home'
import Portfolio from '@/pages/Portfolio'
import Contact from '@/pages/Contact'

export default function Main() {
  return (
    <main className={styles.main}>
        <Home />
		<Portfolio />
		<Contact />
    </main>
  )
}
