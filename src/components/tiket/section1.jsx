import React from "react";
import Judul_pentas from "../../assets/tiket/pentas_teater_tiket.svg";
import Rangkaian from "./rangkaian";
import Green_card from "../../assets/tiket/Green_card.svg";
import Red_card from "../../assets/tiket/Red_card.svg";
import Pink_card from "../../assets/tiket/Pink_card.svg";

import Early_Bird from "../../assets/tiket/Early_Bird.svg";
import Presale_1 from "../../assets/tiket/Presale_1.svg";
import Regular from "../../assets/tiket/Regular.svg";

import EarlyBirdSM from "../../assets/tiket/EarlyBirdSM.svg";
import Presale1SM from "../../assets/tiket/Presale1SM.svg";
import RegularSM from "../../assets/tiket/RegularSM.svg";

import FestivalSeni from "../../assets/tiket/FESTIVAL SENI.svg";

import { Link } from "react-router-dom";
const section1 = () => {
  return (
    <div className="flex h-full flex-col items-center justify-between overflow-hidden bg-fgm-base sm:h-full ">
      <div className=" mx-8 mt-8  mb-2 h-full w-full  flex-row justify-center pt-8 md:px-16">
        <div className="my-16  sm:mx-16 md:mx-32">
          <div className="flex h-32 items-center justify-between sm:w-full ">
            <div className=" hidden h-10 w-2/3  bg-fgm-merah-orange sm:mr-8 sm:block"></div>
            <img className="mx-auto h-10 sm:h-16 " src={Judul_pentas}></img>
            <div className="hidden h-10 w-2/3  bg-fgm-merah-orange sm:ml-8 sm:block"></div>
          </div>
          <div className="tems-center w-full justify-center text-2xl font-bold text-white  sm:flex ">
            <div className="mr-4 hidden text-right sm:inline-block">
              18 November <br />
              2022
            </div>
            <div className="h-[15] w-1 bg-white "></div>
            <div className="ml-4 hidden text-left sm:inline-block">
              Taman Budaya <br />
              Yogyakarta
            </div>
            <div className="text-center text-lg sm:hidden ">
              18 November 2022 <br /> Taman Budaya Yogyakarta
            </div>
          </div>
          <div></div>
        </div>
        <div className="my-16 mx-8 items-center justify-between sm:mx-4 xl:mx-32 xl:px-16">
          <div className="flex h-full w-full flex-col items-center justify-between gap-4 sm:h-[32rem] sm:flex-row ">
            <div className="mx-auto justify-center">
              <img
                className="h-[30rem] sm:h-72 md:h-96 xl:h-full"
                src={Red_card}
                alt=""
              />
            </div>
            <div className="mx-auto justify-center">
              <img
                className="h-[30rem] sm:h-72 md:h-96 xl:h-full"
                src={Green_card}
                alt=""
              />
            </div>
            <div className="mx-auto justify-center">
              <img
                className="h-[30rem] sm:h-72 md:h-96 xl:h-full"
                src={Pink_card}
                alt=""
              />
            </div>
          </div>
          <Link>
            <div className="btn mx-auto mt-8 w-fit bg-fgm-merah-orange py-4 px-5 text-center text-xl font-bold text-white   shadow-[0_0px_0px_rgb(72,130,103)] transition-all ease-out  hover:translate-y-1 hover:shadow-[9px_9px_0_rgb(72,130,103)] md:mt-8 md:text-2xl xl:mt-16 2xl:mt-32">
              BELI TIKET PENTAS TEATER
            </div>
          </Link>
          <div></div>
        </div>
        <div></div>
      </div>
      <div className=" my-2  mx-8 h-full w-full flex-row justify-center pt-8 md:px-16">
        <div className="my-8  sm:mx-32">
          <div className="flex h-32  items-center justify-between sm:w-full ">
            <div className="hidden h-10 w-2/3  bg-fgm-orange sm:mr-8 sm:block"></div>
            <img className="mx-auto h-8 sm:h-10 " src={FestivalSeni}></img>
            <div className="hidden h-10  w-2/3  bg-fgm-orange sm:ml-8 sm:block"></div>
          </div>
          <div className="tems-center w-full justify-center pl-8 text-2xl font-bold text-white  sm:flex ">
            <div className="mr-4 hidden text-right sm:inline-block">
              26 November <br />
              2022
            </div>
            <div className="h-[15] w-1 bg-white "></div>

            <div className="ml-4 hidden text-left sm:inline-block">
              Lapangan <br />
              Pancasila UGM
            </div>
            <div className="text-center  text-lg sm:hidden ">
              26 November 2022 <br /> Lapangan Pancasila UGM
            </div>
          </div>
          <div></div>
        </div>
        <div className="my-16 mx-8  xl:mx-32 xl:px-8">
          <div className="flex h-full  w-full flex-col items-center justify-between gap-4 sm:h-[32rem] ">
            <div className="mx-auto h-[32rem] justify-center">
              <img className="hidden sm:block" src={Early_Bird} alt="" />
              <img
                className="block h-[25rem] sm:hidden"
                src={EarlyBirdSM}
                alt=""
              />
            </div>
            <div className="mx-auto h-[32rem] justify-center">
              <img className="hidden sm:block" src={Presale_1} alt="" />
              <img
                className="block  h-[25rem]  sm:hidden"
                src={Presale1SM}
                alt=""
              />
            </div>
            <div className="mx-auto h-[32rem]  justify-center">
              <img className="hidden sm:block" src={Regular} alt="" />
              <img
                className="block  h-[25rem] sm:hidden"
                src={RegularSM}
                alt=""
              />
            </div>
          </div>
          <Link>
          <div className="btn mx-auto w-fit  bg-fgm-orange py-4 px-5 text-center text-xl font-bold  text-white shadow-[0_0px_0px_rgb(72,130,103)] transition-all  ease-out hover:translate-y-1 hover:shadow-[9px_9px_0_rgb(72,130,103)] md:mt-8  md:text-2xl xl:mt-16 2xl:mt-32">
            BELI TIKET FESTIVAL SENI X PASAR RAKYAT
          </div>
          </Link>

          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default section1;
