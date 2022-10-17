import TeksInfografisMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-infografis-mobile.svg";
import KontenInfografisMobile from "../../../assets/Pasar-Rakyat/home-pasar/konten-infografis-mobile.svg";
import TeksInfografis from "../../../assets/Pasar-Rakyat/home-pasar/teks-infografis.svg";
import KontenInfografis from "../../../assets/Pasar-Rakyat/home-pasar/konten-infografis.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Infografis = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-[#202020] py-5 pb-12">
        <img data-aos="zoom-in" data-aos-duration="1500" data-aos-offset='400' src={TeksInfografis} className="mx-auto hidden md:block" alt="" />
        <img data-aos="zoom-in" data-aos-duration="1500" data-aos-offset='500'
          src={KontenInfografis}
          className="mx-auto hidden py-5 md:block"
          alt=""
        />
        <img data-aos="fade-up" data-aos-duration="1500" src={TeksInfografisMobile} className="mx-auto md:hidden" alt="" />
        <img data-aos="fade-up" data-aos-duration="1500"
          src={KontenInfografisMobile}
          className="mx-auto pt-10 md:hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default Infografis;
