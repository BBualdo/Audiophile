import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
	const cartItems = props.cart.map((item, index) => {
		return (
			<div key={index} className='w-full flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div>
						<img src={item.image} className='w-16 h-16 rounded-[8px]' />
					</div>
					<div className='flex flex-col'>
						<p className='text-[15px] font-bold leading-[25px] text-black'>
							{item.name}
						</p>
						<p className='text-[14px] font-bold leading-[25px] text-black/50'>
							$ {item.price}
						</p>
					</div>
				</div>
				<div className='flex p-[15px] items-center'>
					<p className='text-[15px] font-bold text-black/50'>
						x{item.quantity}
					</p>
				</div>
			</div>
		);
	});

	return (
		<main className='mt-[95px] bg-gray-light'>
			<div className='xs:px-[24px] md:px-[40px] lg:px-[165px] xs:pt-4 md:pt-8 lg:pt-[79px]'>
				<Link relative='path' to='..'>
					<button className='p text-black/50 cursor-pointer hover:text-cream transition-all duration-150'>
						Go back
					</button>
				</Link>
			</div>
			<div className='xs:px-[24px] md:px-[40px] lg:px-[165px] mt-[38px] pb-[140px] flex xs:flex-col xl:flex-row gap-8 xs:items-center xl:items-start'>
				<section className='bg-white p-12 rounded-[8px] w-full'>
					<h3>Checkout</h3>
					<form>
						<div className='mt-10'>
							<p className='text-cream text-[13px] font-bold uppercase leading-[25px] tracking-wide'>
								Billing Details
							</p>
							<div className='mt-4 flex flex-col gap-6'>
								<div className='flex xs:flex-col md:flex-row items-center gap-4'>
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
								<div className='flex xs:flex-col md:flex-row items-center gap-4'>
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
							<div className='flex xs:flex-col xs:gap-[17px] md:gap-0 md:flex-row mt-4 justify-between'>
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
				<section className='rounded-[8px] p-8 bg-white xs:w-full xl:w-auto'>
					<div>
						<h6 className='h6 text-black'>Summary</h6>
					</div>
					<div className='flex flex-col items-center gap-6 py-8 overflow-y-auto max-h-[304px] xs:w-full lg:w-[284px]'>
						{cartItems}
					</div>

					<div className='flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<p className='text-[15px] font-[500] leading-[25px] text-black/50 uppercase'>
								Total
							</p>
							<h6 className='font-bold leading-[25px] text-black'>
								$ {props.totalPrice}
							</h6>
						</div>
						{/* If shipping price and VAT would change, I'd prepare a seperate file with them, but for more readable code I will leave them as they are */}
						<div className='flex items-center justify-between'>
							<p className='text-[15px] font-[500] leading-[25px] text-black/50 uppercase'>
								Shipping
							</p>
							<h6 className='font-bold leading-[25px] text-black'>$ 50</h6>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-[15px] font-[500] leading-[25px] text-black/50 uppercase'>
								Vat (Included)
							</p>
							<h6 className='font-bold leading-[25px] text-black'>
								$ {Math.floor(props.totalPrice * 0.2)}
							</h6>
						</div>
						<div className='flex items-center justify-between mt-4'>
							<p className='text-[15px] font-[500] leading-[25px] text-black/50 uppercase'>
								Grand Total
							</p>
							<h6 className='font-bold leading-[25px] text-cream'>
								$ {Math.floor(props.totalPrice + 50 + props.totalPrice * 0.2)}
							</h6>
						</div>
					</div>
					<div className='mt-8'>
						<button className='btn w-full bg-cream text-white hover:bg-cream-light transition-all duration-150'>
							Continue & Pay
						</button>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Checkout;
