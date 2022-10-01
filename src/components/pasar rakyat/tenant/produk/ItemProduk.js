import React, {useState} from "react";
import {useEffect} from "react";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kembangputih1 from "../../../../assets/Pasar-Rakyat/produk/kembangputih1.svg";
import kembangputih2 from "../../../../assets/Pasar-Rakyat/produk/kembangputih2.svg";
import produk from "../../../../assets/Pasar-Rakyat/produk/produk.svg";
import sort from "../../../../assets/Pasar-Rakyat/produk/sort.svg";
import pattern from "../../../../assets/Pasar-Rakyat/produk/bg-pattern.svg";
import produk2 from "../../../../assets/Pasar-Rakyat/produk/produk2.svg";
import hiasan from "../../../../assets/Pasar-Rakyat/produk/hiasan-kanan-pageproduk.svg";
import productData from "../../../../assets/data/tenants/data.json";
import Modal from "./Modal.js";
export default function ItemProduk(props) {
    const [src, setSrc] = useState(
        `/pasar-rakyat/tenant/produk/${props.itemData.id_tenant}`
    );
    console.log(src)
    return (
        <a
          className="flex flex-col items-center border sm:border-2 shadow  bg-white  hover:scale-110 duration-300 ease-out overflow-hidden"
          href={`/pasar-rakyat/tenant/produk/${props.itemData.id_tenant}`}
        >
          <img
            height="240"
            width="240"
            className="my-auto object-cover"
            src={ process.env.PUBLIC_URL + src}
            onError={() => setSrc("/tenant/tokodummy.png")}
          />
          <div className="flex-none font-bold sm:text-base text-sm m-2">
            {props.itemData.tenantName}
          </div>
        </a>
      );
}