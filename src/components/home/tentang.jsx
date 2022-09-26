import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "../tentang/Tentang";
import Logo from "../../assets/logo_fgm.svg";
import gunungan from "../../assets/home/gunungan.svg";
import mozaik_horizontal from "../../assets/home/mozaik_horizontal.svg";
import rectangle_17 from "../../assets/home/rectangle-17.svg";
import rectangle_18 from "../../assets/home/rectangle-18.svg";
import Tentang from "../tentang/Tentang";

const tentang = () => {
  return (
    <div className="items-center bg-[#1E1E1E]">
      <img
        src={gunungan}
        className="absolute sm:h-3/4 md:w-1/4 lg:w-1/5 xl:w-1/6 xl:scale-[2] mobile:top-80 mobile:w-2/5"
        alt="gunungan"
      ></img>
      <div className="absolute overflow-hidden pt-[2rem] sm:right-4 sm:w-11/12 xl:-right-0 xl:scale-75">
        <img
          className="mobile:hidden "
          src={mozaik_horizontal}
          alt="mozaik"
        ></img>
      </div>
      <div className="relative sm:top-32 sm:-right-8 sm:mx-auto sm:grid sm:grid-cols-2 xl:-right-40 xl:top-[11rem] xl:ml-[50px] mobile:flex mobile:flex-col-reverse pb-32">
        <div className="relative items-end text-left text-white sm:-top-10 sm:my-5 sm:mb-[100px] xl:-top-10 xl:w-4/5 mobile:top-16 mobile:mx-10 mobile:text-sm">
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
          <div className="text-justify sm:text-base xl:text-2xl">
            Festival Gadjah Mada merupakan sebuah festival yang menyajikan
            kreasi budaya dan seni tradisional melalui pengemasan yang modern.
            Pada tahun ini Festival Gadjah Mada akan menyemarakan rangkaian
            acaranya melalui festival seni, pasar rakyat, dan pentas teater
          </div>
          <Link to="/about">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-white py-2 px-6 font-Montserrat text-lg text-black hover:bg-slate-300 hover:px-[1.33rem] hover:font-bold mobile:text-sm"
            >
              Selengkapnya
            </button>
          </Link>
        </div>
        <img
          className="relative items-center justify-center text-left text-white sm:top-1 sm:left-20 sm:w-1/2 md:-top-0.5 lg:left-32 lg:w-2/5 xl:-top-20 xl:mb-1 xl:w-2/6 mobile:top-10 mobile:mx-auto mobile:w-1/4"
          src={Logo}
          alt="logo"
        ></img>
      </div>
    </div>
  );
};

export default tentang;
