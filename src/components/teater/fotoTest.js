import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataSliderTeater } from "../../assets/data/home/DataSliderTeater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./tenant.css";
import Bgfoto from "../../assets/teater/teater.png";
import Pattern_samping from "../../assets/home/teater/pattern-group.svg";
import Trailer from "./trailer";
import Sinopsis from "./Sinopsis";
import Kolaborasi from "./Kolaborasi";
import Judul_teater from "../../assets/teater/Judul_teater.svg";
import { Link } from "react-router-dom";
import Penari from "../../assets/home/penari.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Foto = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const [teater, setTeater] = useState(true);
	const [trailer, setTrailer] = useState(false);
	const [sinopsis, setSinopsis] = useState(false);
	const [kolaborasi, setKolaborasi] = useState(false);


	const handleTeater = () => {
		setTeater(true);
		setTrailer(false);
		setSinopsis(false);
		setKolaborasi(false);
	};
	const handleTrailer = () => {
		setTeater(false);
		setTrailer(true);
		setSinopsis(false);
		setKolaborasi(false);
	};
	const handleSinopsis = () => {
		setTeater(false);
		setTrailer(false);
		setSinopsis(true);
		setKolaborasi(false);
	};
	const handleKolaborasi = () => {
		setTeater(false);
		setTrailer(false);
		setSinopsis(false);
		setKolaborasi(true);
	};

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		cssEase: "cubic-bezier(0, 0, 0.2, 1)",
		arrows: false,
		draggable: false,
		lazyLoad: "progressive",
	};

	return (
		<div className="mt-16 grid bg-fgm-base-terang bg-cover md:flex">
			<div className={"relative  h-[750px] w-full overflow-hidden  md:w-3/4 "}>
				<div
					className={
						trailer
							? " h-full w-full  transition-all duration-1000 ease-in-out"
							: "hidden"
					}
				>
					<Trailer />
				</div>
				<div
					className={
						sinopsis
							? " h-full w-full  bg-right bg-no-repeat bg-cover transition-all duration-1000 ease-in-out  "
							: "hidden"
					}
					style={{ backgroundImage: `url(${Bgfoto})` }}
				>
					<Sinopsis />
				</div>
				<div
					className={
						kolaborasi
							? " h-full w-full  bg-right   bg-no-repeat bg-cover transition-all duration-1000 ease-in-out"
							: "hidden"
					}
					style={{ backgroundImage: `url(${Bgfoto})` }}
				>
					<Kolaborasi />
				</div>
				<div
					className={
						teater
							? " relative duration-1000 ease-in-out "
							: "relative  left-[-100%] duration-1000 ease-in-out "
					}
				>
					<div className="flex-col-2 absolute z-20 mx-auto flex w-[90%] py-5 text-white sm:w-[80%] md:w-[90%] xl:w-[80%] xl:py-20  2xl:w-[65%]">
						<div
							className="w-full"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<div className="w-full bg-fgm-base py-5 pl-8  pr-4 sm:px-4 md:w-[65%] md:min-w-[80%] xl:w-[80%] xl:pl-16">
								<img className="h-8 xl:h-12 pointer-events-none" src={Judul_teater}></img>
								<p className="text-sm font-bold md:text-base xl:text-2xl">
									18 November 2022 | Taman Budaya Yogyakarta
								</p>
							</div>
							<div className="pl-8  sm:px-4  xl:w-full  xl:px-16 ">
								<h1 className="mt-3 text-xl font-bold underline sm:text-3xl md:text-4xl xl:text-5xl">
									WIRAMA BHATARA KERTAGAMA
								</h1>
								<p className="  my-2 text-left text-sm md:text-base xl:text-lg">
									Wirama Bhatara Kertagama merupakan pementasan akulturasi
									budaya kontemporer dan tradisional yang menyajikan sebuah
									pertunjukan seni peran, tari, dan musik yang nantinya akan
									dinarasikan oleh seorang dalang menggunakan wayang. Kata
									‘Wirama’ diambil dari bahasa Sanskerta yang berarti ‘kidung’,
									‘Bhatara’ memiliki arti ‘agung’, sedangkan “Kertagama”
									memiliki arti “negeri”. Dengan demikian, “Wirama Bhatara
									Kertagama” memiliki makna ‘kidung agung negeri’. Pementasan
									ini mengangkat tema keberagaman budaya Nusantara yang akan
									digambarkan melalui kisah kerajaan di Indonesia. Setiap
									kerajaan akan mewakili emosi dasar yang dimiliki manusia
									seperti marah, sedih, bahagia, takut, jijik, dan terkejut.
									Pementasan ini akan dibawakan secara fragmentasi berdasarkan
									tiga kisah kerajaan Indonesia yaitu Kerajaan Singosari,
									Mataram, dan Majapahit.
								</p>
							</div>
						</div>
					</div>

					<div
						className="relative h-[750px]   w-full bg-cover bg-right"
						style={{ backgroundImage: `url('${Penari}')` }}
					></div>
				</div>
			</div>

			<div className="z-100 order-first  items-start bg-fgm-base-terang p-5 text-start md:order-last  ">
				<ul className="flex items-center justify-center gap-2 text-sm text-white sm:text-lg md:m-8  md:inline-block md:text-3xl ">
					<li
						onClick={handleTeater}
						className={
							teater
								? " cursor-default font-bold "
								: " cursor-pointer hover:font-bold"
						}
					>
						TEATER
					</li>
					<li
						onClick={handleTrailer}
						className={
							trailer
								? " cursor-default  font-bold "
								: " cursor-pointer hover:font-bold"
						}
					>
						TRAILER
					</li>

					<li
						onClick={handleSinopsis}
						className={
							sinopsis
								? " cursor-default   font-bold"
								: " cursor-pointer hover:font-bold"
						}
					>
						SINOPSIS
					</li>
					<li
						onClick={handleKolaborasi}
						className={
							kolaborasi
								? " cursor-default   font-bold"
								: " cursor-pointer hover:font-bold"
						}
					>
						KOLABORASI
					</li>
					<Link to="/tiket">
						<li className="hover:font-bold">TIKET</li>
					</Link>
				</ul>
			</div>
			<div className=" absolute right-0  bottom-[250px]  hidden items-end justify-start  md:flex">
				<img
					className=" pointer-events-none relative mx-auto h-48 xl:h-72"
					src={Pattern_samping}
				></img>
			</div>
		</div>
	);
};

export default Foto;
