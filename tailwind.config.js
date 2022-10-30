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
			foto_teater : "../src/assets/home/teater/teater.png",
			"festival_md" : 'url("../src/assets/festival-seni/backgroundsection1.png")',
			"festival_mobile" : 'url("../src/assets/festival-seni/background_mobile.png")',
			"mask-makanan": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-makanan.png")',
			"mask-minuman": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-minuman.png")',
			"mask-aksesoris": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-aksesoris.png")',
			"mask-pakaian": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-pakaian.png")',
			"mask-photobooth": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-photobooth.png")',
			"mask-makanan-hover": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-makanan-hover.png")',
			"mask-minuman-hover": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-minuman-hover.png")',
			"mask-aksesoris-hover": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-aksesoris-hover.png")',
			"mask-pakaian-hover": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-pakaian-hover.png")',
			"mask-photobooth-hover": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-photobooth-hover.png")',
			"mask-makanan-mobile": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-makanan-mobile.png")',
			"mask-minuman-mobile": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-minuman-mobile.png")',
			"mask-aksesoris-mobile": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-aksesoris-mobile.png")',
			"mask-pakaian-mobile": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-pakaian-mobile.png")',
			"mask-photobooth-mobile": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-mask-photobooth-mobile.png")',
			"kkm": 'url("../src/assets/Pasar-Rakyat/home-pasar/bg-kkm.png")',
		},
	},
	plugins: [],
};
