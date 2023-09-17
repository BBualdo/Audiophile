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

const App = () => {
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
