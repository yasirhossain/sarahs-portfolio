import React from 'react';
import { useNav } from '../customHooks/useNav';

const Portfolio = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const portfolioRef = useNav('Portfolio');

	return (
		<section ref={portfolioRef} id='portfolioContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>Portfolio</h3>
				<p>This is the portfolio section</p>
			</div>
		</section>
	);
};

export default Portfolio;
