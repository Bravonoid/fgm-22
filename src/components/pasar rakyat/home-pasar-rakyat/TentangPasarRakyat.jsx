import Slider from "react-slick";
import { Link } from "react-router-dom";
import KembangTentangMobile from "../../../assets/Pasar-Rakyat/home-pasar/kembang-tentang-mobile.svg";
import JudulTentangMobile from "../../../assets/Pasar-Rakyat/home-pasar/judul-tentang-mobile.svg";
import Gambar1Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar1-tentang.png";
import Gambar2Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar2-tentang.png";
import Gambar3Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar3-tentang.png";
import Gambar4Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar4-tentang.png";
import KembangTentang from "../../../assets/Pasar-Rakyat/home-pasar/kembang-tentang.svg";
import JudulTentang from "../../../assets/Pasar-Rakyat/home-pasar/judul-tentang.svg";
import btn from "../../../assets/Pasar-Rakyat/home-pasar/btnPO.png";
import AOS from "aos";
import "aos/dist/aos.css";

const TentangPasarRakyat = () => {
	const settings = {
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		infinite: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	AOS.init();
	AOS.refresh();
	AOS.refreshHard();

	const styleDivSlider = "px-4 flex items-center justify-center";
	const styleGambarSlider = "w-full lg:w-[500px] 2xl:mx-auto";
	return (
		<>
			<div className=" relative h-auto items-center bg-[#171717] pt-[2rem] pb-[4rem] xl:pt-[5rem] xl:pb-[10rem] mobile:h-auto">
				<div className="relative h-auto md:mx-auto md:grid md:grid-cols-4 mobile:top-0 mobile:flex mobile:h-auto mobile:flex-col">
					<div
						className="col-span-2 mt-8 hidden items-center justify-center md:block lg:mt-12 mobile:mt-32"
						data-aos="fade-right"
						data-aos-duration="1500"
					>
						<div>
							<img src={KembangTentang} alt="" />
							<div className="bg-[#202020] py-5 px-10 xl:max-w-[596px]">
								<img src={JudulTentang} className="mx-auto py-2" alt="" />
								<p className="text-center text-xl font-bold text-white">
									26 November 2022 | Lapangan Pancasila UGM
								</p>
							</div>
						</div>
						<p className="max-w-[700px] pt-10 pl-32 text-2xl font-medium text-white">
							Pasar rakyat hadir sebagai peluang untuk mahasiswa berwirausaha
							dan membantu meningkatkan ekonomi masyarakat. Konsep yang diangkat
							pasar rakyat adalah menyajikan perpaduan penjualan tradisional dan
							kekinian.
						</p>
					</div>
					<div
						className="items-left relative col-span-2 mx-10 mr-24 pt-24 text-left text-white md:my-5 md:pt-12 xl:w-3/4 mobile:mx-10 mobile:text-base"
						data-aos="fade-down"
						data-aos-duration="1500"
					>
						<img src={KembangTentangMobile} className="md:hidden" alt="" />
						<img src={JudulTentangMobile} className="py-2 md:hidden" alt="" />
						<p className="font-bold md:hidden">26 November 2022 |</p>
						<p className="font-bold md:hidden">Lapangan Pancasila UGM</p>
						<p className="pt-5 md:hidden">
							Pasar rakyat hadir sebagai peluang untuk mahasiswa berwirausaha
							dan membantu meningkatkan ekonomi masyarakat. Konsep yang diangkat
							pasar rakyat adalah menyajikan perpaduan penjualan tradisional dan
							kekinian
						</p>
						<Slider className="pt-10 mobile:px-3" {...settings}>
							<div className={styleDivSlider}>
								<img
									src={Gambar1Tentang}
									alt=""
									className={styleGambarSlider}
								/>
							</div>
							<div className={styleDivSlider}>
								<img
									src={Gambar2Tentang}
									alt=""
									className={styleGambarSlider}
								/>
							</div>
							<div className={styleDivSlider}>
								<img
									src={Gambar3Tentang}
									alt=""
									className={styleGambarSlider}
								/>
							</div>
							<div className={styleDivSlider}>
								<img
									src={Gambar4Tentang}
									alt=""
									className={styleGambarSlider}
								/>
							</div>
						</Slider>
					</div>
					<Link to="/pasar-rakyat/pre-order">
						<img
							src={btn}
							className="p-4 sm:absolute sm:right-0 sm:bottom-0 sm:hidden md:hidden mobile:relative mobile:mx-auto mobile:block"
							alt=""
						/>
					</Link>
				</div>
				<Link to="/pasar-rakyat/pre-order">
					<img
						src={btn}
						className="fixed p-4 sm:absolute sm:right-0 sm:bottom-0  sm:block md:block mobile:relative mobile:mx-auto mobile:hidden"
						alt=""
					/>
				</Link>
			</div>
		</>
	);
};

export default TentangPasarRakyat;
