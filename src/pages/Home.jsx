import React from 'react';

import Menu from '../components/Menu';

const Home = () => {
	return (
		<main>
			<header className='xs:bg-xs-hero-pattern md:bg-md-hero-pattern mt-[96] lg:bg-lg-hero-pattern bg-no-repeat bg-center bg-cover md:px-[40px] lg:px-[165px] w-full'>
				<div className='border-t-[1px] border-white/40 border-solid pt-[128px] pb-[158px] flex flex-col justify-center xs:items-center xs:text-center lg:items-start lg:text-left'>
					<div className='w-[398px] h-[346px]'>
						<p className='text-white/50 font-normal uppercase tracking-[10px]'>
							New Product
						</p>
						<h1 className='xs:text-[36px] xs:leading-[40px] xs:tracking-[1.3px] md:text-[56px] md:leading-[58px] md:tracking-[2px] text-white mt-6'>
							XX99 Mark II Headphones
						</h1>
						<p className='mt-6 text-white/75 xs:px-[20px] lg:px-0 lg:w-[360px]'>
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
						<button className='btn-1 hover:bg-cream-light transition-all duration-150 mt-10'>
							See Product
						</button>
					</div>
				</div>
			</header>
			<div className='md:mt-[52px] lg:mt-[92px]'>
				<Menu />
			</div>
		</main>
	);
};

export default Home;
