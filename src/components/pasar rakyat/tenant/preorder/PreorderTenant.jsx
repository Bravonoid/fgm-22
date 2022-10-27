import React from "react";
import { useState, useEffect } from "react";
import MapTenant from "./mapTenant";
import Foto from "./Foto";
import Polygon from "../../../../assets/Pasar-Rakyat/Polygon 1.svg";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
import DropdownIcon from "../../../../assets/Pasar-Rakyat/kategori/dropdown.svg";
import { HtmlHead } from "../../../HtmlHead";
import JudulPreOrder from "../../../../assets/Pasar-Rakyat/pre-order/Judul_PreOrder.svg";
import Bg from "../../../../assets/Pasar-Rakyat/pre-order/bg.svg";
import Timeline from "../../../../assets/Pasar-Rakyat/pre-order/pattern-timeline.svg";

const Tenant = () => {
  const dataPreorder = require("../../../../assets/data/tenants/dataPreorder.json");

  return (
    <div className="h-full w-full bg-fgm-base py-16">
      <HtmlHead title="Pre Order" decription="[insert page description]" />
      <div className="h-full xl:h-screen ">
        <div
          className="mt-5 flex h-[13rem] flex-col items-center bg-cover align-middle "
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <img className="mx-auto h-12 sm:h-auto" src={JudulPreOrder} alt="" />
          <div className="mt-4 w-3/4 text-base sm:text-xl md:w-1/2">
            <p className="text-center text-white ">
              Pre-order (sering disingkat PO) adalah sistem pembelian yang
              banyak penjual lakukan sebelum barang benar-benar tersedia. Barang
              PO dapat diambil pada saat acara.
            </p>
          </div>
        </div>

        <div className="hidden w-screen  flex-col items-center  justify-center py-32 text-white xl:flex ">
          <div className="text-3xl italic font-bold mb-16">Linimasa</div>
          <div className="flex w-full  flex-col items-center justify-center">
            <div className=" mb-8 w-2/3 px-12">
              <div className="flex w-full items-center justify-between font-bold">
                <div className="text-center">Pembukaan Masa PO</div>
                <div className="text-center">Penutupan Masa PO</div>

                <div className="text-center">Pengiriman Kode Unik</div>
                <div className="text-center">Pengambilan Barang</div>
              </div>
            </div>
            <div className="flex h-3 w-2/3 items-center justify-center bg-fgm-merah-orange  px-12">
              <div className="flex w-[88%] items-center justify-between">
                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>

                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>
              </div>
            </div>
            <div className=" mt-8 w-[65%]  px-12">
              <div className="flex w-full items-center justify-between">
                <div className="text-center">31 Oktober </div>
                <div className="text-center">13 November 2022</div>

                <div className="text-center">14 - 15 November 2022</div>
                <div className="text-center">26 November 2022</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-screen  flex flex-col items-center justify-center   py-16 text-white xl:hidden ">
          <div className="text-3xl font-bold mb-6 italic">Linimasa</div>
          <div className="flex w-full items-center justify-center ">
            <div className="grid h-[32rem] grid-cols-1 ">
              <div className="px-5 text-right"><p>Pembukaan Masa PO</p><p>31 Oktober  2022</p></div>
              <div className="text-right"></div>

              <div className="px-5 text-right"><p>Pengiriman Kode Unik</p><p>13 November  2022</p></div>
              <div className="text-right"></div>
            </div>
            <div className="flex h-[32rem] w-5 flex-col items-center bg-fgm-merah-orange ">
              <div className="grid h-full  w-8 grid-cols-1 items-center">
                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>
              </div>
            </div>
            <div className="grid h-[32rem] grid-cols-1   ">
              <div className=""></div>
              <div className="px-5  text-left"><p>Penutupan Masa Po</p><p>14-15 November  2022</p></div>
              <div></div>
              <div className="px-5  text-left"><p>Pengambilan Barang</p><p>26 November 2022</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <MapTenant tenantList={dataPreorder}></MapTenant>
      </div>
    </div>
  );
};

export default Tenant;
