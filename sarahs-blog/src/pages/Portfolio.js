import { useState, useEffect } from 'react'
import { useNav } from '@/customHooks/useNav'
import Videos from '@/components/Videos'
import Dialog from '@/components/Dialog'
import styles from '@/styles/Pages.module.scss'

const Portfolio = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
	const [videoRef, setVideoRef] = useState('');
	const [dialogOpen, setDialogOpen] = useState(false);

	const portfolioRef = useNav('Portfolio');

	useEffect(() => {
    }, [videoRef, dialogOpen]);

	return (
		<section ref={portfolioRef} id='portfolioContainer' className={styles.portfolioContainer}>
			<Dialog videoRef={videoRef} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
			<Videos setVideoRef={setVideoRef} setDialogOpen={setDialogOpen} />
		</section>
	);
};

export default Portfolio;
