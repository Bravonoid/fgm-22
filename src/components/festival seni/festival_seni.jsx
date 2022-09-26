import React, {useState} from 'react';
import SmartSlider from "react-smart-slider";
import Slider from "react-slick";
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
// const DummyCaption = ({ caption }) => (
//     <div style={{
//       position: 'absolute',
//       right: 100,
//       top: 250,
//       fontSize: 38,
//       padding: 55,
//       border: 'solid 1px',
//     }}>
//       {caption}
//     </div>
//   )

const festival_seni = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    // const slidesArray = [
    //     {
    //         url: "assets/festival-seni/bintang_tamu.png",
    //         // (Optional) Set if you want to add any content on your slide
    //         childrenElem: <DummyCaption className="bg-black" caption="Caption 2" />
    //       },
    //       {
    //         url: "https://i.imgur.com/E8gkF2f.jpg",
    //         childrenElem: <DummyCaption caption="Caption 2" />
    //       },
    //   ];
    return (
        <>
            {/* <SmartSlider
                slides={slidesArray}"
                buttonShape="round" // round or square
            /> */}
           
            <div id="content1" className="h-[500px] bg-cover mobile:bg-auto pt-16 mobile:h-[700px]" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
                <div className="top-10 mt-12 mobile:relative xl:w-[475px]">
                    <div className="bg-[#202020] h-auto py-4 sm:w-[475px] sm:pl-20 text-[#FFFFFF] mobile:w-4/5 mobile:pl-4">
                        <img src={festivalseni} alt="festivalseni" className="w-[300px] mobile:w-4/5"></img>
                        <p>26 November 2022 | Lapangan Pancasila UGM</p>
                    </div>
                    <div className="sm:pl-20 pt-4 text-[#FFFFFF] mobile:pl-4">
                        <img src={write} alt="write" className="mobile:hidden"/>
                        <div className='font-bold text-4xl underline sm:hidden'>
                            <p>PRADIKA</p>
                            <p>PRASARA</p>
                        </div>
                        <p className="w-2/3 mobile:mt-2">Bermakna dengan merebaknya syair dalam pesta sebagai wujud kesatuan diversitas berkehidupan di nusantara yang selaras, senada, dan berdampingan</p>
                    </div>
                </div>
            </div>
            <div className="h-[700px] bg-[#242424] bg-cover block mx-auto" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="items-center flex flex-col pt-12 mobile:pt-2">
                   <img src={pertunjukan} alt="pertunjukan" className="w-auto mobile:hidden sm:hidden md:block "/>
                   <img src={mobile2} alt="bintangtamu" className="w-screen mobile:block mobile:py-4 md:hidden"/>
                    <div className="md:flex flex-row gap-8 text-white md:justify-center mobile:hidden sm:hidden md:mt-12 xl:mt-0">
                        <div className="text-left px-4 xl:mt-20 h-[400px] w-2/5 sm:border-8 border-white bg-cover mobile:w-screen" style={{ backgroundImage: `url(${bintangtamu})` }}>
                            {/* <img src={orange} alt="orange" className="relative -top-12 -left-16 mobile:hidden"/> */}
                            {/* <img src={bintangtamu} alt="bintangtamu" className="w-[500px] absolute"/> */}
                            <p className="font-bold text-xl mt-4 relative border-t-2 border-b-2 border-white w-fit mobile:mt-8">BINTANG TAMU</p>
                            <p className="text-xl relative w-2/3">Turut dimeriahkan dengan adanya bintang tamu sebagai puncak penampilan</p>
                        </div>
                         <div className="px-4 xl:mt-20 sm:border-8 h-[400px] w-2/5 border-white  bg-cover mobile:w-screen mobile:border-b-8" style={{ backgroundImage: `url(${ukm})` }}>
                             {/* <img src={ukm} alt="ukm" claszName=" w-[500px] absolute" /> */}
                            <p className="font-bold text-xl border-t-2 border-b-2 border-white mt-4 w-fit relative mobile:mt-8">UNIT KEGIATAN MAHASISWA</p>
                            <p className="text-xl relative w-4/5 mobile:w-auto">Pertunjukan panggung hiburan tradisional yang dikemas secara modern sebagai wadah mahasiswa UGM dalam mengekspresikan bakatnya melalui seni pertunjukkan  </p>
                            {/* <img src={ungu} alt="orange" className="relative xl:-bottom-40 xl:-right-[525px] mobile:hidden sm:hidden md:block md:-right-60 md:-bottom-0"/> */}
                        </div>
                    </div>
                </div>
                <div className="xl:hidden mobile:block mobile:w-2/3 sm:w-2/3 mx-auto sm:block md:hidden">
                    <Slider {... settings}>
                        <>
                            <div className="text-left px-4 xl:mt-20 h-[400px] w-2/5 sm:border-8 border-white bg-cover mobile:w-screen" style={{ backgroundImage: `url(${bintangtamu})` }}>
                                {/* <img src={orange} alt="orange" className="relative -top-12 -left-16 mobile:hidden"/> */}
                                {/* <img src={bintangtamu} alt="bintangtamu" className="w-[500px] absolute"/> */}
                                <p className="font-bold text-xl mt-2 relative xl:-top-16 border-t-2 border-b-2 border-white w-fit mobile:mt-8">BINTANG TAMU</p>
                                <p className="text-xl relative xl:-top-16 w-2/3">Turut dimeriahkan dengan adanya bintang tamu sebagai puncak penampilan</p>
                            </div>
                            </>
                            <>
                            <div className="px-4 xl:mt-20 sm:border-8 h-[400px] w-2/5 border-white  bg-cover mobile:w-screen" style={{ backgroundImage: `url(${ukm})` }}>
                                {/* <img src={ukm} alt="ukm" claszName=" w-[500px] absolute" /> */}
                                <p className="font-bold text-xl border-t-2 border-b-2 border-white mt-4 w-fit relative mobile:mt-8">UNIT KEGIATAN MAHASISWA</p>
                                <p className="text-xl relative w-4/5 mobile:w-auto">Pertunjukan panggung hiburan tradisional yang dikemas secara modern sebagai wadah mahasiswa UGM dalam mengekspresikan bakatnya melalui seni pertunjukkan  </p>
                                {/* <img src={ungu} alt="orange" className="relative xl:-bottom-40 xl:-right-[525px] mobile:hidden sm:hidden md:block md:-right-60 md:-bottom-0"/> */}
                            </div>
                            </>
                        
                    </Slider>
                </div>
            </div>
            <div className="bg-[#242424]">
                <div className="items-center flex flex-col py-4 gap-2 relative mobile:-top-40 mobile:justify-center">
                    <img src={header} alt="header" className="w-auto mobile:hidden sm:hidden md:block"/>
                    <img src={mobile3} alt="header" className="w-screen mobile:block mobile:pt-12 mobile:pb-2 md:hidden"/>
                    <div className="flex md:flex-row gap-2 w-auto mobile:flex-col sm:flex-col md:mt-12 md:flex-wrap md:justify-center">
                        <img src={olski_photo} alt="olski_photo" className="w-auto"/>
                        <img src={guyon_waton_photo} alt="olski_photo" className="w-auto"/>
                        <img src={ask} alt="ask" className="w-auto"/>
                        <img src={ask} alt="ask" className="w-auto"/>
                        <img src={ask} alt="ask" className="w-auto"/>
                    </div>
                </div>
            </div>
            <div className="h-[500px] bg-[#242424] mobile:h-[800px] sm:h-[700px]" style={{backgroundImage: `url(${pattern})`}}>
                <div className="items-center flex flex-col py-4 gap-2 top-10 justify-center relative mobile:top-0">
                    <img src={ukm1} alt="ukm header" className="w-auto mobile:hidden sm:hidden md:block md:mb-12"/>
                    <img src={mobile4} alt="ukm header" className="w-screen mobile:block md:hidden"/>
                    {/* <p className="font-Montserrat text-white text-6xl font-bold mt-16 mobile:hidden">C<span className="text-[#E62C20]">O</span>MING S<span className="text-[#4A8068]">O</span><span className="text-[#9C4A9A]">O</span>N</p>
                    <img src={pattern1} alt="pattern1" className="w-auto mobile:hidden"/>
                    <img src={mobile5} alt="pattern1" className="w-auto mobile:block xl:hidden pt-2"/> */}
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
                </div>
            </div>
             <div className="bg-[#3E3E3E] h-auto py-2">
                <img src={background1} alt="background1" className="absolute w-auto pt-4"/>
                <img src={btn} alt="button" className="relative block rounded-md mx-auto w-[300px] py-12 hover:scale-125 duration-300"/>
            </div>
        </>
    );
};

export default festival_seni;
