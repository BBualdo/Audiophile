import React from 'react';
import { Link } from 'react-router-dom';

import headphonesLogo from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersLogo from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesLogo from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrow from '../assets/shared/desktop/icon-arrow-right.svg';

const Menu = () => {
	return (
		<div className='absolute left-0 right-0 bg-white pb-[67px] pt-[108px] px-[40px] flex xs:flex-col md:flex-row xs:gap-[68px] md:gap-[10px] justify-between z-40'>
			<div className='relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]'>
				<img src={headphonesLogo} className='absolute top-[-60px] w-[160px]' />
				<div className='flex flex-col items-center gap-[8px]'>
					<p className='p uppercase font-bold'>Headphones</p>
					<Link
						to='/headphones'
						className='flex items-center gap-[13px] cursor-pointer hover:text-cream'
					>
						<p className='text-[13px] font-bold opacity-50 uppercase'>Shop</p>
						<img src={arrow} />
					</Link>
				</div>
			</div>
			<div className='relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]'>
				<img src={speakersLogo} className='absolute top-[-60px] w-[160px]' />
				<div className='flex flex-col items-center gap-[8px]'>
					<p className='p uppercase font-bold'>Speakers</p>
					<Link
						to='/speakers'
						className='flex items-center gap-[13px] cursor-pointer hover:text-cream'
					>
						<p className='text-[13px] font-bold opacity-50 uppercase'>Shop</p>
						<img src={arrow} />
					</Link>
				</div>
			</div>
			<div className='relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]'>
				<img src={earphonesLogo} className='absolute top-[-50px] w-[160px]' />
				<div className='flex flex-col items-center gap-[8px]'>
					<p className='p uppercase font-bold'>Earphones</p>
					<Link
						to='/earphones'
						className='flex items-center gap-[13px] cursor-pointer hover:text-cream'
					>
						<p className='text-[13px] font-bold opacity-50 uppercase'>Shop</p>
						<img src={arrow} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Menu;
