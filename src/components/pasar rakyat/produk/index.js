import React, { useState } from "react";
import Modal from "./Modal";
import productData from "../../../assets/data/tenants/data.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { Header, produk as data } from "../../../../components/settings";
import Diskon from "../../../../assets/img/diskon.png";

export default function Produk() {
  const router = useRouter();
  const { index } = router.query;
  const styling = {
    backgroundImage: "url('/images/pattern.png')",
  };

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
    <div className="text-gray-500 bg-repeat m-0 bg-30% mx-0" style={styling}>
      <Header data={data} />
      <div>
        {productData.map((dataTenant) => {
          if (dataTenant.id_tenant == index) {
            return (
              <div className="py-16 mx-10 md:mx-20">
                <div className="flex justify-center item-center text-center">
                  <div className="flex justify-center pt-2 md:pt-4">
                    <div className="mx-0 md:mx-0">
                      <div className="space-y-15 container max-w-8xl">
                        <div className="flex flex-wrap md:flex-row-reverse">
                          <div className="w-full md:w-1/2 flex justify-center items-center content-center mt-24">
                            <div className="object-center">
                              <div className="lg:w-96 md:w-60 w-54">
                                <Image
                                  className="object-cover"
                                  alt={dataTenant.tenantName}
                                  src={
                                    "/data/tenant/" +
                                    index +
                                    "/" +
                                    dataTenant.tenantLogo
                                  }
                                  width="300"
                                  height="300"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="md:w-1/2 p-6">
                            <div className="font-bold text-3xl md:text-5xl py-10 lg:py-14 md:py-10">
                              {dataTenant.tenantName}
                            </div>
                            <p className="mb-8 text-justify lg:text-2xl md:tex-lg">
                              {dataTenant.description}
                            </p>

                            {dataTenant.socialMedia.map((socMed) => {
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
                                    <div className="text-left text-xl font-bold pb-10">
                                      Contact Us
                                    </div>
                                  )}
                                  <div className="text-left items-start grid grid-cols-3 justify-items-center justify-self-center self-center md:flex gap-10">
                                    {socMed.whatsapp !== null ? (
                                      <>
                                        <div>
                                          <a href={socMed.whatsapp}>
                                            <Image
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
                                            <Image
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
                                            <Image
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
                                            <Image
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
                                            <Image
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
                                            <Image
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
                                            <Image
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center font-bold text-4xl pt-16 pb-6">
                  Produk dari {dataTenant.tenantName}
                </div>
                <div
                  className={
                    "items-center justify-self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-" +
                    4 +
                    " pb-10 gap-2 lg:gap-5 xl:gap-5"
                  }
                >
                  {dataTenant.product.map((product, product_index) => {
                    return (
                      <div
                        className="bg-white text-center justify-self-center my-4"
                        key={product_index}
                      >
                        <div>
                          <div className="rounded-lg overflow-hidden shadow-md pt-6 w-72 md:w-72 lg:w-80 pb-4">
                            {product.promo !== null ? (
                              <>
                                <div className="sticky flex w-auto z-10 mr-3">
                                  <div className="absolute right-0 ">
                                    <div className="flex w-20 h-20 items-center justify-center absolute mr-4 right-0 z-20 mt-3 text-sm font-extrabold text-white">
                                      {product.promo_short}
                                    </div>
                                    <Image
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

                            <div className="flex justify-center items-center ">
                              <div className="lg:w-64 md:w-60 w-44">
                                <Image
                                  className="rounded-2xl object-cover"
                                  alt={product.productName}
                                  src={
                                    "/data/tenant/" +
                                    dataTenant.id_tenant +
                                    "/product/" +
                                    product.productImages
                                  }
                                  width="225"
                                  height="275"
                                />
                              </div>
                            </div>
                            <div className="px-6 py-2">
                              <div className="font-bold text-2xl pb-4 flex justify-center text-center">
                                {product.productName}
                              </div>
                            </div>
                            <span className="w-auto max-w-prose inline-block bg-gray-200 rounded-full px-8 py-4 text-sm font-semibold text-gray-700">
                              Bahan : {product.bahan}
                            </span>
                            <div className="font-bold py-5 text-2xl">
                              Rp{product.price}.000
                            </div>
                            <div className="space-x-3 py-4">
                              <a
                                href={
                                  dataTenant.pembayaran +
                                  "?text=Halo!%20" +
                                  dataTenant.tenantName +
                                  ",%20saya%20ingin%20membeli%20" +
                                  product.productName +
                                  "%20apakah%20masih+ada?%0aBagaimana%20caranya?"
                                }
                              >
                                <button className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-4 px-10 rounded-full">
                                  Beli
                                </button>
                              </a>
                              <button
                                className="bg-fgmYellow hover:bg-yellow-500 text-xl text-white font-bold py-4 px-10 rounded-full"
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
                                    dataTenant.pembayaran,
                                    dataTenant.tenantName,
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
          }
        })}
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
