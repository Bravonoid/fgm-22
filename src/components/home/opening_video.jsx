import React from "react";
import Penari from "../../assets/home/penari.png";
import fgm_black from "../../assets/home/fgm-black.svg";
import mozaik from "../../assets/home/mozaik.svg";
import fgm from "../../assets/home/fgm.svg";
import Teaser from "../../assets/home/video/Video_Web_2_1_1_1.mp4";
const opening_video = () => {
	return (
		<div className="relative mt-16 flex w-full  justify-center  bg-cover sm:object-left mobile:object-none mobile:object-right">
			<div className="z-50 flex bg-[#171717] w-full h-screen overflow-hidden mobile:h-[75vh]">
				<img
					className="sm:hidden mobile:mx-10 mobile:block mobile:w-2/3"
					src={fgm}
					alt="fgm"
					data-aos="fade-left" data-aos-duration="1000"
				></img>
				<img
					className="sm:w-1/8 mx-[0px] px-[10px] py-[10px] lg:mr-[50px] lg:w-1/12 xl:mr-[100px] mobile:hidden"
					src={mozaik}
					alt="fgm_black"
					data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000"
				></img>
				<img
					className=" ml-[100px] pr-[10px] sm:w-2/3 lg:ml-[10px] xl:w-1/2 mobile:mx-auto mobile:hidden mobile:w-1/2"
					src={fgm_black}
					alt="fgm_black"
					data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000"
				></img>
				<div className="absolute -z-50 mx-auto h-full w-full items-center  justify-between overflow-hidden">
					<video
						className="-z-50 mx-auto h-screen w-full overflow-hidden object-cover"
						src={Teaser}
						type="video/mp4"
						playsinline
						autoPlay
						loop
						muted
					></video>
				</div>
			</div>
		</div>
	);
};
export default opening_video;
