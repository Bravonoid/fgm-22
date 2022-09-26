import React from "react";
import BackgroundKembangKiri from "../../assets/tentang/background-kembang-kiri.svg";
import BackgroundKembangKanan from "../../assets/tentang/background-kembang-kanan.svg";
import KembangHarapanMobile from "../../assets/tentang/kembang-harapan-mobile.svg";

const Harapan = () => {
  return (
    <>
      <div className="flex w-full bg-[#171717] md:pb-10 xl:pb-0 mobile:pt-1">
        <img src={BackgroundKembangKiri} className="hidden xl:flex" alt="" />
        <div className="container mx-auto xl:w-2/3 xl:px-32 xl:pt-5">
          <h1 className="text-weight-700 mt-10 text-center text-3xl font-bold text-white">
            <span className="bg-[#242424] px-10">HARAPAN</span>
          </h1>
          <h2 className="text-weight-700 mt-4 text-right text-base text-white md:text-center md:text-2xl">
            Melalui sosok Cindaru, Festival Gadjah Mada 2022 diharapkan dapat
            menjadi <span className="font-bold">simbol kebijaksanaan</span> dan{" "}
            <span className="font-bold">kekuatan</span> masyarakat dalam
            mempertahankan <span className="font-bold">keselarasan</span> dalam
            kediversitasan budaya di Nusantara
          </h2>
        </div>
        <img src={BackgroundKembangKanan} className="hidden xl:flex" alt="" />
      </div>
      <div className="flex w-full items-center justify-center bg-[#171717] md:hidden">
        <img src={KembangHarapanMobile} className="flex" alt="" />
      </div>
    </>
  );
};

export default Harapan;
