module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			body: ["Montserrat", "sans"],
		},
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
			},
		},
		backgroundImage: {
			pattern: "url('../src/assets/home/navbar-hover.svg')",
			"flat-medpart": "url('../src/assets/home/plain-cover.svg')",
		},
	},
	plugins: [],
};
