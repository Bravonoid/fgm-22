import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_fgm.svg";
import gunungan from "../../assets/home/gunungan.svg";
import mozaik_horizontal from "../../assets/home/mozaik_horizontal.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./tentang.css";

const Tentang = () => {
	AOS.init();
	AOS.refresh();
	AOS.refreshHard();

	const [width] = useState(window.innerWidth);
	const isDesktop = width > 640;

	const translateLogo = {
		transform: isDesktop ? "translate(30%, 0%)" : "translate(0%, 0%)",
	};

	return (
		<div className="relative items-center bg-[#1E1E1E] pb-16 pt-16 md:pt-32 xl:pt-48">
			<img
				src={gunungan}
				className="absolute sm:h-3/4 md:w-1/4 lg:w-1/5 xl:w-1/6 xl:scale-[2] mobile:top-12 mobile:w-2/5"
				alt="gunungan"
			></img>
			<div className="relative sm:mx-auto sm:grid sm:grid-cols-2 mobile:flex mobile:flex-col-reverse">
				<img
					className="absolute -top-8 -right-32 z-[60] w-full scale-y-75 scale-x-75 transform md:-top-16 lg:-top-36 xl:-right-40 mobile:hidden"
					style={{ transform: "scaleY(75%)" }}
					src={mozaik_horizontal}
					alt="mozaik"
					data-aos="fade-down"
					data-aos-duration="1000"
				></img>
				<div
					className="relative mx-10 items-end text-left text-white sm:ml-20 sm:w-[105%] xl:ml-40 mobile:text-sm"
					data-aos="fade-right"
					data-aos-duration="1000"
				>
					<div className="font-black sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl">
						{/* <img className='w-full' src={mozaik_horizontal} alt="mozaik"></img> */}

						<div className="mt-1 flex flex-row sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
							<p className="font-Montserrat mobile:text-2xl mobile:font-bold">
								FESTIVAL
							</p>
							<div className="bg-[#F69722] sm:w-full mobile:block mobile:w-4/5"></div>
							{/* <div
                className="sm:w-48 md:w-56 lg:w-80 xl:scale-x-[1.8] mobile:w-40"
                src={rectangle_17}
                alt="rectangle"
              ></div> */}
						</div>
						<div className="mt-3 flex flex-row sm:gap-1 xl:gap-1 mobile:gap-1">
							<p className="font-Montserrat mobile:text-2xl mobile:font-bold">
								GADJAH
							</p>{" "}
							<p className="mobile:text-2xl "> MADA</p>
							<div className="bg-red-500 sm:w-full mobile:block mobile:w-4/5" />
							{/* <img
                className="sm:w-[96px] md:w-28 lg:w-48 xl:scale-x-[2.25] mobile:w-1/4"
                src={rectangle_18}
                alt="rectangle"
              ></img> */}
            </div>
          </div>
          <div className="text-justify sm:text-base xl:text-3xl">
            Festival Gadjah Mada merupakan sebuah festival yang menyajikan
            kreasi budaya dan seni tradisional melalui pengemasan yang modern.
            Pada tahun ini Festival Gadjah Mada akan menyemarakan rangkaian
            acaranya melalui festival seni, pasar rakyat, dan pentas teater
          </div>
          <Link to="/tentang">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-white py-2 px-6 font-Montserrat text-lg text-black hover:px-[1.33rem] hover:font-bold mobile:text-sm transition-all duration-300 ease-out hover:scale-[1]  hover:shadow-[5px_5px_0_rgb(128,128,128)]"
            >
              Selengkapnya
            </button>
          </Link>
        </div>
        {/* <img
						</div>
					</div>
					<div className="text-justify sm:text-base xl:text-3xl">
						Festival Gadjah Mada merupakan sebuah festival yang menyajikan
						kreasi budaya dan seni tradisional melalui pengemasan yang modern.
						Pada tahun ini Festival Gadjah Mada akan menyemarakan rangkaian
						acaranya melalui Festival Seni, Pasar Rakyat, dan Pentas Teater
					</div>
					<Link to="/tentang">
						<button
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
							}}
							class="mt-4 rounded bg-white py-2 px-6 font-Montserrat text-lg text-black hover:bg-black hover:px-[1.33rem] hover:font-bold hover:text-white mobile:text-sm"
						>
							Selengkapnya
						</button>
					</Link>
				</div>
				{/* <img
          className="relative items-center mx-auto justify-center text-left text-white sm:top-1 sm:left-20 sm:w-1/2 md:-top-0.5 lg:left-32 lg:w-2/5 xl:-top-20 xl:mb-1 xl:w-2/6 mobile:top-10 mobile:mx-auto mobile:w-1/4"
          src={Logo}
          alt="logo"
        ></img> */}
				<img
					className="logos px-auto m-auto w-[35%] items-center justify-center pb-12 text-left text-white sm:transform"
					style={translateLogo}
					src={Logo}
					alt="logo"
					data-aos="fade-left"
					data-aos-duration="1000"
				></img>
			</div>
		</div>
	);
};

export default Tentang;
