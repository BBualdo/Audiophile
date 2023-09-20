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

	const reversedSpeakersData = [...speakersData].reverse();

	const speakersElements = reversedSpeakersData.map((speaker, index) => {
		const isEvenIndex = index % 2 === 0;
		return (
			<div
				className={`${
					isEvenIndex ? 'lg:flex-row' : 'lg:flex-row-reverse'
				} flex xs:flex-col items-center xs:gap-8 md:gap-[52px] lg:gap-[125px]`}
				key={speaker.id}
			>
				<div>
					{/* desktop image */}
					<img
						className='xs:hidden lg:block'
						src={speaker.categoryImage.desktop}
						alt={speaker.name}
					/>
					{/* tablet image */}
					<img
						className='xs:hidden md:block lg:hidden '
						src={speaker.categoryImage.tablet}
						alt={speaker.name}
					/>
					{/* mobile image */}
					<img
						className='xs:block md:hidden'
						src={speaker.categoryImage.mobile}
						alt={speaker.name}
					/>
				</div>
				<div className='xs:text-center lg:text-left'>
					{speaker.new && (
						<p className='text-[14px] text-cream tracking-[10px] font-normal uppercase mb-4'>
							New Product
						</p>
					)}
					<h2 className='h2'>{speaker.name}</h2>
					<p className='p text-black/50 xs:mt-6 md:mt-8'>
						{speaker.description}
					</p>
					<button className='btn bg-cream hover:bg-cream-light transition-all duration-150 xs:mt-6 lg:mt-10'>
						See Product
					</button>
				</div>
			</div>
		);
	});

	return (
		<main>
			<header className='bg-stone text-white mt-[95px] flex items-center justify-center xs:py-8 md:py-[98px]'>
				<h2 className='xs:text-[24px] md:text-[40px] font-bold xs:leading-normal md:leading-[44px] xs:tracking-[2px] md:tracking-[1.4px] uppercase'>
					Speakers
				</h2>
			</header>
			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px] flex flex-col xs:gap-[120px] lg:gap-[160px] xs:pt-16 xs:pb-[120px] md:py-[120px] lg:py-[160px]'>
				{speakersElements}
			</section>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Speakers;
