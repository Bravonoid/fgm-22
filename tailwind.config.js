module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"fgm-merah-orange": "#E62C20",
				"fgm-purple": "#9C4A9A",
				"fgm-orange": "#F69722",
				"fgm-hijau": "#4A8068",
				"fgm-base" :"#171717",
				"fgm-base-terang":"#242424"
			},
			screens: {
				mobile: { MIN: "360px", max: "639px" },
				navbar1: {MIN: "1280px", max: "1400px"},
				'xsm': '400px',
			},
			fontFamily: {
				Montserrat: ["Montserrat"],
				Inter: ["Inter"],
			},
			animation: {
				fade: 'fadeIn 500ms',
			  },
		
			  // that is actual animation
			  keyframes: theme => ({
				fadeIn: {
				  '0%': { opacity: '50%' },
				  '100%': { opacity: '100%' },
				},
			  }),
		},
		backgroundImage: {
			pattern: "url('../src/assets/home/navbar-hover.svg')",
			"flat-medpart": "url('../src/assets/home/plain-cover.svg')",
			foto_teater : "../src/assets/home/teater/teater.svg",
			"festival_md" : 'url("../src/assets/festival-seni/background.svg")',
			"festival_mobile" : 'url("../src/assets/festival-seni/mobile1.svg")',
		},
	},
	plugins: [],
};
