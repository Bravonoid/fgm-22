import React from "react";
import BackgroundKembangKiri from "../../assets/tentang/background-kembang-kiri.svg";
import BackgroundKembangKanan from "../../assets/tentang/background-kembang-kanan.svg";

const Harapan = () => {
  return (
    <>
      <div className="flex h-[35vh] w-full bg-[#1E1E1E]">
        <img src={BackgroundKembangKiri} alt="" />
        <div className="container px-72 mx-auto">
          <h1 className="text-weight-700 mt-10 text-center text-3xl font-bold text-white">
            <span className="bg-[#242424] px-10">HARAPAN</span>
          </h1>
          <h2 className="text-weight-700 mt-4 text-center text-2xl text-white">
            Melalui sosok Cindaru, Festival Gadjah Mada 2022 diharapkan dapat
            menjadi simbol kebijaksanaan dan kekuatan masyarakat dalam
            mempertahankan keselarasan dalam kediversitasan budaya di Nusantara
          </h2>
        </div>
        <img src={BackgroundKembangKanan}  alt="" />
      </div>
    </>
  );
};

export default Harapan;