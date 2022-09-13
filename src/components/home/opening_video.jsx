import React from "react";
import Penari from "../../assets/home/penari.png";
import fgm_black from "../../assets/home/fgm-black.svg";
import mozaik from "../../assets/home/mozaik.svg";
import fgm from "../../assets/home/fgm.svg";

const opening_video = () => {
	return (
		<div
			className="relative flex w-full justify-center bg-cover px-[10px] py-[1px] sm:object-left mobile:object-right mobile:object-none mt-16"
			style={{ backgroundImage: `url(${Penari})` }}
		>
			<div className="flex h-[450px] mobile:h-[167px]">
				<img
					className="mobile:block mobile:w-1/2 mobile:mx-10 sm:hidden"
					src={fgm}
					alt="fgm"
				></img>
				<img
					className="sm:w-1/8 mx-[0px] px-[10px] py-[10px] lg:mr-[50px] lg:w-1/12 xl:mr-[100px] mobile:hidden"
					src={mozaik}
					alt="fgm_black"
				></img>
				<img
					className=" ml-[100px] pr-[10px] sm:w-2/3 lg:ml-[10px] xl:w-1/2 mobile:mx-auto mobile:w-1/2 mobile:hidden"
					src={fgm_black}
					alt="fgm_black"
				></img>
			</div>
		</div>
	);
};
export default opening_video;
