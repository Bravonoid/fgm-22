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

  return (
    <>
      <div className="flex h-[5vh] w-full justify-center bg-[#1E1E1E]">
        <div className="flex w-full justify-center">
          <h2
            onClick={handleTema}
            className={
              tema
                ? "text-[40px] text-white opacity-100 hover:cursor-pointer mobile:text-[20px]"
                : "text-[40px] text-white opacity-40 hover:cursor-pointer hover:opacity-100 mobile:text-[20px]"
            }
          >
            TEMA BESAR
          </h2>
          <span className="mx-10 my-[10px] inline-block h-[2.5em] w-[3px] bg-white mobile:mx-5 mobile:my-0 mobile:h-[2em] "></span>
          <h2
            onClick={handleTagline}
            className={
              tagline
                ? "text-[40px] text-white opacity-100 hover:cursor-pointer mobile:text-[20px]"
                : "text-[40px] text-white opacity-40 hover:cursor-pointer hover:opacity-100 mobile:text-[20px]"
            }
          >
            TAGLINE
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-center bg-[#1E1E1E] pt-5 md:h-[35vh] pb-10 md:pb-0">
        <div
          className={
            tema ? "mx-auto block items-center justify-center pt-5" : "hidden"
          }
        >
          <img src={TemaBesar} className="hidden md:flex" alt="tema-besar" />
          <img
            src={TemaBesarMobile}
            className="flex items-center justify-center md:hidden"
            alt="tema-besar"
          />
          <img
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
              className="mx-auto items-center justify-center overflow-hidden hidden md:flex"
              alt="mozaik"
            />
          </div>
        </div>
      </div>
      <div className="flex h-[15vh] w-full bg-[#1E1E1E]">
        <img
          src={MozaikTentang}
          className="mx-auto hidden items-center justify-center overflow-hidden md:flex"
          alt="mozaik"
        />
        <img
          src={MozaikTentangMobile}
          className="mx-auto items-center justify-center overflow-hidden md:hidden"
          alt="mozaik"
        />
      </div>
    </>
  );
};

export default ActiveTab;
