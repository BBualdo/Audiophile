import React from 'react';

import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Cart from './pages/Cart';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './assets/shared/desktop/logo.svg';
import cartIcon from './assets/shared/desktop/icon-cart.svg';
import hamburger from './assets/shared/tablet/icon-hamburger.svg';
import headphonesLogo from './assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersLogo from './assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesLogo from './assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrow from './assets/shared/desktop/icon-arrow-right.svg';

const App = () => {
	const [showMenu, setShowMenu] = React.useState(false);

	return (
		<main>
			<BrowserRouter>
				<header className='bg-stone'>
					<nav className='xs:px-[24px] md:px-[40px] lg:px-[165px] flex justify-between items-center py-[35px] border-b-[1px] border-white/40 border-solid'>
						<div className='flex items-center xs:justify-between md:justify-normal md:gap-[42px]'>
							<img src={hamburger} className='lg:hidden cursor-pointer' />
							{/* Logo when screen-size is larger than xs */}
							<Link to='/' className='xs:hidden md:flex'>
								<img src={logo} />
							</Link>
						</div>
						{/* Logo when screen-size is xs */}
						<Link to='/' className='xs:flex md:hidden'>
							<img src={logo} />
						</Link>
						<div className='text-white xs:hidden lg:flex text-[13px] uppercase font-bold leading-[25px] tracking-[2px] gap-[34px]'>
							<Link
								to='/'
								className='hover:text-cream transition-all duration-200'
							>
								Home
							</Link>
							<Link
								to='/headphones'
								className='hover:text-cream transition-all duration-200'
							>
								Headphones
							</Link>
							<Link
								to='/speakers'
								className='hover:text-cream transition-all duration-200'
							>
								Speakers
							</Link>
							<Link
								to='/earphones'
								className='hover:text-cream transition-all duration-200'
							>
								Earphones
							</Link>
						</div>
						<Link to='/cart'>
							<img src={cartIcon} />
						</Link>
					</nav>
					<div className='bg-white pb-[67px] pt-[108px] px-[40px] flex xs:flex-col md:flex-row xs:gap-[68px] md:gap-[10px] justify-between'>
						<div className='relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]'>
							<img
								src={headphonesLogo}
								className='absolute top-[-60px] w-[160px]'
							/>
							<div className='flex flex-col items-center gap-[8px]'>
								<p className='p uppercase font-bold'>Headphones</p>
								<Link
									to='/headphones'
									className='flex items-center gap-[13px] cursor-pointer'
								>
									<p className='text-[13px] font-bold opacity-50 uppercase'>
										Shop
									</p>
									<img src={arrow} />
								</Link>
							</div>
						</div>
						<div className='relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]'>
							<img
								src={speakersLogo}
								className='absolute top-[-60px] w-[160px]'
							/>
							<div className='flex flex-col items-center gap-[8px]'>
								<p className='p uppercase font-bold'>Speakers</p>
								<Link
									to='/speakers'
									className='flex items-center gap-[13px] cursor-pointer'
								>
									<p className='text-[13px] font-bold opacity-50 uppercase'>
										Shop
									</p>
									<img src={arrow} />
								</Link>
							</div>
						</div>
						<div className='relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]'>
							<img
								src={earphonesLogo}
								className='absolute top-[-50px] w-[160px]'
							/>
							<div className='flex flex-col items-center gap-[8px]'>
								<p className='p uppercase font-bold'>Earphones</p>
								<Link
									to='/earphones'
									className='flex items-center gap-[13px] cursor-pointer'
								>
									<p className='text-[13px] font-bold opacity-50 uppercase'>
										Shop
									</p>
									<img src={arrow} />
								</Link>
							</div>
						</div>
					</div>
				</header>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/headphones' element={<Headphones />} />
					<Route path='/speakers' element={<Speakers />} />
					<Route path='/earphones' element={<Earphones />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
};

export default App;
