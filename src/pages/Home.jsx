import React from 'react';

const Home = () => {
	return (
		<>
			<header className='xs:bg-xs-hero-pattern md:bg-md-hero-pattern lg:bg-lg-hero-pattern bg-no-repeat bg-center bg-cover md:px-[40px] lg:px-[165px] w-full'>
				<div className='border-t-[1px] border-white/40 border-solid pt-[128px] pb-[158px] flex flex-col justify-center xs:items-center xs:text-center lg:items-start lg:text-left'>
					<div className='w-[398px] h-[346px]'>
						<p className='text-white font-normal opacity-50 uppercase tracking-[10px]'>
							New Product
						</p>
						<h1 className='h1 text-white mt-6'>XX99 Mark II Headphones</h1>
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
		</>
	);
};

export default Home;
