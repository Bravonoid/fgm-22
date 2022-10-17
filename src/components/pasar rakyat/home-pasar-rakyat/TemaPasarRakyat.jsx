import TeksTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-tema-mobile.svg";
import TemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/tema-mobile.svg";
import LineTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/line-tema-mobile.svg";
import Tema from "../../../assets/Pasar-Rakyat/home-pasar/tema.svg";
import TemaBox from "../../../assets/Pasar-Rakyat/home-pasar/tema-box.svg";
import GarisTema from "../../../assets/Pasar-Rakyat/home-pasar/garis-tema.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const TemaPasarRakyat = () => {

  AOS.init();
  AOS.refresh();
  AOS.refreshHard();
  
  return (
    <>
      <div className="relative w-full items-center justify-center bg-[#202020] py-10">
        <img src={Tema} data-aos="slide-down" data-aos-duration="1500" className="mx-auto px-10 hidden md:block" alt="" />
        <img src={TemaBox} data-aos="slide-up" data-aos-duration="1500" className="mx-auto py-5 hidden md:block" alt="" />
        <img src={GarisTema} className="mx-auto hidden md:block" alt="" />
        <p data-aos="fade-left" data-aos-duration="1500" className="text-white text-center text-2xl max-w-[932px] mx-auto pt-5 hidden md:block">
          bertujuan untuk membentuk kekuatan yang dapat menghasilkan keuntungan
          atau menguatkan perekonomian dan juga memiliki harapan yang besar
          untuk mewujudkan kesejahteraan masyarakat.
        </p>
        {/* mobile */}
        <img src={TeksTemaMobile} className="mx-auto md:hidden" alt="" />
        <img src={TemaMobile} className="mx-auto pt-5 md:hidden" alt="" />
        <img src={LineTemaMobile} className="mx-auto py-5 md:hidden" alt="" />
        <div className="relative mx-auto flex max-w-[233px] items-end text-sm first-letter:text-center md:hidden">
          <div className="text-justify text-white md:hidden">
            bertujuan untuk membentuk kekuatan yang dapat menghasilkan
            keuntungan atau menguatkan perekonomian dan juga memiliki harapan
            yang besar untuk mewujudkan kesejahteraan masyarakat.
          </div>
        </div>
      </div>
    </>
  );
};

export default TemaPasarRakyat;
