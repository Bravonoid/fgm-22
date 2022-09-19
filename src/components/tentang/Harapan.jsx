import React from "react";
import BackgroundKembangKiri from "../../assets/tentang/background-kembang-kiri.svg";
import BackgroundKembangKanan from "../../assets/tentang/background-kembang-kanan.svg";
import KembangHarapanMobile from "../../assets/tentang/kembang-harapan-mobile.svg";

const Harapan = () => {
  return (
    <>
      <div className="flex h-[50vh] w-full bg-[#1E1E1E] md:h-[40vh] mobile:pt-10">
        <img src={BackgroundKembangKiri} className="hidden md:flex" alt="" />
        <div className="container mx-auto px-10 md:px-32">
          <h1 className="text-weight-700 mt-10 text-center text-3xl font-bold text-white">
            <span className="bg-[#242424] px-10">HARAPAN</span>
          </h1>
          <h2 className="text-weight-700 mt-4 md:text-center text-right text-base md:text-2xl text-white">
            Melalui sosok Cindaru, Festival Gadjah Mada 2022 diharapkan dapat
            menjadi simbol kebijaksanaan dan kekuatan masyarakat dalam
            mempertahankan keselarasan dalam kediversitasan budaya di Nusantara
          </h2>
        </div>
        <img src={BackgroundKembangKanan} className="hidden md:flex" alt="" />
      </div>
      <div className="flex h-[30vh] md:hidden items-center justify-center w-full bg-[#1E1E1E]">
      <img src={KembangHarapanMobile} className="md:hidden flex" alt="" />
      </div>
    </>
  );
};

export default Harapan;
