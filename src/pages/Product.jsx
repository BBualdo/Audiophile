import React from 'react';

import Menu from '../components/Menu';
import BestGear from '../components/BestGear';
import { Link } from 'react-router-dom';

const Product = () => {
	return (
		<main className='mt-[95px]'>
			<Link relative='path' to='..'>
				<p className='p text-black/50 cursor-pointer hover:text-cream transition-all duration-150 xs:px-[24px] md:px-[40px] lg:px-[165px] xs:pt-4 md:pt-8 lg:pt-[79px]'>
					Go back
				</p>
			</Link>

			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px]'>
				<Menu />
			</section>

			<BestGear />
		</main>
	);
};

export default Product;
