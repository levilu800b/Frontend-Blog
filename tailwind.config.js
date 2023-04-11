/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
		colors: {
				primary: '#5800FF',
				dark: {
					light: '#5A7184',
					hard: '#3F0071',
					soft: '#222831',
				},
			},
			fontFamily: {
				opensans: ["'Open Sans'", 'sans-serif'],
				roboto: ["'Roboto'", 'sans-serif'],
			},
	},
  },
  plugins: [],
}