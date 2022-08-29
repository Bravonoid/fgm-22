
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			'body': ['"Montserrat "', 'sans'],
			'heading': ['Exo'],
		  },
		extend: {
			fontFamily: {
				'Montserrat': ['Montserrat'],
			  },
		},
		backgroundImage: {
			'pattern': "url('../src/assets/home/navbar-hover.svg')",
		},
	},
	plugins: [],
};