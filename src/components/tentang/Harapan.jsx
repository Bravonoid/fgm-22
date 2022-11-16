import React from "react";
import BackgroundKembangKiri from "../../assets/tentang/background-kembang-kiri.svg";
import BackgroundKembangKanan from "../../assets/tentang/background-kembang-kanan.svg";
import KembangHarapanMobile from "../../assets/tentang/kembang-harapan-mobile.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Harapan = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="flex w-full bg-[#171717] md:py-10 xl:py-0 mobile:py-12">
        <div>
          <img
            src={BackgroundKembangKiri}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset={window.innerHeight * 0.51}
            className="hidden xl:flex"
            alt=""
          />
        </div>
        <div className="container mx-auto px-10 xl:w-2/3 xl:px-32 items-center justify-center text-center relative xl:pt-16">
          <div>
            <h1
              className="text-weight-700 text-center text-3xl font-bold text-white"
              data-aos="fade-down"
              data-aos-offset="700"
              data-aos-duration="1500"
            >
              <span className="bg-[#242424] px-10">HARAPAN</span>
            </h1>
            <h2
              className="text-weight-700 mt-4 text-right text-base text-white md:text-center md:text-2xl"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-offset='700'
            >
              Melalui sosok Cindaru, Festival Gadjah Mada 2022 diharapkan dapat
              menjadi <span className="font-bold">simbol kebijaksanaan</span>{" "}
              dan <span className="font-bold">kekuatan</span> masyarakat dalam
              mempertahankan <span className="font-bold">keselarasan</span>{" "}
              dalam diversitas budaya di Nusantara.
            </h2>
          </div>
        </div>
        <div>
          <img
            src={BackgroundKembangKanan}
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-offset={window.innerHeight * 0.51}
            className="hidden xl:flex"
            alt=""
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="700"
        className="flex w-full items-center justify-center bg-[#171717] md:hidden"
      >
        <img src={KembangHarapanMobile} className="flex" alt="" />
      </div>
    </>
  );
};

export default Harapan;
