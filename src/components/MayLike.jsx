import React from 'react';

const MayLike = () => {
	return (
		<section className='flex flex-col items-center '>
			<p className='xs:text-[24px] md:text-[32px] font-bold leading-[36px] xs:tracking-[0.9px] md:tracking-[1.1px] uppercase'>
				You may also like
			</p>
			<div>
				<div>
					<img />
					<h5></h5>
					<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
						See product
					</button>
				</div>
				<div>
					<img />
					<h5></h5>
					<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
						See product
					</button>
				</div>
				<div>
					<img />
					<h5></h5>
					<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
						See product
					</button>
				</div>
			</div>
		</section>
	);
};

export default MayLike;
