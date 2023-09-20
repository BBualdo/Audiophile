import React from 'react';

import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
	const [categoryData, setCategoryData] = React.useState({
		headphones: [],
		speakers: [],
		earphones: [],
	});

	React.useEffect(() => {
		fetch('../../data.json')
			.then((res) => res.json())
			.then((data) => {
				const categorizedData = {
					headphones: data.filter((item) => item.category === 'headphones'),
					speakers: data.filter((item) => item.category === 'speakers'),
					earphones: data.filter((item) => item.category === 'earphones'),
				};
				setCategoryData(categorizedData);
			});
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
							path='/:category'
							element={
								<Category category='headphones' categories={categories} />
							}
						/>
						<Route path='/cart' element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
