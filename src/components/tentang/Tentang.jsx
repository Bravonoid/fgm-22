import React from "react";
import KembangLogo from "../../assets/tentang/kembang-tentang.svg";
import Logo from "../../assets/tentang/logo-tentang.svg";
import KembangLogoBawah from "../../assets/tentang/kembang-tentang-bawah.svg";
import KembangLogoBawahMobile from "../../assets/tentang/kembang-tentang-bawah-mobile.svg";
import TextFGM from "../../assets/tentang/text-fgm.svg";

const Tentang = () => {
  return (
    <div className="items-center bg-[#171717] pb-[10rem] lg:pb-[25rem]">
      <div className="relative sm:top-24 sm:-right-4 sm:mx-auto sm:grid sm:grid-cols-3 xl:top-48 mobile:top-0 mobile:flex mobile:flex-col">
        <div className="col-span-1 mt-8 flex items-center justify-center lg:mt-12 mobile:mt-32">
          <img
            src={Logo}
            className="sm:scale-[175%] lg:scale-[225%] mobile:scale-125"
            alt="logo"
          />
        </div>
        <div className="items-left relative col-span-2 mx-10 mr-24 text-left xl:w-3/4 text-white sm:my-5 mobile:mx-10 mobile:mt-12 mobile:text-base">
          <img src={KembangLogo} className="" alt="tema-besar" />
          <img src={TextFGM} className="mt-3" alt="tema-besar" />
          <p className="mt-5 mb-5 text-lg text-justify mobile:text-base hidden sm:flex">
            Festival Gadjah Mada atau FGM merupakan sebuah acara apresiasi seni
            tahunan yang diselenggarakan di bawah kepengurusan BEM KM UGM yang
            diprakarsai oleh Kementerian Kreasi BEM KM UGM. Festival Gadjah Mada
            diselenggarakan sebagai penutup sekaligus puncak perjalanan dari
            “Kabinet Pijaraya”, BEM KM UGM 2022. Dalam pelaksanaannya, FGM akan
            melibatkan relawan dari kalangan mahasiswa UGM. Pada tahun ini,
            Festival Gadjah Mada menyajikan kreasi budaya dan seni tradisional
            melalui pengemasan yang modern serta akan disemarakkan melalui
            berbagai rangkaian acaranya, yaitu Pentas Teater ‘Wirama Bhatara
            Kertagama’ yang akan diselenggarakan pada tanggal 18 November 2022
            di Taman Budaya Yogyakarta, dan Festival Seni ‘Padika Prasara’ yang
            digelar bersamaan dengan Pasar Rakyat ‘Prapti Hita Abhipraya
            Jagaddhita’ pada tanggal 26 November 2022 di Lapangan Pancasila
            Universitas Gadjah Mada.
          </p>
          <p className="mt-5 mb-5 text-lg text-justify mobile:text-base flex sm:hidden">
          Festival Gadjah Mada atau FGM merupakan sebuah acara apresiasi seni
            tahunan yang diselenggarakan di bawah kepengurusan BEM KM UGM yang
            diprakarsai oleh Kementerian Kreasi BEM KM UGM. Pada tahun ini,
            Festival Gadjah Mada menyajikan kreasi budaya dan seni tradisional
            melalui pengemasan yang modern serta akan disemarakkan melalui
            berbagai rangkaian acaranya, yaitu Pentas Teater ‘Wirama Bhatara
            Kertagama’ dan Festival Seni ‘Padika Prasara’ serta Pasar Rakyat ‘Prapti Hita Abhipraya
            Jagaddhita’.
          </p>
          <a href="#tema">
            <button class="mr-5 rounded bg-[#4A8068] py-2 px-6 font-Montserrat text-lg text-[#EEEEEE] hover:bg-[#2E5343] hover:px-[1.36rem] hover:font-bold mobile:mr-3 mobile:px-3 mobile:text-base">
              Tema Besar
            </button>
          </a>
          <a href="#maskot">
            <button class="rounded bg-[#9C4A9A] py-2 px-6 font-Montserrat text-lg text-[#EEEEEE] hover:bg-[#693268] hover:px-[1.4rem]  hover:font-bold mobile:px-3 mobile:text-base">
              Cindaru
            </button>
          </a>
        </div>
      </div>
      <img
        src={KembangLogoBawah}
        className="absolute -bottom-[10rem] right-0 hidden scale-75 overflow-hidden md:mr-[-2rem] md:block lg:right-0 lg:mr-[0] lg:scale-100"
        alt="tema-besar"
      />
      <img
        src={KembangLogoBawahMobile}
        className="absolute right-0 mt-10 sm:mt-[6rem] md:hidden"
        alt="tema-besar"
      />
    </div>
  );
};

export default Tentang;
