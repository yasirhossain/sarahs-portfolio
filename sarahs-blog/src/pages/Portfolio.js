import React from 'react'
import { useNav } from '../customHooks/useNav'
import Videos from '@/components/Videos'
import { style } from '@mui/system';

const Portfolio = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const portfolioRef = useNav('Portfolio');

	return (
		<section ref={portfolioRef} id='portfolioContainer'>
			<Videos />
		</section>
	);
};

export default Portfolio;
