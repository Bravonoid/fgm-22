import React from "react";
import Logo from "../../assets/logo_fgm.svg";
import gunungan from "../../assets/home/gunungan.svg";
import mozaik_horizontal from "../../assets/home/mozaik_horizontal.svg";
import rectangle_17 from "../../assets/home/rectangle-17.svg";
import rectangle_18 from "../../assets/home/rectangle-18.svg";

const tentang = () => {
	return (
		<div className="h-[75vh] w-full items-center justify-end bg-[#1E1E1E]">
			<img
				src={gunungan}
				className="absolute sm:h-3/4 md:w-1/4 lg:w-1/5 xl:w-1/6 xl:scale-[2]"
				alt="gunungan"
			></img>
			<div className="relative mx-auto grid grid-cols-2 sm:top-32 sm:-right-8 xl:-right-40 xl:top-48 xl:ml-[50px]">
				<div className="relative -top-10 my-5  w-full items-end text-left text-white sm:mb-[100px] xl:-top-16">
					<div className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl">
						{/* <img className='w-full' src={mozaik_horizontal} alt="mozaik"></img> */}
						<img className="w-full" src={mozaik_horizontal} alt="mozaik"></img>
						<div className="flex sm:gap-1.5 md:gap-1 xl:gap-[8.5rem]">
							<p className="font-Montserrat">FESTIVAL </p>
							<img
								className="sm:w-48 md:w-56 lg:w-80 xl:scale-x-[1.8]"
								src={rectangle_17}
								alt="rectangle"
							></img>
						</div>
						<div className="flex sm:gap-1 xl:gap-[7.8rem]">
							<p className="font-Montserrat">GADJAH MADA</p>
							<img
								className="sm:w-[96px] md:w-28 lg:w-48 xl:scale-x-[2.25]"
								src={rectangle_18}
								alt="rectangle"
							></img>
						</div>
					</div>
					<div className="xl:text-xl:w-full sm:text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						tellus nulla, porta vel consectetur et, mattis quis orci. In hac
						habitasse platea dictumst. Sed eget tincidunt risus. Mauris nec
						luctus sapien, eu cursus diam.
					</div>
					<button class="mt-4 rounded bg-white py-2 px-6 font-Montserrat text-lg font-bold text-black hover:bg-slate-300">
						Selengkapnya
					</button>
				</div>
				<img
					className=" relative items-center justify-center text-left text-white sm:top-1 sm:left-20 sm:w-1/2 md:-top-0.5 lg:left-40 lg:w-2/5 xl:-top-20 xl:mb-1 xl:w-1/3"
					src={Logo}
					alt="logo"
				></img>
			</div>
		</div>
	);
};

export default tentang;
