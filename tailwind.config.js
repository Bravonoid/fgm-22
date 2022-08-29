
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			'body': ['"Montserrat "', 'sans'],
			'heading': ['Exo'],
		  },
		extend: {
			screens: {
				'mobile':{'min':'360px', 'max':'640px'},
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