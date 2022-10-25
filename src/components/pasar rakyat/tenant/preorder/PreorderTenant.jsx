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
import JudulPreOrder from '../../../../assets/Pasar-Rakyat/pre-order/Judul_PreOrder.svg'
import Bg from '../../../../assets/Pasar-Rakyat/pre-order/bg.svg'
import Timeline from '../../../../assets/Pasar-Rakyat/pre-order/pattern-timeline.svg'

const Tenant = () => {
  const dataPreorder = require("../../../../assets/data/tenants/dataPreorder.json");

  return (
    <div className="h-full w-full py-16 bg-fgm-base">
      <HtmlHead title="Pre Order" decription="[insert page description]" />
      <div className="h-screen ">
        <div className="bg-cover mt-5 h-[13rem] flex flex-col items-center align-middle " style={{ backgroundImage: `url(${Bg})` }} >
          <img className="mx-auto sm:h-auto h-12" src={JudulPreOrder} alt="" />
          <div className="mt-4 text-base sm:text-xl w-1/2">
            <p className="text-white text-center ">Pre-order (sering disingkat PO) adalah sistem pembelian yang banyak penjual lakukan sebelum barang benar-benar tersedia. Barang PO dapat diambil pada saat acara.</p>

          </div>
        </div>

        <div className="text-white py-48  hidden xl:flex  flex-col items-center w-screen justify-center ">
          <div className="">test</div>
          <div className="flex items-center  justify-center flex-col w-full">
          <div className=" px-12 mb-8 w-2/3">
              <div className="w-full justify-between font-bold flex items-center">
                <div className="text-center">Pembukaan Masa PO</div>
                <div className="text-center">Penutupan Masa PO</div>

                <div className="text-center">Pengiriman Kode Unik</div>
                <div className="text-center">Pengambilan Barang</div>
              </div>


            </div>
            <div className="bg-fgm-merah-orange px-12 items-center flex justify-center h-3  w-2/3">
              <div className="w-[88%] justify-between flex items-center">
                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>

                <img className="h-8" src={Timeline}></img>
                <img className="h-8" src={Timeline}></img>
              </div>


            </div>
            <div className=" px-12 mt-8  w-[65%]">
              <div className="w-full justify-between flex items-center">
                <div className="text-center">1 November 2022</div>
                <div className="text-center">13 November 2022</div>

                <div className="text-center">14 - 15 November 2022</div>
                <div className="text-center" >26 November 2022</div>
              </div>


            </div>
          </div>
        </div>

        <div className="text-white py-32   flex xl:hidden   items-center w-screen justify-center ">
          <div className="grid grid-cols-1 h-[32rem] ">
            <div>tst</div>
            <div>tst</div>

            <div>tst</div>
            <div>tst</div>

          </div>
          <div className="h-[32rem] w-5 flex flex-col bg-fgm-merah-orange ">
          <img className="w-32 h-32" src={Timeline}></img>
          <img className="h-8" src={Timeline}></img>
          <img className="h-8" src={Timeline}></img>
          <img className="h-8" src={Timeline}></img>
          </div>
          <div className="grid grid-cols-1 h-[32rem]   ">
            <div>tst</div>
            <div>tst</div>
            <div>tst</div>
            <div>tst</div>

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
