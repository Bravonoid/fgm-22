import React, {useState} from 'react';
import festivalseni from "../../assets/festival-seni/festival_seni.svg";
import background from "../../assets/festival-seni/background.svg";
import pertunjukan from "../../assets/festival-seni/pertunjukan.svg";
import bintangtamu from "../../assets/festival-seni/bintang_tamu.svg";
import ukm from "../../assets/festival-seni/ukm.svg";
import background1 from "../../assets/festival-seni/buy_tiket_background.svg";
import btn from "../../assets/festival-seni/button.svg";
import pattern from "../../assets/festival-seni/background_pattern.svg";
import header from "../../assets/festival-seni/bintang_header.svg";
import olski_photo from "../../assets/festival-seni/olski.svg";
import guyon_waton_photo from "../../assets/festival-seni/guyon_waton.svg";
import ask from "../../assets/festival-seni/ask_me.svg";
import ukm1 from "../../assets/festival-seni/unit.svg";

const festival_seni = () => {
    return (
        <>
            <div className="h-[500px] bg-cover pt-16" style={{ backgroundImage: `url(${background})` }}>
                <div className="top-10  relative w-[475px]">
                    <div className="bg-[#202020] h-[100px] py-4 w-[475px] pl-20 text-[#FFFFFF]">
                        <img src={festivalseni} alt="festivalseni" className="w-[300px]"></img>
                        <p>26 November 2022 | Lapangan Pancasila UGM</p>
                    </div>
                    <div className="pl-20 pt-4 text-[#FFFFFF]">
                        <p className="underline text-bold text-4xl">PRADIKA AKSARA</p>
                        <p>Bermakna dengan merebaknya syair dalam pesta sebagai wujud kesatuan diversitas berkehidupan di nusantara yang selaras, senada, dan berdampingan</p>
                    </div>
                </div>
            </div>
            <div className="h-[700px] bg-[#242424] bg-cover block mx-auto" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="items-center flex flex-col relative top-10">
                   <img src={pertunjukan} alt="pertunjukan" className="w-auto"/>
                    <div className="flex flex-row gap-8 text-white justify-center">
                            <div className="text-left px-4 mt-20 h-[400px] w-2/5 border-8 border-white bg-cover" style={{ backgroundImage: `url(${bintangtamu})` }}>
                                {/* <img src={bintangtamu} alt="bintangtamu" className="w-[500px] absolute"/> */}
                                <p className="font-bold text-xl relative border-t-2 border-b-2 border-white mt-4 w-fit">BINTANG TAMU</p>
                                <p className="text-xl relative w-2/3">Turut dimeriahkan dengan adanya bintang tamu sebagai puncak penampilan</p>
                            </div>
                            <div className="text-left px-4 mt-20 border-8 w-2/5 border-white  bg-cover" style={{ backgroundImage: `url(${ukm})` }}>
                                {/* <img src={ukm} alt="ukm" className=" w-[500px] absolute" /> */}
                                <p className="font-bold text-xl text-right border-t-2 border-b-2 border-white mt-4 w-fit">UNIT KEGIATAN MAHASISWA</p>
                                <p className="text-xl relative w-4/5">Pertunjukan panggung hiburan tradisional yang dikemas secara modern sebagai wadah mahasiswa UGM dalam mengekspresikan bakatnya melalui seni pertunjukkan  </p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#242424] h-auto">
                <div className="items-center flex flex-col relative py-4 gap-2">
                    <img src={header} alt="header" className="w-auto"/>
                    <div className="flex flex-row gap-2 w-auto">
                        <img src={olski_photo} alt="olski_photo" className="w-auto"/>
                        <img src={guyon_waton_photo} alt="olski_photo" className="w-auto"/>
                        <img src={ask} alt="ask" className="w-auto"/>
                        <img src={ask} alt="ask" className="w-auto"/>
                        <img src={ask} alt="ask" className="w-auto"/>
                    </div>
                </div>
            </div>
            <div className="h-[500px] bg-[#242424]">
                <div className="items-center flex flex-col relative py-4 gap-2 top-10">
                    <img src={ukm1} alt="ukm header" className="w-auto"/>
                    <div className="bg-black flex flex-row gap-2 h-[150px] w-screen">
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                    </div>
                    <div className="bg-black flex flex-row gap-2 h-[150px] w-screen">
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                        <div className="bg-gray-600 w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300"></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#3E3E3E] h-[175px] bg-cover py-2">
                <img src={background1} alt="background1" className="absolute w-auto pt-4"/>
                <img src={btn} alt="button" className="relative block rounded-md mx-auto w-[300px] py-12 hover:scale-125 duration-300"/>
            </div>
        </>
    );
};

export default festival_seni;
