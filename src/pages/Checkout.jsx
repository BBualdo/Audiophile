import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
	return (
		<main className='mt-[95px] bg-gray-light'>
			<div className='xs:px-[24px] md:px-[40px] lg:px-[165px] xs:pt-4 md:pt-8 lg:pt-[79px]'>
				<Link relative='path' to='..'>
					<button className='p text-black/50 cursor-pointer hover:text-cream transition-all duration-150'>
						Go back
					</button>
				</Link>
			</div>
			<div className='xs:px-[24px] md:px-[40px] lg:px-[165px] mt-[38px] pb-[140px]'>
				<section className='bg-white p-12 rounded-[8px]'>
					<h3>Checkout</h3>
					<form>
						<div className='mt-10'>
							<p className='text-cream text-[13px] font-bold uppercase leading-[25px] tracking-wide'>
								Billing Details
							</p>
							<div className='mt-4 flex flex-col gap-6'>
								<div className='flex items-center gap-4'>
									<div className='flex flex-col w-full'>
										<label className='text-black text-xs font-bold'>Name</label>
										<input
											className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
											type='text'
											placeholder='Alexei Ward'
										/>
									</div>
									<div className='flex flex-col w-full'>
										<label className='text-black text-xs font-bold'>
											Email Address
										</label>
										<input
											className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
											type='text'
											placeholder='alexei@mail.com'
										/>
									</div>
								</div>
								<div className='flex flex-col'>
									<label className='text-black text-xs font-bold'>
										Phone Number
									</label>
									<input
										className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
										type='text'
										placeholder='+1 202-555-0136'
									/>
								</div>
							</div>
						</div>
						<div className='mt-[53px]'>
							<p className='text-cream text-[13px] font-bold uppercase leading-[25px] tracking-wide'>
								Shipping Info
							</p>
							<div className='mt-4 flex flex-col gap-6'>
								<div className='flex flex-col'>
									<label className='text-black text-xs font-bold'>
										Address
									</label>
									<input
										className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
										type='text'
										placeholder='1137 Williams Avenue'
									/>
								</div>
								<div className='flex items-center gap-4'>
									<div className='flex flex-col w-full'>
										<label className='text-black text-xs font-bold'>
											ZIP Code
										</label>
										<input
											className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
											type='text'
											placeholder='10001'
										/>
									</div>
									<div className='flex flex-col w-full'>
										<label className='text-black text-xs font-bold'>City</label>
										<input
											className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
											type='text'
											placeholder='New York'
										/>
									</div>
								</div>
								<div className='flex flex-col'>
									<label className='text-black text-xs font-bold'>
										Country
									</label>
									<input
										className='placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px]'
										type='text'
										placeholder='United States'
									/>
								</div>
							</div>
						</div>
						<div className='mt-[61px]'>
							<p className='text-cream text-[13px] font-bold uppercase leading-[25px] tracking-wide'>
								Payment Details
							</p>
							<div className='flex mt-4 justify-between'>
								<label className='text-black text-xs font-bold flex-1'>
									Payment Methods
								</label>
								<div className='flex flex-col flex-1 gap-4'>
									<div className='flex items-center gap-4 p-[18px] rounded-lg border border-stone-300 hover:border-cream transition-all duration-150'>
										<input
											type='radio'
											className='cursor-pointer checked:accent-cream checked:border-cream'
											name='payment'
										/>
										<label className='text-black text-xs font-bold'>
											e-Money
										</label>
									</div>
									<div className='flex items-center gap-4 p-[18px] rounded-lg border border-stone-300 hover:border-cream transition-all duration-150'>
										<input
											type='radio'
											className='cursor-pointer checked:accent-cream checked:border-cream'
											name='payment'
										/>
										<label className='text-black text-xs font-bold'>
											Cash on Delivery
										</label>
									</div>
								</div>
							</div>
						</div>
					</form>
				</section>
				<section></section>
			</div>
		</main>
	);
};

export default Checkout;
