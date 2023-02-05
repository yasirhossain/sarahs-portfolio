import React, { useContext } from 'react'
import { NavContext } from '@/context/NavContext'
import styles from '@/styles/Nav.module.css'

const navLinks = [
    { navLinkId: 'Home', scrollToId: 'homeContainer' },
    { navLinkId: 'Portfolio', scrollToId: 'portfolioContainer' },
    { navLinkId: 'Contact', scrollToId: 'contactContainer' },
];

const NavLink = ({ navLinkId, scrollToId }) => {
    const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

    const handleClick = () => {
        setActiveNavLinkId(navLinkId);
        document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <span
            id={navLinkId}
            className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
            onClick={handleClick}
        >
            {navLinkId}
        </span>
    );
};

export default function Nav() {
    return (
        <nav className={styles.nav}>
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
            ))}
        </nav>
    )
}
