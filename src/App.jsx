import React from 'react';

import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Product from './pages/Product';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import data from './data/data.json';

const App = () => {
	const [categoryData, setCategoryData] = React.useState({
		headphones: [],
		speakers: [],
		earphones: [],
	});

	React.useEffect(() => {
		const categorizedData = {
			headphones: data.filter((item) => item.category === 'headphones'),
			speakers: data.filter((item) => item.category === 'speakers'),
			earphones: data.filter((item) => item.category === 'earphones'),
		};
		setCategoryData(categorizedData);
	}, []);

	const categories = {
		headphones: {
			title: 'Headphones',
			products: categoryData.headphones,
		},
		speakers: {
			title: 'Speakers',
			products: categoryData.speakers,
		},
		earphones: {
			title: 'Earphones',
			products: categoryData.earphones,
		},
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Home />} />
						<Route
							path=':category'
							element={<Category categories={categories} />}
						/>
						<Route path=':category/:slug' element={<Product />} />
						<Route path='/cart' element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
