import React from 'react';

import Menu from '../components/Menu';
import BestGear from '../components/BestGear';

const Earphones = () => {
	const [earphonesData, setEarphonesData] = React.useState([]);

	React.useEffect(() => {
		fetch('../../data.json')
			.then((res) => res.json())
			.then((data) => {
				const earphones = data.filter((item) => item.category === 'earphones');
				setEarphonesData(earphones);
			});
	}, []);

	return (
		<main>
			<header className='bg-stone text-white mt-[95px] flex items-center justify-center py-[98px]'>
				<h2>Earphones</h2>
			</header>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Earphones;
