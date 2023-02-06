import { useState, createContext } from 'react'

const NavContext = createContext({});

export { NavContext };

const NavProvider = ({ children }) => {
	console.log(children);

	const [activeNavLinkId, setActiveNavLinkId] = useState('Home');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;