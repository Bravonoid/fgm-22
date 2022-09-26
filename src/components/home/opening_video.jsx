import React from "react";
import Penari from "../../assets/home/penari.png";
import fgm_black from "../../assets/home/fgm-black.svg";
import mozaik from "../../assets/home/mozaik.svg";
import fgm from "../../assets/home/fgm.svg";
import  Teaser from '../../assets/home/video/Video_Web_2_1_1_1.mp4'
const opening_video = () => {
	return (
		<div
			className="relative flex w-full justify-center  bg-cover  sm:object-left mobile:object-right mobile:object-none mt-16"

			
		>
		
			<div className="flex z-50 h-screen overflow-hidden mobile:h-[167px]">
				<img
					className="mobile:block mobile:w-2/3 mobile:mx-10 sm:hidden"
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
				<div className="absolute justify-between items-center w-full -z-50 overflow-hidden  mx-auto h-full">
				<video className='-z-50 object-cover overflow-hidden mx-auto h-screen w-full' src={Teaser} type="video/mp4" autoPlay loop muted>
        </video>
				</div>
			</div>
		</div>
	);
};
export default opening_video;
