import TeksTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-tema-mobile.svg";
import TemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/tema-mobile.svg";
import LineTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/line-tema-mobile.svg";

const TemaPasarRakyat = () => {
  return (
    <>
      <div className="relative w-full items-center justify-center bg-[#202020] py-10">
        <img src={TeksTemaMobile} className="mx-auto" alt="" />
        <img src={TemaMobile} className="mx-auto pt-5" alt="" />
        <img src={LineTemaMobile} className="mx-auto py-5" alt="" />
        <div className="max-w-[233px] mx-auto first-letter:text-center relative items-end flex text-sm">
          <div className="text-justify text-white">
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
