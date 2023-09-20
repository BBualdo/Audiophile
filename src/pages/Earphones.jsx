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

	const earphonesElements = earphonesData.map((earphone) => {
		return (
			<div key={earphone.id}>
				<div>
					<img />
				</div>
				<div>
					{earphone.new && (
						<p className='text-[14px] text-cream tracking-[10px] font-normal uppercase mb-4'>
							New Product
						</p>
					)}
					<h2 className='h2'>{earphone.name}</h2>
					<p className='p mt-8'>{earphone.description}</p>
					<button className='btn bg-cream hover:bg-cream-light transition-all duration-150 mt-10'>
						See Product
					</button>
				</div>
			</div>
		);
	});

	return (
		<main>
			<header className='bg-stone text-white mt-[95px] flex items-center justify-center py-[98px]'>
				<h2>Earphones</h2>
			</header>
			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px] flex flex-col gap-[160px] py-[160px]'>
				{earphonesElements}
			</section>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Earphones;
