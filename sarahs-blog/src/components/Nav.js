import { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { NavContext } from '@/context/NavContext'
import styles from '@/styles/Nav.module.scss'

const Nav = () => {
    const [checked, setChecked] = useState(false);

    const navLinks = [
        { navLinkId: 'Home', scrollToId: 'homeContainer' },
        { navLinkId: 'Portfolio', scrollToId: 'portfolioContainer' },
        // { navLinkId: 'Contact', scrollToId: 'contactContainer' },
    ];
    
    const NavLink = ({ navLinkId, scrollToId }) => {
        const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
    
        const handleClick = () => {
            setActiveNavLinkId(navLinkId);
            handleChange();
            document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
        };
    
        return (
            <li
                id={navLinkId}
                className={`${activeNavLinkId === navLinkId ? styles.activeClass : ''}`}
                onClick={handleClick}
            >
                {navLinkId}
            </li>
        );
    };
    

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <nav className={`${styles.wrapper} ` + `${checked ? styles.active : ''}`}>
            <input type="checkbox" id="active" onChange={handleChange} />
            <label htmlFor="active" className={styles.menuBtn}><MenuIcon className={styles.menuIcon} /></label>
            <ul>
                {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                    <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                ))}
                <li onClick={handleChange}>
                    <a
                        href="https://www.linkedin.com/in/shashimwaris/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li onClick={handleChange}>
                    <a
                    href="https://sarahhashimwaris.com/shw-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                    </a>
                </li>
                <li onClick={handleChange}>
                    <a
                    href="mailto:sarahhashimwaris@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email 
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
