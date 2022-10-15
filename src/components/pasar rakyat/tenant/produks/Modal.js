import React, { Component } from "react";


export default class Modal extends Component {
  render() {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-64 md:pt-10 pb-3">
          <div className="relative w-96 md:w-auto my-2 mx-auto max-w-xl md:max-w-4xl m-8">
            <div className="border-0 shadow-lg relative w-auto bg-white outline-none focus:outline-none mx-4 md:mx-2 px-4 md:px-16 rounded-3xl">
              <div className="flex justify-center text-center items-center text-3xl font-bold py-8">
                {this.props.newProductName}
              </div>
              <div className="md:flex">
                <div>
                  <div className="text-center items-center justify-center px-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div className="flex items-center justify-center content-center">
                      <div className="lg:w-64 md:w-60 w-44">
                        <img
                          className="rounded-2xl object-cover"
                          alt={this.props.newProductName}
                          src={
                            "/data/tenant/" +
                            this.props.newId +
                            "/product/" +
                            this.props.newProductImages
                          }
                          width="375"
                          height="500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:ml-10 relative flex-auto justify-center">
                    <div className="font-bold text-2xl pt-6 pb-6 text-center md:text-left">
                      Detail Produk
                    </div>
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
                            {this.props.newProductColor !== null ? (
                              <>{this.props.newProductColor + "."}</>
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
                        <tr>
                          <td>Dimensi</td>
                          <td>: </td>
                          <td>
                            {this.props.newProductDimension !== null ? (
                              <>{this.props.newProductDimension + "."}</>
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
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={this.props.hide}
                >
                  Close
                </button>
                <a
                  href={
                    this.props.newPembayaran +
                    "?text=Halo!%20" +
                    this.props.newTenantName +
                    ",%20saya%20ingin%20membeli%20" +
                    this.props.newProductName +
                    "%20apakah%20masih+ada?%0aBagaimana%20caranya?"
                  }
                >
                  <button
                    type="button"
                    className="bg-red-500 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
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
