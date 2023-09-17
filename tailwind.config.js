/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '360px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				cream: '#D87D4A',
				'cream-light': '#FBAF85',
				stone: '#101010',
				'gray-light': '#F1F1F1',
				'gray-very-light': '#FAFAFA',
			},
			fontFamily: {
				sans: 'Manrope',
			},
			backgroundImage: {
				'lg-hero-pattern': "url('./src/assets/home/desktop/image-hero.jpg')",
				'md-hero-pattern': "url('./src/assets/home/tablet/image-header.jpg')",
				'xs-hero-pattern': "url('./src/assets/home/mobile/image-header.jpg')",
			},
		},
	},
	plugins: [],
};
