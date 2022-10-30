import React, { useState,useEffect } from "react";
import Modal from "./ModalPreOrder";
import productData from "../../../../assets/data/tenants/data.json";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kembangputih1 from "../../../../assets/Pasar-Rakyat/produk/kembangputih1.svg";
import kembangputih2 from "../../../../assets/Pasar-Rakyat/produk/kembangputih2.svg";
import produk from "../../../../assets/Pasar-Rakyat/produk/produk.svg";
import sort from "../../../../assets/Pasar-Rakyat/produk/sort.svg";
import pattern from "../../../../assets/Pasar-Rakyat/produk/bg-pattern.svg";
import produk2 from "../../../../assets/Pasar-Rakyat/produk/produk2.svg";
import judultemabunga from "../../../../assets/Pasar-Rakyat/produk/judultemabunga.svg";
import hiasan from "../../../../assets/Pasar-Rakyat/produk/hiasan-kanan-pageproduk.svg";
import Diskon from "../../../../assets/Pasar-Rakyat/produk/diskon.png";
import header from "../../../../assets/Pasar-Rakyat/produk/header_preorder.svg";
import label from "../../../../assets/Pasar-Rakyat/produk/preorder_label.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HtmlHead } from "../../../HtmlHead";
import { useNavigate } from "react-router-dom";
export default function PreOrder() {
  
  const param = useParams()
  const navigate = useNavigate()
  const index  = param.id;
  useEffect(() => {
    if(index > 20)
  {
    navigate("/produktidakditemukan")
    
  }

  }, []);
  
  const [showModal, setShowModal] = useState(false);
  const [showModalData, setShowModalData] = useState([]);
  const modalData = (
    newName,
    newImages,
    newBahan,
    newColor,
    newDImension,
    newPrice,
    newPromo,
    newPembayaran,
    newTenantName,
    id
  ) => {
    let showModalData = [
      newName,
      newImages,
      newBahan,
      newColor,
      newDImension,
      newPrice,
      newPromo,
      newPembayaran,
      newTenantName,
      id,
    ];
    setShowModalData((product) => [1, ...showModalData]);
    return setShowModal(true);
  };

  return (
    <div className="text-gray-500 bg-fgm-base m-0 bg-30% mx-0" >
     <HtmlHead title="Pre Order" decription="[insert page description]" />
      <div>
        {productData.map((dataTenant) => {
          if (dataTenant.id_tenant == index) {
            return (
              <>
                <div className="bg-[#171717] sm:h-auto mobile:h-auto relative">
                <Link to="/pasar-rakyat/pre-order">
                  <p className="text-white font-bold text-lg pt-24 pl-10">&#9664; Katalog Pre Order</p>
                </Link>
                <div className=" pl-16 flex flex-row gap-12 sm:pt-16 mobile:flex-col mobile:px-8 mobile:top-0 mobile:pt-8 mobile:pb-8 sm:pb-8">
                    <img
                        className="object-cover mobile:block mobile:mx-auto w-[300px] h-[300px] mobile:w-[200px] mobile:h-[200px]"
                        alt={dataTenant.tenantName}
                        src={"/data/tenant/" +
                                    index +
                                    "/" +
                                    dataTenant.tenantLogo}
                    />
                    <div className="flex flex-col w-1/3 gap-y-4 mobile:w-full">
                        <div className="font-bold text-4xl text-white"> {dataTenant.tenantName}</div>
                        <p className="lg:text-lg xl:text-xl text-justify text-white mobile:text-base">{dataTenant.description}</p>
                        <div className="flex flex-row gap-4">
                        {dataTenant.socialMedia.map((socMed) => {
                              return (
                                <>
                                  <div className="text-left items-start grid grid-cols-3 justify-items-center justify-self-center self-center md:flex gap-10">
                                    {socMed.instagram !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.instagram} >
                                            <FontAwesomeIcon icon={faInstagram} className="h-12 w-12 text-white" />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  
                                  </div>
                                </>
                              );
                            })}
                        </div>
                    </div>
                </div>
                <img src={hiasan} alt="hiasan" className="absolute right-0 bottom-0 w-[30%] mobile:hidden sm:hidden lg:block"/>
            </div>
            <div className="block bg-[#202020] bg-cover" style={{backgroundImage: `url(${pattern}`}}>
                <div className="relative pt-20 mx-auto flex justify-center items-center w-full text-left text-white">
                    <img src={header} alt="produk" className="relative top-0 left-0 w-full h-full object-cover mobile:hidden sm:block" />
                    {/* <img src={judultemabunga} alt="produk" className="relative top-0 left-0 w-full h-full object-cover mx-8 sm:hidden" /> */}
                    {/* <img src={kembangputih1} alt="kembangputih" className="hidden sm:block relative h-16 mr-10 mx-auto"/>
                    <img src={produk} alt="kembangputih" className="relative h-16 mx-auto"/>
                    <img src={kembangputih2} alt="kembangputih" className="hidden sm:block relative h-16 ml-10 mx-auto"/> */}
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-y-4 pt-8 ">
                {dataTenant.product.map((product, product_index) => {
                    return (
                        <>
                        <div
                        className="bg-white text-center justify-self-center my-4"
                        key={product_index}
                        ></div>
                <div className="flex flex-row mx-auto text-white">
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949] hover:cursor-pointer relative" onClick={() => {
                                  modalData(
                                    product.productName,
                                    product.productImages,
                                    product.bahan,
                                    product.color,
                                    product.dimension,
                                    product.price,
                                    product.promo,
                                    dataTenant.pembayaran,
                                    dataTenant.tenantName,
                                    dataTenant.id_tenant
                                  );
                                }}>
                                <img
                                    className="object-cover right-0 absolute"
                                    alt="label"
                                    src={label}
                                    />

                                <img
                                  className="object-cover"
                                  alt={product.productName}
                                  src={
                                    "/data/tenant/" +
                                    dataTenant.id_tenant +
                                    "/product/" +
                                    product.productImages
                                  }
                                  width="auto"
                                  height="auto"
                                />
                        <p className="font-bold px-10 text-xl">{product.productName}</p>
                        <p className="text-lg px-10"> Rp{product.price}.000</p>
                    </div>
                </div>
                </>
                    );
                })}
                </div>
            </div>
            <div className="flex justify-end bg-[#202020]">
                <a
                                href={
                                  dataTenant.pembayaran +
                                  "?text=Halo!%20" +
                                  dataTenant.tenantName +
                                  ",%20saya%20ingin%20membeli%20" +
                                
                                  "%20apakah%20masih+ada?%0aBagaimana%20caranya?"
                                }
                              >
                <button className="p-4 bg-[#EEEEEE] text-[#171717] font-Montserrat text-center font-bold m-4 hover:cursor-pointer">PREORDER DISINI</button></a>
            </div>
            </>
            );
          }
       
        }
        )}
      </div>
      {showModal === true ? (
        <Modal
          newProductName={showModalData[1]}
          newProductImages={showModalData[2]}
          newProductBahan={showModalData[3]}
          newProductColor={showModalData[4]}
          newProductDimension={showModalData[5]}
          newProductPrice={showModalData[6]}
          newProductPromo={showModalData[7]}
          newPembayaran={showModalData[8]}
          newTenantName={showModalData[9]}
          newId={showModalData[10]}
          hide={() => setShowModal(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
}
