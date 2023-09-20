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

	const reversedHeadphonesData = [...headphonesData].reverse();

	const headphonesElements = reversedHeadphonesData.map((headphone, index) => {
		const isEvenIndex = index % 2 === 0;
		return (
			<div
				className={`${
					isEvenIndex ? 'lg:flex-row' : 'lg:flex-row-reverse'
				} flex xs:flex-col items-center xs:gap-8 md:gap-[52px] lg:gap-[125px]`}
				key={headphone.id}
			>
				<div>
					{/* desktop image */}
					<img
						className='xs:hidden lg:block'
						src={headphone.categoryImage.desktop}
						alt={headphone.name}
					/>
					{/* tablet image */}
					<img
						className='xs:hidden md:block lg:hidden '
						src={headphone.categoryImage.tablet}
						alt={headphone.name}
					/>
					{/* mobile image */}
					<img
						className='xs:block md:hidden'
						src={headphone.categoryImage.mobile}
						alt={headphone.name}
					/>
				</div>
				<div className='xs:text-center lg:text-left'>
					{headphone.new && (
						<p className='text-[14px] text-cream tracking-[10px] font-normal uppercase mb-4'>
							New Product
						</p>
					)}
					<h2 className='h2'>{headphone.name}</h2>
					<p className='p text-black/50 xs:mt-6 md:mt-8'>
						{headphone.description}
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
					Headphones
				</h2>
			</header>
			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px] flex flex-col xs:gap-[120px] lg:gap-[160px] xs:pt-16 xs:pb-[120px] md:py-[120px] lg:py-[160px]'>
				{headphonesElements}
			</section>
			<Menu />
			<BestGear />
		</main>
	);
};

export default Headphones;
