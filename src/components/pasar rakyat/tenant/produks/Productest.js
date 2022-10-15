import React, { useState } from "react";
import Modal from "./Modal";
import productData from "../../../../assets/data/tenants/data.json";
import Diskon from "../../../../assets/Pasar-Rakyat/produk/diskon.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Produk() {
  const [searchValue, setSearchValue] = useState("");
  const [sorting, setSorting] = useState(false);
  const param = useParams();
  const [dataTenant, setDataTenant] = useState([]);

  const index = param.id;
  const data = require("../../../../assets/data/tenants/data.json");

  useEffect(() => {
    console.log(data);
    const productDatas = data.filter((tenant) => {
      if (tenant.id_tenant.toString() == index) {
        return tenant;
      }
    });
    console.log(productDatas);
    setDataTenant(productDatas);
    if (!dataTenant) {
      return {
        notFound: true,
      };
    }
  }, [index]);
  console.log(dataTenant);
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
    <div className="bg-30% m-0 mx-0 bg-fgm-base text-gray-500">
      <div>
              <div className="mx-10 py-16 md:mx-20">
                <div className="item-center flex justify-center text-center">
                  <div className="flex justify-center pt-2 md:pt-4">
                    <div className="mx-0 md:mx-0">
                      <div className="space-y-15 max-w-8xl container">
                        <div className="flex flex-wrap md:flex-row-reverse">
                          <div className="p-6 md:w-1/2">
                            <div className="py-10 text-3xl font-bold md:py-10 md:text-5xl lg:py-14">
                              {dataTenant[0].tenantName}
                            </div>
                            <p className="md:tex-lg mb-8 text-justify lg:text-2xl">
                              {dataTenant[0].description}
                            </p>

                            {dataTenant[0].socialMedia.map((socMed) => {
                              return (
                                <>
                                  {socMed.whatsapp === null &&
                                  socMed.instagram === null &&
                                  socMed.facebook === null &&
                                  socMed.website === null &&
                                  socMed.shopee === null &&
                                  socMed.tokopedia === null ? (
                                    ""
                                  ) : (
                                    <div className="pb-10 text-left text-xl font-bold">
                                      Contact Us
                                    </div>
                                  )}
                                  <div className="grid grid-cols-3 items-start justify-items-center gap-10 self-center justify-self-center text-left md:flex">
                                    {socMed.whatsapp !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.whatsapp}>
                                            <img
                                              src="/images/social_media/whatsapp.png"
                                              width="30"
                                              height="30"
                                            />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {socMed.instagram !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.instagram}>
                                            <img
                                              src="/images/social_media/instagram.png"
                                              width="30"
                                              height="30"
                                            />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {socMed.facebook !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.facebook}>
                                            <img
                                              src="/images/social_media/facebook.png"
                                              width="30"
                                              height="30"
                                            />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {socMed.website !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.website}>
                                            <img
                                              src="/images/social_media/website.png"
                                              width="30"
                                              height="30"
                                            />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {socMed.shopee !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.shopee}>
                                            <img
                                              src="/images/social_media/shopee.png"
                                              width="100"
                                              height="30"
                                            />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {socMed.tokopedia !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.tokopedia}>
                                            <img
                                              src="/images/social_media/tokopedia.png"
                                              width="125"
                                              height="30"
                                            />
                                          </a>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {socMed.lazada !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.lazada}>
                                            <img
                                              src="/images/social_media/lazada.png"
                                              width="125"
                                              height="30"
                                            />
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
                          <div className="mt-24 flex w-full content-center items-center justify-center md:w-1/2">
                            <div className="object-center">
                              <div className="w-54 md:w-60 lg:w-96">
                                <img
                                  className="object-cover"
                                  alt={dataTenant[0].tenantName}
                                  src={
                                    "/data/tenant/" +
                                    index +
                                    "/" +
                                    dataTenant[0].tenantLogo
                                  }
                                  width="300"
                                  height="300"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-16 pb-6 text-center text-4xl font-bold">
                  Produk dari {dataTenant[0].tenantName}
                </div>
                <div
                  className={
                    "xl:grid-cols- grid grid-cols-1 items-center justify-self-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" +
                    4 +
                    " gap-2 pb-10 lg:gap-5 xl:gap-5"
                  }
                >
                  {dataTenant[0].product.map((product, product_index) => {
                    return (
                      <div
                        className="my-4 justify-self-center bg-white text-center"
                        key={product_index}
                      >
                        <div>
                          <div className="w-72 overflow-hidden rounded-lg pt-6 pb-4 shadow-md md:w-72 lg:w-80">
                            {product.promo !== null ? (
                              <>
                                <div className="sticky z-10 mr-3 flex w-auto">
                                  <div className="absolute right-0 ">
                                    <div className="absolute right-0 z-20 mr-4 mt-3 flex h-20 w-20 items-center justify-center text-sm font-extrabold text-white">
                                      {product.promo_short}
                                    </div>
                                    <img
                                      alt="Ada diskon"
                                      className="mt-0"
                                      src={Diskon}
                                      width="110"
                                      height="110"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              ""
                            )}

                            <div className="flex items-center justify-center ">
                              <div className="w-44 md:w-60 lg:w-64">
                                <img
                                  className="rounded-2xl object-cover"
                                  alt={product.productName}
                                  src={
                                    "/data/tenant/" +
                                    dataTenant[0].id_tenant +
                                    "/product/" +
                                    product.productImages
                                  }
                                  width="225"
                                  height="275"
                                />
                              </div>
                            </div>
                            <div className="px-6 py-2">
                              <div className="flex justify-center pb-4 text-center text-2xl font-bold">
                                {product.productName}
                              </div>
                            </div>
                            <span className="inline-block w-auto max-w-prose rounded-full bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
                              Bahan : {product.bahan}
                            </span>
                            <div className="py-5 text-2xl font-bold">
                              Rp{product.price}.000
                            </div>
                            <div className="space-x-3 py-4">
                              <a
                                href={
                                  dataTenant[0].pembayaran +
                                  "?text=Halo!%20" +
                                  dataTenant[0].tenantName +
                                  ",%20saya%20ingin%20membeli%20" +
                                  product.productName +
                                  "%20apakah%20masih+ada?%0aBagaimana%20caranya?"
                                }
                              >
                                <button className="rounded-full bg-red-500 py-4 px-10 text-xl font-bold text-white hover:bg-red-700">
                                  Beli
                                </button>
                              </a>
                              <button
                                className="bg-fgmYellow rounded-full py-4 px-10 text-xl font-bold text-white hover:bg-yellow-500"
                                type="button"
                                onClick={() => {
                                  modalData(
                                    product.productName,
                                    product.productImages,
                                    product.bahan,
                                    product.color,
                                    product.dimension,
                                    product.price,
                                    product.promo,
                                    dataTenant[0].pembayaran,
                                    dataTenant[0].tenantName,
                                    dataTenant.id_tenant
                                  );
                                }}
                              >
                                Detail
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
        
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
