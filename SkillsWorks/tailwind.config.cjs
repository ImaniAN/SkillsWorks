/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,css,js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#756dc4',

					secondary: '#d3d337',

					accent: '#a9aee8',

					neutral: '#1B191F',

					'base-100': '#3D4042',

					info: '#2280EC',

					success: '#28BDA4',

					warning: '#EBB34C',

					error: '#FA3358',
				},
			},
		],
	},
	plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
