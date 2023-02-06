import { useContext } from 'react'
import { NavContext } from '@/context/NavContext'
import styles from '@/styles/Nav.module.css'

const navLinks = [
    { navLinkId: 'Home', scrollToId: 'homeContainer' },
    { navLinkId: 'Portfolio', scrollToId: 'portfolioContainer' },
    // { navLinkId: 'Contact', scrollToId: 'contactContainer' },
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
            <div className={styles.grid}>
			<a
				href="https://www.linkedin.com/in/shashimwaris/"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={styles.className}>
				LinkedIn <span>-&gt;</span>
				</h2>
			</a>

			<a
				href="mailto:sarahhashimwaris@gmail.com"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={styles.className}>
				Email <span>-&gt;</span>
				</h2>
			</a>
			</div>
        </nav>
    )
}
