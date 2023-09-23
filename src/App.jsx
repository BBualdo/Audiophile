import React from 'react';

import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
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

	const [cartData, setCartData] = React.useState([]);
	const [totalPrice, setTotalPrice] = React.useState(0);

	const addToCart = (product) => {
		setCartData([...cartData, product]);
		setTotalPrice((prevPrice) => prevPrice + product.price);
	};

	const clearCart = () => {
		setCartData([]);
		setTotalPrice(0);
	};

	const [count, setCount] = React.useState(1);

	const increaseCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decreaseCount = () => {
		setCount((prevCount) => {
			return prevCount - 1 < 1 ? prevCount : prevCount - 1;
		});
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						element={
							<Layout
								cart={cartData}
								clearCart={clearCart}
								totalPrice={totalPrice}
							/>
						}
					>
						<Route path='/' element={<Home />} />
						<Route
							path=':category'
							element={<Category categories={categories} />}
						/>
						<Route
							path=':category/:slug'
							element={
								<Product
									count={count}
									increase={increaseCount}
									decrease={decreaseCount}
									addToCart={addToCart}
								/>
							}
						/>
						<Route path='/checkout' element={<Checkout />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
