import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '../assets/cart/image-xx99-mark-two-headphones.jpg';

const Cart = (props) => {
	return (
		<div className='rounded-[8px] p-8 bg-white'>
			<div className='flex justify-between items-center'>
				<h6 className='h6 text-black'>Cart (3)</h6>
				<p className='text-[15px] font-[500] leading-[25px] underline text-black/50 cursor-pointer hover:text-cream transition-all duration-200'>
					Remove all
				</p>
			</div>
			<div className='flex flex-col items-center gap-6 py-8 overflow-y-auto max-h-[304px]'>
				<div className='w-full flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<div>
							<img src={cartIcon} className='w-16 h-16 rounded-[8px]' />
						</div>
						<div className='flex flex-col'>
							<p className='text-[15px] font-bold leading-[25px] text-black'>
								XX99 MK II
							</p>
							<p className='text-[14px] font-bold leading-[25px] text-black/50'>
								$ 2999
							</p>
						</div>
					</div>
					<div className='w-[96px] h-[32px] flex justify-between bg-gray-light p-[15px] items-center'>
						<div
							onClick={props.decrease}
							className='text-[13px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer'
						>
							-
						</div>
						<div className='text-[13px] text-black font-bold tracking-[1px]'>
							{props.count}
						</div>
						<div
							onClick={props.increase}
							className='text-[13px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer'
						>
							+
						</div>
					</div>
				</div>

				<div className='w-full flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<div>
							<img src={cartIcon} className='w-16 h-16 rounded-[8px]' />
						</div>
						<div className='flex flex-col'>
							<p className='text-[15px] font-bold leading-[25px] text-black'>
								XX99 MK II
							</p>
							<p className='text-[14px] font-bold leading-[25px] text-black/50'>
								$ 2999
							</p>
						</div>
					</div>
					<div className='w-[96px] h-[32px] flex justify-between bg-gray-light p-[15px] items-center'>
						<div className='text-[13px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer'>
							-
						</div>
						<div className='text-[13px] text-black font-bold tracking-[1px]'>
							1
						</div>
						<div className='text-[13px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer'>
							+
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='flex justify-between items-center'>
					<p className='text-[15px] font-[500] leading-[25px] text-black/50 uppercase'>
						Total
					</p>
					<h6 className='h6 text-black'>$ 5396</h6>
				</div>
				<div>
					<Link to='/checkout'>
						<button className='btn w-full bg-cream text-white hover:bg-cream-light transition-all duration-150'>
							Checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
