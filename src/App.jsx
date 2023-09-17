import React from 'react';

import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Cart from './pages/Cart';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Home />} />
						<Route path='/headphones' element={<Headphones />} />
						<Route path='/speakers' element={<Speakers />} />
						<Route path='/earphones' element={<Earphones />} />
						<Route path='/cart' element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
