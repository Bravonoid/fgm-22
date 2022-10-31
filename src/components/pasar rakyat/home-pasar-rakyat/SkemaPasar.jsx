import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TeksSkemaPasar from "../../../assets/Pasar-Rakyat/home-pasar/teks-skema-pasar-mobile.svg";
import TeksSkema from "../../../assets/Pasar-Rakyat/home-pasar/teks-skema-pasar.svg";
import Coming from "../../../components/coming_soon.jsx";
import BGPattern from "../../../assets/Pasar-Rakyat/home-pasar/bg-pasar.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SkemaPasar = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();
  const [number, setNumber] = useState("1");

  const handleTrailer = () => {
    setNumber("3");
  };

  const navigate = useNavigate();

  const toTenant = () => {
    navigate("/pasar-rakyat/tenant", { state: { handleTrailer } });
  };
  return (
    <>
      <div
        className="bg-[#202020] bg-contain bg-repeat py-10"
        style={{ backgroundImage: `url(${BGPattern})` }}
      >
        <img
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="1100"
          src={TeksSkema}
          className="mx-auto hidden md:block"
          alt=""
        />
        <img
          src={TeksSkemaPasar}
          className="mx-auto md:hidden"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="2100"
          alt=""
        />
        <div
          className="hidden px-5 md:block"
          data-aos="slide-right"
          data-aos-duration="1300"
          data-aos-offset="1100"
        >
          <Link to="/pasar-rakyat/tenant/1">
            <div
              onClick={(e) => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                toTenant();
              }}
              className="mx-auto mt-10 h-[100px] w-[1013px] border bg-mask-makanan transition-all ease-linear hover:cursor-pointer hover:bg-[#4A8068] hover:bg-mask-makanan-hover"
            >
              <p className="font-montserrat inline-block p-8 align-middle text-3xl font-black text-[#EEEEEE]">
                MAKANAN
              </p>
            </div>
          </Link>
          <Link to="/pasar-rakyat/tenant/2">
            <div
              onClick={(e) => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto h-[100px] w-[1013px] border bg-mask-minuman transition-all ease-linear hover:cursor-pointer hover:bg-[#E62C20] hover:bg-mask-minuman-hover"
            >
              <p className="font-montserrat p-8 text-3xl font-black text-[#EEEEEE]">
                MINUMAN
              </p>
            </div>
          </Link>
          <Link to="/pasar-rakyat/tenant/3">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto h-[100px] w-[1013px] border bg-mask-aksesoris transition-all ease-linear hover:cursor-pointer hover:bg-[#9C4A9A] hover:bg-mask-aksesoris-hover "
            >
              <p className="font-montserrat p-8 text-3xl font-black text-[#EEEEEE]">
                AKSESORIS
              </p>
            </div>
          </Link>
          <Link to="/pasar-rakyat/tenant/4">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto h-[100px] w-[1013px] border bg-mask-pakaian transition-all ease-linear hover:cursor-pointer hover:bg-[#F69722] hover:bg-mask-pakaian-hover "
            >
              <p className="font-montserrat p-8 text-3xl font-black text-[#EEEEEE]">
                PAKAIAN
              </p>
            </div>
          </Link>
        
        </div>
        <div
          data-aos="slide-right"
          data-aos-duration="1500"
          data-aos-offset="2100"
          className="md:hidden"
        >
          <Link to="/pasar-rakyat/tenant/1">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto mt-10 h-[100px] w-[242px] border bg-[#4A8068] bg-opacity-40 bg-mask-makanan-mobile transition-all ease-linear hover:cursor-pointer"
            >
              <p className="font-montserrat inline-block py-8 px-5 align-middle text-xl font-black text-[#EEEEEE]">
                MAKANAN
              </p>
            </div>
          </Link>
          <Link to="/pasar-rakyat/tenant/2">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto h-[100px] w-[242px] border bg-[#E62C20] bg-opacity-40 bg-mask-minuman-mobile transition-all ease-linear hover:cursor-pointer"
            >
              <p className="font-montserrat py-8 px-5 text-xl font-black text-[#EEEEEE]">
                MINUMAN
              </p>
            </div>
          </Link>
          <Link to="/pasar-rakyat/tenant/3">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto h-[100px] w-[242px] border bg-[#9C4A9A] bg-opacity-40 bg-mask-aksesoris-mobile transition-all ease-linear hover:cursor-pointer"
            >
              <p className="font-montserrat py-8 px-5 text-xl font-black text-[#EEEEEE]">
                AKSESORIS
              </p>
            </div>
          </Link>
          <Link to="/pasar-rakyat/tenant/4">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="mx-auto  h-[100px] w-[242px] border bg-[#F69722] bg-opacity-40 bg-mask-pakaian-mobile transition-all ease-linear hover:cursor-pointer"
            >
              <p className="font-montserrat py-8 px-5 text-xl font-black text-[#EEEEEE]">
                PAKAIAN
              </p>
            </div>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default SkemaPasar;
