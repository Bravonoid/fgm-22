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
        <div className="mx-16 first-letter:text-center whitespace-normal">
          <p className="items-center justify-center text-justify text-white">
            bertujuan untuk membentuk kekuatan yang dapat menghasilkan
            keuntungan atau menguatkan perekonomian dan juga memiliki harapan
            yang besar untuk mewujudkan kesejahteraan masyarakat.
          </p>
        </div>
      </div>
    </>
  );
};

export default TemaPasarRakyat;
