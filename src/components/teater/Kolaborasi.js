import React from "react";
import Gamasutra from "../../assets/teater/Gamastura.png";
import Kolaborasi from "../../assets/teater/Kolaborasi.svg";
import GMCO from "../../assets/teater/Logo GMCO transparan.png";
import Orkestra from "../../assets/teater/Rumah Orkestra.png";

const trailer = () => {
  return (
    <div className=" relative  my-auto flex h-full w-full items-center pb-20 justify-center bg-cover py-4 text-white">
      <div className="flex mx-5 sm:w-3/4 w-full flex-col">
        <div className="flex mx-2 mb-10 items-center "> 
          <img className = "mx-auto" src={Kolaborasi}></img>
        </div>
        <div className="mt-5 grid sm:grid-cols-3  ">
          <img className = "xl:h-full mt-8 sm:mt-0 relative mx-auto lg:h-44 sm:h-32 h-48 " src={Orkestra}></img>
          <img className="relative  mt-3 mx-auto sm:my-auto" src={GMCO}></img>
          <img className="relative  mt-10 mx-auto sm:my-auto" src={Gamasutra}></img>
        </div>
      </div>
    </div>
  );
};

export default trailer;
