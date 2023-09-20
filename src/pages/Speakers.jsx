import React from 'react';

import Menu from '../components/Menu';
import BestGear from '../components/BestGear';

const Speakers = () => {
	const [speakersData, setSpeakersData] = React.useState([]);

	React.useEffect(() => {
		fetch('../../data.json')
			.then((res) => res.json())
			.then((data) => {
				const speakers = data.filter((item) => item.category === 'speakers');
				setSpeakersData(speakers);
			});
	}, []);

	return (
		<main>
			<header className='bg-stone text-white mt-[95px] flex items-center justify-center py-[98px]'>
				<h2>Speakers</h2>
			</header>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Speakers;
