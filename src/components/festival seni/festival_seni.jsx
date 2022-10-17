import React, { useState } from "react";
import Slider from "react-slick";
import Slider1 from "react-slick";
import festivalseni from "../../assets/festival-seni/festival_seni.svg";
import background from "../../assets/festival-seni/background.svg";
import pertunjukan from "../../assets/festival-seni/pertunjukan.svg";
import bintangtamu from "../../assets/festival-seni/bintang_tamu.svg";
import ukm from "../../assets/festival-seni/ukm.png";
import background1 from "../../assets/festival-seni/buy_tiket_background.svg";
import btn from "../../assets/festival-seni/button.svg";
import pattern from "../../assets/festival-seni/background_pattern.svg";
import header from "../../assets/festival-seni/bintang_header.svg";
import olski_photo from "../../assets/festival-seni/olski.svg";
import guyon_waton_photo from "../../assets/festival-seni/guyon_waton.svg";
import smash from "../../assets/festival-seni/smash.svg";
import project_pop from "../../assets/festival-seni/project_pop.svg";
import the_overtunes from "../../assets/festival-seni/the_overtunes.svg";
import ask from "../../assets/festival-seni/ask_me.svg";
import ukm1 from "../../assets/festival-seni/unit.svg";
import ungu from "../../assets/festival-seni/kembang_ungu.svg";
import orange from "../../assets/festival-seni/kembang_orange.svg";
import write from "../../assets/festival-seni/tulisan.svg";
import pattern1 from "../../assets/festival-seni/pattern.svg";
import mobile1 from "../../assets/festival-seni/mobile1.svg";
import mobile2 from "../../assets/festival-seni/mobile2.svg";
import mobile3 from "../../assets/festival-seni/mobile3.svg";
import mobile4 from "../../assets/festival-seni/mobile4.svg";
import mobile5 from "../../assets/festival-seni/mobile5.svg";
import "./festival.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Coming from "../coming_soon.jsx";

const festival_seni = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const autoplay = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="content1"
        className="h-[500px] bg-cover pt-16 sm:bg-festival_md mobile:h-fit  mobile:bg-festival_mobile mobile:bg-cover"
      >
        <div className="top-10 mt-12 pb-8 sm:w-[575px]">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="h-auto bg-[#202020] py-4 text-[#FFFFFF] sm:w-[475px] sm:pl-20 mobile:w-4/5 mobile:pl-4"
          >
            <img
              src={festivalseni}
              alt="festivalseni"
              className="w-[300px] mobile:w-4/5"
            ></img>
            <p>26 November 2022 | Lapangan Pancasila UGM</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="pt-4 text-[#FFFFFF] sm:pl-20 mobile:px-4"
          >
            <img src={write} alt="write" className="mobile:hidden" />
            <div className="text-4xl font-bold underline sm:hidden">
              <p>PRADIKA</p>
              <p>PRASARA</p>
            </div>
            <p className="mt-2 w-full text-justify text-sm mobile:w-2/3">
              Berangkat dari bahasa Sanskerta, Padika yang berarti syair dan
              Prasara yang berarti merebak melambangkan Padika Prasara yang
              bermakna dengan merebaknya syair dalam pesta sebagai wujud
              kesatuan diversitas berkehidupan di nusantara yang selaras,
              senada, dan berdampingan. Padika Prasara menghadirkan pertunjukan
              panggung hiburan tradisional yang dikemas secara modern sebagai
              wadah mahasiswa UGM dalam mengekspresikan bakatnya melalui seni
              pertunjukkan. Padika Prasara akan turut dimeriahkan dengan adanya
              bintang tamu sebagai puncak penampilan.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto block h-[700px] bg-[#242424] bg-cover"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className="flex flex-col items-center pt-12 mobile:pt-2">
          <img
            src={pertunjukan}
            alt="pertunjukan"
            className="w-auto sm:hidden md:block mobile:hidden "
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-center"
          />
          <img
            src={mobile2}
            alt="bintangtamu"
            className="w-screen md:hidden mobile:block mobile:py-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-center"
          />
          <div className="flex-row gap-8 text-white sm:hidden md:mt-12 md:flex md:justify-center xl:mt-0 mobile:hidden">
            <div
              className="h-[400px] w-2/5 border-white bg-cover px-4 text-left sm:border-8 xl:mt-20 mobile:w-screen"
              style={{ backgroundImage: `url(${bintangtamu})` }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            >
              {/* <img src={orange} alt="orange" className="relative -top-12 -left-16 mobile:hidden"/> */}
              {/* <img src={bintangtamu} alt="bintangtamu" className="w-[500px] absolute"/> */}
              <p className="relative mt-4 w-fit border-t-2 border-b-2 border-white text-xl font-bold mobile:mt-8">
                BINTANG TAMU
              </p>
              <p className="relative w-2/3 text-xl">
                Turut dimeriahkan dengan adanya bintang tamu sebagai puncak
                penampilan
              </p>
            </div>
            <div
              className="h-[400px] w-2/5 border-white bg-cover px-4 sm:border-8  xl:mt-20 mobile:w-screen mobile:border-b-8"
              style={{ backgroundImage: `url(${ukm})` }}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            >
              {/* <img src={ukm} alt="ukm" claszName=" w-[500px] absolute" /> */}
              <p className="relative mt-4 w-fit border-t-2 border-b-2 border-white text-xl font-bold mobile:mt-8">
                UNIT KEGIATAN MAHASISWA
              </p>
              <p className="relative w-4/5 text-xl mobile:w-auto">
                Pertunjukan panggung hiburan tradisional yang dikemas secara
                modern sebagai wadah mahasiswa UGM dalam mengekspresikan
                bakatnya melalui seni pertunjukkan{" "}
              </p>
              {/* <img src={ungu} alt="orange" className="relative xl:-bottom-40 xl:-right-[525px] mobile:hidden sm:hidden md:block md:-right-60 md:-bottom-0"/> */}
            </div>
          </div>
        </div>
        <div
          className="mx-auto sm:block sm:w-2/3 md:hidden xl:hidden mobile:block mobile:w-2/3"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <Slider {...settings}>
            <>
              <div
                className="h-[400px] w-2/5 border-white bg-cover px-4 text-left text-white sm:w-fit sm:border-8 xl:mt-20 mobile:w-fit mobile:border-8"
                style={{ backgroundImage: `url(${bintangtamu})` }}
              >
                {/* <img src={orange} alt="orange" className="relative -top-12 -left-16 mobile:hidden"/> */}
                {/* <img src={bintangtamu} alt="bintangtamu" className="w-[500px] absolute"/> */}
                <p className="relative mt-2 w-fit border-t-2 border-b-2 border-white text-xl font-bold xl:-top-16 mobile:mt-8">
                  BINTANG TAMU
                </p>
                <p className="relative text-xl xl:-top-16">
                  Turut dimeriahkan dengan adanya bintang tamu sebagai puncak
                  penampilan
                </p>
              </div>
            </>
            <>
              <div
                className="h-[400px] w-2/5 border-white bg-cover px-4 text-white  sm:w-auto sm:border-8 xl:mt-20 mobile:w-fit mobile:border-8"
                style={{ backgroundImage: `url(${ukm})` }}
              >
                {/* <img src={ukm} alt="ukm" claszName=" w-[500px] absolute" /> */}
                <p className="relative mt-4 w-fit border-t-2 border-b-2 border-white text-xl font-bold mobile:mt-8 mobile:w-1/2">
                  UNIT KEGIATAN MAHASISWA
                </p>
                <p className="relative w-4/5 text-xl mobile:text-base">
                  Pertunjukan panggung hiburan tradisional yang dikemas secara
                  modern sebagai wadah mahasiswa UGM dalam mengekspresikan
                  bakatnya melalui seni pertunjukkan{" "}
                </p>
                {/* <img src={ungu} alt="orange" className="relative xl:-bottom-40 xl:-right-[525px] mobile:hidden sm:hidden md:block md:-right-60 md:-bottom-0"/> */}
              </div>
            </>
          </Slider>
        </div>
      </div>
      <div
        className="bg-[#242424]"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className="relative flex flex-col items-center gap-2 py-4 mobile:-top-40 mobile:justify-center">
          <img
            src={header}
            alt="header"
            className="w-auto sm:hidden md:block mobile:hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          />
          <img
            src={mobile3}
            alt="header"
            className="w-screen md:hidden mobile:block mobile:pt-12 mobile:pb-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          />
          <div className="flex w-auto gap-2 sm:flex-col md:mt-12 md:flex-row md:flex-wrap md:justify-center mobile:flex-col">
            <img
              src={olski_photo}
              alt="olski_photo"
              className="w-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            />
            <img
              src={guyon_waton_photo}
              alt="olski_photo"
              className="w-auto"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            />
            <img
              src={the_overtunes}
              alt="the overtunes"
              className="w-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            />
            <img
              src={smash}
              alt="smash"
              className="w-auto"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            />
            <img
              src={project_pop}
              alt="project pop"
              className="w-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-2 bg-[#242424] py-4 mobile:top-0">
        <img
          src={ukm1}
          alt="ukm header"
          className="w-auto sm:hidden md:mb-12 md:block mobile:hidden "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        />
        <img
          src={mobile4}
          alt="ukm header"
          className="w-screen md:hidden mobile:block"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        />
      </div>
      <div
        className="h-[500px] bg-[#242424] bg-cover sm:h-[600px] mobile:h-[800px]"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        {/* <Slider {... autoplay} className="w-11/12 block mx-auto h-[400px] px-4 mobile:w-5/6">
                        <div className="px-4">
                        <div className="bg-[#818181] w-auto h-[300px] hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        </div>
                        <div className="px-4">
                        <div className="bg-[#818181] w-auto h-[300px] hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        </div>
                        <div className="px-4">
                        <div className="bg-[#818181] w-auto h-[300px] hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        </div>
                        <div className="px-4">
                        <div className="bg-[#818181] w-auto h-[300px] hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        </div>
                        <div className="px-4">
                        <div className="bg-[#818181] w-auto h-[300px] hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        </div>
                        <div className="px-4">
                        <div className="bg-[#818181] w-auto h-[300px] hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        </div>
                    </Slider> */}
        <div
          className="relative top-10 flex flex-col items-center justify-center gap-2 py-4 mobile:top-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <Coming />          {/* <img src={ukm1} alt="ukm header" className="w-auto mobile:hidden sm:hidden md:block md:mb-12"/>
                    <img src={mobile4} alt="ukm header" className="w-screen mobile:block md:hidden"/> */}
          {/* <p className="mt-16 font-Montserrat text-6xl font-bold text-white mobile:hidden">
            C<span className="text-[#E62C20]">O</span>MING S
            <span className="text-[#4A8068]">O</span>
            <span className="text-[#9C4A9A]">O</span>N
          </p>
          <img src={pattern1} alt="pattern1" className="w-auto mobile:hidden" />
          <img
            src={mobile5}
            alt="pattern1"
            className="w-auto pt-2 xl:hidden mobile:block"
          /> */}
          {/* <>
                    <div id="carousel1" className="bg-black flex flex-row gap-2 h-[150px] w-screen">
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                    </div>
                    </>
                    <>
                    <div id="carousel1" className="bg-black flex flex-row gap-2 h-[150px] w-screen">
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                        <div className="bg-[#818181] w-full h-full hover:scale-110 duration-300 ease-out hover:bg-gray-300 flex justify-end flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="font-bold text-white pl-2 align-center">Nama</p>
                                <div className="bg-white h-4 w-2/3 pl-2"/>
                            </div>
                        </div>
                    </div>
                    </> */}
        </div>
      </div>
      <div
        className="h-auto bg-[#3E3E3E] bg-cover py-2"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <Link
          to="/tiket"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img
            src={btn}
            alt="button"
            className="relative mx-auto my-12 block w-[300px] scale-125 transition-all duration-300 ease-out hover:translate-y-1 hover:scale-[1.5]  hover:shadow-[9px_9px_0_rgb(255,255,255)] mobile:scale-100"
          />
        </Link>
      </div>
    </>
  );
};

export default festival_seni;
