/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,css,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				'2xl': '0 35px 35px rgba(79, 70, 229, 0.95)',
				'3xl': '0 35px 35px rgba(217, 119, 6, 0.95)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)',
				],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
