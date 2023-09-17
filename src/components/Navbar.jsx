import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/shared/desktop/logo.svg';
import cartIcon from '../assets/shared/desktop/icon-cart.svg';
import hamburger from '../assets/shared/tablet/icon-hamburger.svg';

import Menu from './Menu';

const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState(false);

	function toggleMenu() {
		setShowMenu((prev) => !prev);
	}

	React.useEffect(() => {
		function handleResize() {
			if (window.innerWidth > 975) {
				setShowMenu(false);
			}
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className='fixed top-0 left-0 right-0 xs:px-[24px] md:px-[40px] lg:px-[165px] bg-stone z-50'>
			<div className='flex justify-between items-center py-[35px]'>
				<div className='flex items-center xs:justify-between md:justify-normal md:gap-[42px]'>
					<img
						onClick={toggleMenu}
						src={hamburger}
						className='lg:hidden cursor-pointer'
					/>
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
					<Link to='/' className='hover:text-cream transition-all duration-200'>
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
			</div>
			{showMenu && <Menu />}
		</nav>
	);
};

export default Navbar;
