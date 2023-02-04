import React, { useContext } from 'react'
import { NavContext } from '@/context/NavContext'

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
        <nav>
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
            ))}
        </nav>
    )
}
