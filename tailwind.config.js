/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5800FF',
				dark: {
					hard: '#7149C6',
					soft: '#865DFF',
				},
			},
			fontFamily: {
				opensans: ["'Open Sans'", 'sans-serif'],
				roboto: ["'Roboto'", 'sans-serif'],
			},
		},
	},
	plugins: [],
};
