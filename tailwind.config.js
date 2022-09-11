module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"fgm-merah-orange": "#E62C20",
				"fgm-purple": "#9C4A9A",
				"fgm-orange": "#F69722",
				"fgm-hijau": "#4A8068",
			},
			screens: {
				mobile: { min: "360px", max: "639px" },
			},
			fontFamily: {
				Montserrat: ["Montserrat"],
				Inter: ["Inter"],
			},
			animation: {
				fade: 'fadeIn 500ms',
				still: 'stills 250ms'
			  },
		
			  // that is actual animation
			  keyframes: theme => ({
				fadeIn: {
				  '0%': { opacity: '0%' },
				  '100%': { opacity: '100%' },
				},
				stills: {
					'0%': { opacity: '100%' },
					'100%': { opacity: '100%' },
				  },
			  }),
		},
		backgroundImage: {
			pattern: "url('../src/assets/home/navbar-hover.svg')",
			"flat-medpart": "url('../src/assets/home/plain-cover.svg')",
		},
	},
	plugins: [],
};
