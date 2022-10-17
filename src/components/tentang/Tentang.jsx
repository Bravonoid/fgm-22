import React from "react";
import KembangLogo from "../../assets/tentang/kembang-tentang.svg";
import Logo from "../../assets/tentang/logo-tentang.svg";
import KembangLogoBawah from "../../assets/tentang/kembang-tentang-bawah.svg";
import KembangLogoBawahMobile from "../../assets/tentang/kembang-tentang-bawah-mobile.svg";
import TextFGM from "../../assets/tentang/text-fgm.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <div className="items-center bg-[#171717] py-36 md:py-28">
      <div className="relative sm:mx-auto sm:grid sm:grid-cols-3 mobile:flex mobile:flex-col">
        <div
          className="col-span-1 flex items-center justify-center"
          data-aos="fade-down"
          data-aos-duration="1800"
        >
          <img
            src={Logo}
            className="sm:scale-[175%] lg:scale-[225%] mobile:scale-125"
            alt="logo"
          />
        </div>
        <div
          className="items-left relative col-span-2 mx-10 mr-24 text-left text-white sm:my-5 xl:w-3/4 mobile:mx-10 mobile:mt-12 mobile:text-base"
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          <img src={KembangLogo} className="" alt="tema-besar" />
          <img src={TextFGM} className="mt-3" alt="tema-besar" />
          <p className="mt-5 mb-5 hidden text-justify text-lg sm:flex xl:text-xl mobile:text-base">
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
          <p className="mt-5 mb-5 flex text-justify text-lg sm:hidden mobile:text-base">
            Festival Gadjah Mada atau FGM merupakan sebuah acara apresiasi seni
            tahunan yang diselenggarakan di bawah kepengurusan BEM KM UGM yang
            diprakarsai oleh Kementerian Kreasi BEM KM UGM. Pada tahun ini,
            Festival Gadjah Mada menyajikan kreasi budaya dan seni tradisional
            melalui pengemasan yang modern serta akan disemarakkan melalui
            berbagai rangkaian acaranya, yaitu Pentas Teater ‘Wirama Bhatara
            Kertagama’ dan Festival Seni ‘Padika Prasara’ serta Pasar Rakyat
            ‘Prapti Hita Abhipraya Jagaddhita’.
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
      <div
        className="relative bottom-48"
        data-aos="fade-up-left"
        data-aos-duration="1800"
      >
        <img
          src={KembangLogoBawah}
          className="absolute -right-10 hidden scale-75 overflow-hidden lg:block xl:-right-0 xl:scale-[105%]"
          alt="tema-besar"
        />
      </div>
      <img
        src={KembangLogoBawahMobile}
        className="absolute right-0 mt-10 lg:hidden"
        alt="tema-besar"
      />
    </div>
  );
};

export default Tentang;
