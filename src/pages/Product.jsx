import React from 'react';

import Menu from '../components/Menu';
import BestGear from '../components/BestGear';
import { useParams, Link } from 'react-router-dom';
import MayLike from '../components/MayLike';

const Product = () => {
	const { slug } = useParams();
	const [productData, setProductData] = React.useState(null);

	React.useEffect(() => {
		fetch('/src/data/data.json').then((res) =>
			res.json().then((data) => {
				const matchedProduct = data.find((product) => product.slug === slug);
				setProductData(matchedProduct);
			}),
		);
	}, [slug]);

	if (!productData) {
		return <h2>Loading...</h2>;
	}

	return (
		<main className='mt-[95px]'>
			<Link relative='path' to='..'>
				<p className='p text-black/50 cursor-pointer hover:text-cream transition-all duration-150 xs:px-[24px] md:px-[40px] lg:px-[165px] xs:pt-4 md:pt-8 lg:pt-[79px]'>
					Go back
				</p>
			</Link>
			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px]'>
				<img src={productData.image.desktop} />
				<div>
					{productData.new && (
						<p className='text-[14px] text-cream tracking-[10px] font-normal uppercase xs:mb-6 md:mb-4'>
							New Product
						</p>
					)}
					<h2 className='xs:text-[28px] lg:text-[40px] font-bold xs:leading-normal md:leading-[32px] lg:leading-[44px] xs:tracking-[1px] lg:tracking-[1.4px] uppercase'>
						{productData.name}
					</h2>
					<p className='p text-black/50 xs:py-6 md:py-8'>
						{productData.description}
					</p>
					<h6>$ {productData.price}</h6>
					<div className='flex gap-4'>
						<div className='flex gap-8 bg-gray-light p-[15px] items-center'>
							<div className='text-[14px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer'>
								-
							</div>
							<div className='text-[14px] text-black font-bold tracking-[1px]'>
								1
							</div>
							<div className='text-[14px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer'>
								+
							</div>
						</div>
						<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
							Add to cart
						</button>
					</div>
				</div>
			</section>
			<MayLike />
			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px]'>
				<Menu />
			</section>

			<BestGear />
		</main>
	);
};

export default Product;
