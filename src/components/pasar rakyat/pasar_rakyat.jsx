import React from "react";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pasar_rakyat = () => {
    return (
        <>
            <div className="bg-slate-500 h-[500px]">
                <p className="text-white font-bold text-xs pt-24 pl-10">&#9664; Kategori</p>
                <div className="container pl-16 flex flex-row gap-8 relative top-20">
                    <div className="w-[200px] h-[200px] bg-slate-300">
                        <p className="align-middle my-auto block">Logo tenant</p>
                    </div>
                    <div className="flex flex-col w-1/3 gap-y-4">
                        <p className="font-bold text-3xl text-white">NAMA TENANT</p>
                        <p className="text-base text-justify text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.</p>
                        <div className="flex flex-row gap-4">
                            <FontAwesomeIcon
										icon={faInstagram}
										size="2x"
										color="white"
										className="h-5 transition-colors group-hover:text-yellow-500 lg:h-6"
									></FontAwesomeIcon>{" "}
                            <FontAwesomeIcon
										icon={faWhatsapp}
										size="2x"
										color="white"
										className="h-5 transition-colors group-hover:text-yellow-500 lg:h-6"
									></FontAwesomeIcon>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="flex flex-col my-10">
                    <p className="font-bold text-center text-2xl">Produk</p>
                    <input type="text" className="border-2 border-black mx-auto w-1/4" placeholder="Nama Tenant"/>
                </div>
                <div className="container flex flex-row mx-auto">
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 40.000,00</p>
                    </div>
                </div>
                <div className="container flex flex-row mx-auto mt-8">
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold text-center text-lg">Nama Produk</p>
                        <p className="text-lg">Rp 40.000,00</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <button className="p-4 bg-slate-500 text-center font-bold m-4">PREORDER DISINI</button>
            </div>
        </>
    )
}
export default pasar_rakyat;