
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			'body': ['"Montserrat "', 'sans'],
			'heading': ['Exo'],
		  },
		extend: {
			screens: {
				'mobile':'360px',
			},
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