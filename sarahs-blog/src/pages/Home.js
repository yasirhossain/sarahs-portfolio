import { useContext } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useNav } from '@/customHooks/useNav'
import { NavContext } from '@/context/NavContext'
import styles from '@/styles/Pages.module.scss'
import signature from '../../public/signature-3.png'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId('Portfolio');
		document.getElementById('portfolioContainer').scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section ref={homeRef} id='homeContainer' className={styles.homeContainer}>
			<div className={styles.center}>
				<Image className={styles.signature} src={signature} alt="Sarah Hashim-Waris" />
				<p>Video Producer / Creative Director / Script Writer / Reporter</p>
				<button class={styles.primaryButton} role="button" onClick={handleClick}>View Portfolio</button>
			</div>
		</section>
	);
};

export default Home;
