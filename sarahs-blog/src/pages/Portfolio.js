import React from 'react'
import { useNav } from '../customHooks/useNav'
import Videos from '@/components/Videos'

const Portfolio = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const portfolioRef = useNav('Portfolio');

	return (
		<section ref={portfolioRef} id='portfolioContainer'>
			<div>
				<h3>Portfolio</h3>
				<p>This is the portfolio section</p>
			</div>
			<Videos />
		</section>
	);
};

export default Portfolio;
