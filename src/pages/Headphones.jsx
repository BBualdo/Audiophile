import React from 'react';

import Menu from '../components/Menu';
import BestGear from '../components/BestGear';

const Headphones = () => {
	const [headphonesData, setHeadphonesData] = React.useState([]);

	React.useEffect(() => {
		fetch('../../data.json')
			.then((res) => res.json())
			.then((data) => {
				const headphones = data.filter(
					(item) => item.category === 'headphones',
				);
				setHeadphonesData(headphones);
			});
	}, []);

	return (
		<main>
			<header className='bg-stone text-white mt-[95px] flex items-center justify-center py-[98px]'>
				<h2>Headphones</h2>
			</header>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Headphones;
