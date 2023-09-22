import React from 'react';

import Menu from '../components/Menu';
import BestGear from '../components/BestGear';
import { useParams, Link } from 'react-router-dom';

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

	const equipmentArr = productData.includes;
	const equipment = equipmentArr.map((eq, index) => {
		return (
			<div key={index} className='flex gap-6'>
				<span className='font-[500] text-cream text-[15px] leading-[25px]'>
					{eq.quantity}x
				</span>
				<p className='font-[500] text-black/50 text-[15px] leading-[25px]'>
					{eq.item}
				</p>
			</div>
		);
	});

	return (
		<main className='mt-[95px]'>
			<Link relative='path' to='..'>
				<p className='p text-black/50 cursor-pointer hover:text-cream transition-all duration-150 xs:px-[24px] md:px-[40px] lg:px-[165px] xs:pt-4 md:pt-8 lg:pt-[79px]'>
					Go back
				</p>
			</Link>

			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px] flex xs:flex-col md:flex-row xs:items-start md:items-center lg:min-w-[730px] gap-[10%] xs:mt-6 lg:mt-[56px]'>
				<div>
					{/* desktop image */}
					<img
						src={productData.image.desktop}
						className='xs:hidden lg:block min-w-[443px] w-[540px] rounded-[8px]'
					/>
					{/* tablet image */}
					<img
						src={productData.image.tablet}
						className='xs:hidden md:block lg:hidden rounded-[8px]'
					/>
					{/* mobile image */}
					<img
						src={productData.image.mobile}
						className='xs:block md:hidden rounded-[8px]'
					/>
				</div>

				<div className='md:w-[450px]'>
					{productData.new && (
						<p className='text-[14px] text-cream tracking-[10px] font-normal uppercase xs:mt-8 md:mt-0 xs:mb-6 md:mb-4'>
							New Product
						</p>
					)}
					<h2 className='xs:text-[28px] lg:text-[40px] font-bold xs:leading-normal md:leading-[32px] lg:leading-[44px] xs:tracking-[1px] lg:tracking-[1.4px] uppercase'>
						{productData.name}
					</h2>
					<p className='p text-black/50 xs:py-6 md:py-8'>
						{productData.description}
					</p>
					<h6 className='xs:mb-[31px] lg:mb-[47px]'>$ {productData.price}</h6>
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
						<button className='btn bg-cream hover:bg-cream-light transition-all duration-150 whitespace-nowrap'>
							Add to cart
						</button>
					</div>
				</div>
			</section>

			<section className='flex xs:flex-col lg:flex-row xs:px-[24px] md:px-[40px] lg:px-[165px] gap-[125px] xs:py-[88px] md:py-[120px] lg:py-[160px]'>
				<div className='flex flex-col gap-[32px] lg:max-w-[635px]'>
					<h3 className='xs:text-[24px] md:text-[32px] font-bold leading-[36px] xs:tracking-[0.9px] md:tracking-[1.1px] uppercase'>
						Features
					</h3>
					<div
						className='p text-black/50'
						dangerouslySetInnerHTML={{
							__html: productData.features.replace(/\n/g, '<br />'),
						}}
					></div>
				</div>
				<div className='flex xs:flex-col md:flex-row lg:flex-col xs:gap-6 md:gap-[30%] lg:gap-8 whitespace-nowrap'>
					<h3 className='xs:text-[24px] md:text-[32px] font-bold leading-[36px] xs:tracking-[0.9px] md:tracking-[1.1px] uppercase'>
						In the box
					</h3>
					<div className='flex flex-col gap-2'>{equipment}</div>
				</div>
			</section>

			<section></section>

			{/*<section className='flex flex-col items-center xs:px-[24px] md:px-[40px] lg:px-[165px] min-w-[730px]'>
				<p className='xs:text-[24px] md:text-[32px] font-bold leading-[36px] xs:tracking-[0.9px] md:tracking-[1.1px] uppercase'>
					You may also like
				</p>
				<div>
					<div>
						<img />
						<h5></h5>
						<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
							See product
						</button>
					</div>
					<div>
						<img />
						<h5></h5>
						<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
							See product
						</button>
					</div>
					<div>
						<img />
						<h5></h5>
						<button className='btn bg-cream hover:bg-cream-light transition-all duration-150'>
							See product
						</button>
					</div>
				</div>
			</section>*/}

			<section className='xs:px-[24px] md:px-[40px] lg:px-[165px]'>
				<Menu />
			</section>

			<BestGear />
		</main>
	);
};

export default Product;
