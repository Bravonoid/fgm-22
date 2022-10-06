import React from "react";
import { Link } from "react-router-dom";

import Maskot from "../../assets/pagenotfound/MaskotAlone.svg";
import Judul from "../../assets/pagenotfound/T404.svg";
import BataAtas from "../../assets/pagenotfound/BataAtas.svg";
import BataBawah from "../../assets/pagenotfound/BataBawah.svg";

const Section404 = () => {
  return (
    <div className="bg-fgm-base bg-cover ">
      <img src={BataAtas} alt="" className="pointer-events-none w-full pt-16" />
      <div className="flex h-1/2 flex-col items-center justify-center py-16 text-[#EEEEEE] md:flex-row md:py-32">
        <div className="flex flex-col items-center justify-evenly md:h-[258px] md:items-end">
          <img src={Judul} alt="" className="w-1/2 md:w-1/4 lg:w-1/3" />
          <div className="mt-2 text-center text-xl font-black sm:text-2xl md:text-right md:text-5xl ">
            Maaf, halaman tidak ditemukan
          </div>
          <Link to="/">
            <div className="btn mt-2 bg-fgm-purple py-2 px-4 text-center text-lg font-black text-[#EEEEEE] shadow-[0_0_0_rgb(72,130,103)] transition-all ease-out hover:translate-y-1 hover:-translate-x-1 hover:shadow-[9px_9px_0_rgb(72,130,103)] md:mt-4 md:py-4 md:px-5 md:text-2xl">
              BERANDA
            </div>
          </Link>
        </div>
        <div className="pt-4 md:p-0 md:pl-8">
          <img src={Maskot} alt="" />
        </div>
      </div>
      <img src={BataBawah} alt="" className="pointer-events-none w-full" />
    </div>
  );
};

export default Section404;
