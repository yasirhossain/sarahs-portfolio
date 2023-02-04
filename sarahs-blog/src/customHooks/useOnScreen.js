import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

export const useOnScreen = ref => {
	const [isOnScreen, setOnScreen] = useState(false);

	const observer = useInView(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: [0.25, 0.5, 0.75],
		}
	);

	useEffect(() => {
		/*
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
		*/
	});

	return isOnScreen;
};
