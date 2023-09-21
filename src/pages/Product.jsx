import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
	const { slug } = useParams();
	return <div className='mt-[96px]'>Product is {slug}</div>;
};

export default Product;
