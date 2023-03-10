import React from 'react'
import { useNav } from '@/customHooks/useNav'
import styles from '@/styles/Pages.module.scss'

const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer' className={styles.contactContainer}>
			<div>
				<h3>CONTACT</h3>
				<p>This is the contact section</p>
			</div>
		</section>
	);
};

export default Contact;
