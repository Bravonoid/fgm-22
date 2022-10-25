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
        <div className="text-white py-48 flex flex-col items-center w-screen justify-center ">
          <div className="">test</div>
          <div className="flex items-center justify-center flex-col w-full">
            <div>
              test
            </div>
            <div className="bg-fgm-merah-orange px-12  w-2/3">
              <div className="w-full justify-between flex items-center">
              <div>test</div>
              <div>test</div>

              <div>test</div>
              <div>test</div>
              </div>
           

            </div>
            <div>
              test
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
