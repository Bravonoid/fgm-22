import TeksTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-tema-mobile.svg";
import TemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/tema-mobile.svg";
import LineTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/line-tema-mobile.svg";
import Tema from "../../../assets/Pasar-Rakyat/home-pasar/tema.svg";
import TemaBox from "../../../assets/Pasar-Rakyat/home-pasar/tema-box.svg";
import GarisTema from "../../../assets/Pasar-Rakyat/home-pasar/garis-tema.svg";
import BGPattern from "../../../assets/Pasar-Rakyat/home-pasar/bg-pasar.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const TemaPasarRakyat = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div
        className="relative w-full items-center justify-center bg-[#202020] bg-contain bg-repeat py-10"
        style={{ backgroundImage: `url(${BGPattern})` }}
      >
        <img
          src={Tema}
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="600"
          className="mx-auto hidden px-10 md:block"
          alt=""
        />
        <img
          src={TemaBox}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="600"
          className="mx-auto hidden py-5 md:block"
          alt=""
        />
        <img src={GarisTema} className="mx-auto hidden md:block" alt="" />
        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-offset="600"
          className="mx-auto hidden max-w-[932px] pt-5 text-center text-2xl text-white md:block"
        >
          bertujuan untuk membentuk kekuatan yang dapat menghasilkan keuntungan
          atau menguatkan perekonomian dan juga memiliki harapan yang besar
          untuk mewujudkan kesejahteraan masyarakat.
        </p>
        {/* mobile */}
        <img src={TeksTemaMobile} data-aos="fade-down"
          data-aos-duration="1500" data-aos-offset="600" className="mx-auto md:hidden" alt="" />
        <img src={TemaMobile} data-aos="fade-up"
          data-aos-duration="1500" data-aos-offset="600" className="mx-auto pt-5 md:hidden" alt="" />
        <img src={LineTemaMobile} className="mx-auto py-5 md:hidden" alt="" />
        <div className="relative mx-auto flex max-w-[233px] items-end text-sm first-letter:text-center md:hidden" data-aos="fade-left"
          data-aos-duration="1500" data-aos-offset="900">
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
