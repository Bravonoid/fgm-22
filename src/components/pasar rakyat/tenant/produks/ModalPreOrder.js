import React, { Component } from "react";
import block1 from "../../../../assets/Pasar-Rakyat/produk/block1.svg";
import block2 from "../../../../assets/Pasar-Rakyat/produk/block2.svg";
import Slider from "react-slick";
const settings = {
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
};
export default class ModalPreOrder extends Component {
  render() {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-64 md:pt-10 pb-6">
          <div className="relative w-96 md:w-auto my-2 mx-auto max-w-xl md:max-w-4xl m-8">
            <div className="border-0 shadow-lg relative w-auto bg-white outline-none focus:outline-none mx-4 md:mx-2 px-4 md:px-16 mt-80">
            <img src={block1} alt="block" className="absolute left-0 top-0 z-0"/>
            <img src={block2} alt="block" className="absolute bottom-0 right-0 z-0"/>
            <button
                  className="absolute right-2 top-0 scale-150 text-red-500 font-bold uppercase text-sm"
                 
                  onClick={this.props.hide}
                >
                  X
                </button>
              <div className=" pt-24 flex justify-center text-center items-center text-3xl font-bold py-8 z-50 relative">
                {this.props.newProductName}
              </div>
              <div className="md:flex">
                <div>
                  <div className="text-center items-center justify-center px-5 border-b border-solid border-blueGray-200 rounded">
                    <div className="flex items-center justify-center content-center">
                      <div className="lg:w-64 md:w-60 w-44">
                      <Slider className="" {...settings}>
                      { this.props.newProductImagesArray.map((dataImage) => (
                        <>
                        <img
                          className="object-cover mb-8 z-50 relative"
                          alt={this.props.newProductName}
                          src={
                            "/data/tenantPreorder/" +
                            this.props.newId +
                            "/product/" +
                            dataImage
                          }
                          width="375"
                          height="500"
                        /></>
                      ) )}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:ml-10 relative flex-auto justify-center">
                    <div className="font-bold text-2xl pt-6 pb-6 text-center md:text-left">
                      Detail Produk
                    </div>
                    {/* <h2>
                          {this.props.newDescription !== null ? (
                            <>{this.props.newDescription+"."}</>
                          ) : (
                            "Tidak ada"
                          )}
                    </h2> */}
                    <table className="table-fixed text-left border-separate">
                      <thead>
                        <tr>
                          <th className="w-2/7 ..."></th>
                          <th className="w-1/7 ..."></th>
                          <th className="w-4/7 ..."></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Warna/Varian</td>
                          <td>: </td>
                          <td>
                            {this.props.newProductVarian !== null ? (
                              <>{this.props.newProductVarian + "."}</>
                            ) : (
                              "Tidak ada."
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Promo</td>
                          <td>: </td>
                          <td>
                            {this.props.newProductPromo !== null ? (
                              <>{this.props.newProductPromo + "."}</>
                            ) : (
                              "Tidak ada."
                            )}
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                    <div className="text-center md:text-left pt-8 font-bold text-2xl">
                      Rp{this.props.newProductPrice}.000
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              <div className="space-x-3 pb-32">
                              <a
                                href="https://formfaca.de/sm/zYgTo63cn"
                              >
                                <button className="bg-red-500 block mx-auto hover:bg-red-700 text-xl text-white font-bold py-4 px-10 rounded-full">
                                  Beli
                                </button>
                              </a>
                      </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  }
}
