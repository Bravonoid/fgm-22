import React, { useEffect, useState } from "react";
import TemaBesar from "../../assets/tentang/text-tema-besar.png";
import TemaBesarKecil from "../../assets/tentang/text-tema-besar-kecil.png";
import TemaBesarMobile from "../../assets/tentang/tema-besar-mobile.svg";
import Tagline from "../../assets/tentang/tagline.png";
import KembangTagline from "../../assets/tentang/kembang-tagline.svg";
import FrameTaglineMobile from "../../assets/tentang/frame-tagline-mobile.svg";
import TaglineMobile from "../../assets/tentang/tagline-mobile.svg";
import MozaikTentang from "../../assets/tentang/mozaik-tentang.svg";
import MozaikTentangMobile from "../../assets/tentang/mozaik-tentang-mobile.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ActiveTab = () => {
  const [tema, setTema] = useState(true);
  const [tagline, setTagline] = useState(false);

  const handleTema = () => {
    setTema(true);
    setTagline(false);
  };

  const handleTagline = () => {
    setTema(false);
    setTagline(true);
  };

  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="flex w-full justify-center bg-[#171717] pt-20 lg:pt-20" id="tema">
        <div
          className="flex w-full justify-center"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-duration="400"
        >
          <h2
            onClick={handleTema}
            className={
              tema
                ? "text-[20px] text-white opacity-100 hover:cursor-pointer md:text-[40px]"
                : "text-[20px] text-white opacity-40 hover:cursor-pointer hover:opacity-100 md:text-[40px]"
            }
          >
            TEMA BESAR
          </h2>
          <span className="mx-5 my-0 inline-block h-[2em] w-[3px] bg-white md:mx-10 md:my-[10px] md:h-[2.5em] "></span>
          <h2
            onClick={handleTagline}
            className={
              tagline
                ? "text-[20px] text-white opacity-100 hover:cursor-pointer md:text-[40px]"
                : "text-[20px] text-white opacity-40 hover:cursor-pointer hover:opacity-100 md:text-[40px]"
            }
          >
            TAGLINE
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-center bg-[#171717] py-10">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <div
            className={
              tema ? "mx-auto block items-center justify-center pt-5" : "hidden"
            }
          >
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
              src={TemaBesar}
              className="hidden md:flex"
              alt="tema-besar"
            />
            <img
              src={TemaBesarMobile}
              className="flex items-center justify-center md:hidden"
              alt="tema-besar"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
              src={TemaBesarKecil}
              className="hidden px-[0.5rem] md:flex"
              alt="tema-besar-kecil"
            />
          </div>
          <div className={tagline ? "block" : "hidden"}>
            <div className="mx-5 items-center justify-center">
              <img
                src={TaglineMobile}
                className="mx-auto items-center justify-center overflow-hidden md:hidden"
                alt="mozaik"
              />
              <img
                src={Tagline}
                className="mx-auto hidden items-center justify-center overflow-hidden md:flex"
                alt="mozaik"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex w-full overflow-hidden bg-[#171717]">
        <div data-aos="flip-up" data-aos-duration="2000" className="scale-x-(135%)">
        <img
          src={MozaikTentang}
          className="mx-auto hidden scale-x-[175%] items-center justify-center overflow-hidden md:flex"
          alt="mozaik"
        />
        <img
          src={MozaikTentangMobile}
          className="mx-auto scale-x-[150%] items-center justify-center overflow-hidden md:hidden"
          alt="mozaik"
        />
        </div>
      </div>
    </>
  );
};

export default ActiveTab;
