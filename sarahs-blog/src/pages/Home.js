import React from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useNav } from '@/customHooks/useNav'
import styles from '@/styles/Home.module.css'
import signature from '../../public/signature-3.png'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer' className={styles.homeContainer}>
			<div className={styles.center}>
				<Image className={styles.signature} src={signature} alt="Sarah Hashim-Waris" />
				<h1>Sarah Hashim-Waris</h1>
				<p>Video Producer / Creative Director / Script Writer / Talent</p>
			</div>

			<div className={styles.grid}>
			<a
				href="https://www.linkedin.com/in/shashimwaris/"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={inter.className}>
				LinkedIn <span>-&gt;</span>
				</h2>
			</a>

			<a
				href="mailto:sarahhashimwaris@gmail.com"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={inter.className}>
				Email <span>-&gt;</span>
				</h2>
			</a>

			<a
				href="https://www.youtube.com/@sarahhashimwaris"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={inter.className}>
				YouTube <span>-&gt;</span>
				</h2>
			</a>

			<a
				href="https://twitter.com/sarahHwaris"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={inter.className}>
				Twitter <span>-&gt;</span>
				</h2>
			</a>
			</div>
		</section>
	);
};

export default Home;
