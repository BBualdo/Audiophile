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

	const reversedEarphonesData = [...earphonesData].reverse();

	const earphonesElements = reversedEarphonesData.map((earphone, index) => {
		const isEvenIndex = index % 2 === 0;
		return (
			<div
				className={`${
					isEvenIndex ? 'lg:flex-row' : 'lg:flex-row-reverse'
				} flex xs:flex-col items-center xs:gap-8 md:gap-[52px] lg:gap-[125px]`}
				key={earphone.id}
			>
				<div>
					{/* desktop image */}
					<img
						className='xs:hidden lg:block'
						src={earphone.categoryImage.desktop}
						alt={earphone.name}
					/>
					{/* tablet image */}
					<img
						className='xs:hidden md:block lg:hidden '
						src={earphone.categoryImage.tablet}
						alt={earphone.name}
					/>
					{/* mobile image */}
					<img
						className='xs:block md:hidden'
						src={earphone.categoryImage.mobile}
						alt={earphone.name}
					/>
				</div>
				<div className='xs:text-center lg:text-left'>
					{earphone.new && (
						<p className='text-[14px] text-cream tracking-[10px] font-normal uppercase mb-4'>
							New Product
						</p>
					)}
					<h2 className='h2'>{earphone.name}</h2>
					<p className='p text-black/50 xs:mt-6 md:mt-8'>
						{earphone.description}
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
					earphones
				</h2>
			</header>
			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px] flex flex-col xs:gap-[120px] lg:gap-[160px] xs:pt-16 xs:pb-[120px] md:py-[120px] lg:py-[160px]'>
				{earphonesElements}
			</section>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Earphones;
