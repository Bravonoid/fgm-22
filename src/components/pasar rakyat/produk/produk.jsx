import React from "react";
import { useState } from "react";
import Popup from './Popup';
import './style.css';
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kembangputih1 from "../../../assets/Pasar-Rakyat/produk/kembangputih1.svg";
import kembangputih2 from "../../../assets/Pasar-Rakyat/produk/kembangputih2.svg";
import produk from "../../../assets/Pasar-Rakyat/produk/produk.svg";
import sort from "../../../assets/Pasar-Rakyat/produk/sort.svg";
import pattern from "../../../assets/Pasar-Rakyat/produk/bg-pattern.svg";
import produk2 from "../../../assets/Pasar-Rakyat/produk/produk2.svg";
import hiasan from "../../../assets/Pasar-Rakyat/produk/hiasan-kanan-pageproduk.svg";

const Pasar_rakyat = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="bg-[#171717] h-[600px]">
                <p className="text-white font-bold text-xs pt-24 pl-10">&#9664; Kategori</p>
                <div className=" pl-16 flex flex-row gap-12 relative top-20">
                    <div className="w-[300px] h-[300px] bg-slate-300 block">
                        <p className="mx-auto">Logo tenant</p>
                    </div>
                    <div className="flex flex-col w-1/3 gap-y-4">
                        <p className="font-bold text-4xl text-white">NAMA TENANT</p>
                        <p className="text-xl text-justify text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.</p>
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
                <img src={hiasan} alt="hiasan" className="relative ml-80 -bottom-6 -right-96"/>
            </div>
            <div className="block bg-[#202020] bg-cover" style={{backgroundImage: `url(${pattern}`}}>
                <div className="relative pt-20 mx-auto  flex justify-center items-center w-full text-left text-white">
                    <img src={produk2} alt="produk" className="relative top-0 left-0 w-full h-full object-cover" />
                    {/* <img src={kembangputih1} alt="kembangputih" className="hidden sm:block relative h-16 mr-10 mx-auto"/>
                    <img src={produk} alt="kembangputih" className="relative h-16 mx-auto"/>
                    <img src={kembangputih2} alt="kembangputih" className="hidden sm:block relative h-16 ml-10 mx-auto"/> */}
                </div>
                <div className="flex flex-row justify-center gap-x-4 my-20">
                <form className="2xl:w-1/4 xl:w-1/3 lg:w-1/2 w-4/5 h-12">
                    <input
                    id="search-tenant"
                    className="bg-fgmGray  focus:outline-none focus:ring-2 focus:ring-fgmRed w-full h-full px-8 text-fgmBlack"
                    placeholder="Nama Produk"
                    ></input>
                </form>
                    <img src={sort} alt="sort" className=""/>
                </div>
                <div className="container flex flex-row mx-auto text-white">
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949] hover:scale-125 duration-300" onClick={togglePopup}>
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    {isOpen && <Popup
                    content={<>
                        <div className="flex flex-col z-50">
                            <b className="text-black block text-center text-2xl">Nama Produk</b>
                            <div className="flex flex-row gap-x-8 justify-center">
                                <div className="flex flex-col z-50">
                                    <div className="bg-slate-300 w-[200px] h-[150px]"/>
                                    <div className="flex flex-row">
                                        <div className="bg-slate-400 w-[50px] h-[50px]"/>
                                        <div className="bg-slate-500 w-[50px] h-[50px]"/>
                                        <div className="bg-slate-600 w-[50px] h-[50px]"/>
                                        <div className="bg-slate-700 w-[50px] h-[50px]"/>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-black font-bold text-xl">Detail Produk</p>
                                    <p className="text-black">lorem ipsum</p>
                                    <p className="text-black">lorem ipsum</p>
                                    <p className="text-black">lorem ipsum</p>
                                    <div className="flex flex-row gap-x-3">
                                        <p className="text-black font-bold text-xl">Rp 89.000,00</p>
                                        <p className="bg-[#9C4A9A] px-2 text-center align-middle">PREORDER</p>
                                    </div>
                                    <p className="text-black font-bold text-xl">Rp 119.000,00</p>
                                </div>
                            </div>
                        </div>
                    </>}
                    handleClose={togglePopup}
                    />}
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 40.000,00</p>
                    </div>
                </div>
                <div className="container flex flex-row mx-auto mt-8 text-white">
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 25.000,00 | Preorder Rp 40.000,00</p>
                    </div>
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949]">
                        <div className="bg-slate-400 w-[300px] h-[300px]"/>
                        <p className="font-bold px-10 text-3xl">Nama Produk</p>
                        <p className="text-lg px-10">Rp 40.000,00</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#202020]">
                <button className="p-4 bg-[#EEEEEE] text-[#171717] font-Montserrat text-center font-bold m-4 hover:bg-[#171717] hover:text-[#EEEEEE]">PREORDER DISINI</button>
            </div>
        </>
    )
}
export default Pasar_rakyat;