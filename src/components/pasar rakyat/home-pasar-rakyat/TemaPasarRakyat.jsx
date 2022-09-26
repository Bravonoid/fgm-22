import TeksTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-tema-mobile.svg";
import TemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/tema-mobile.svg";

const TemaPasarRakyat = () => {
  return (
    <>
      <div className="relative w-full items-center justify-center bg-[#202020] py-10">
        <img src={TeksTemaMobile} className="mx-auto" alt="" />
        <img src={TemaMobile} className="mx-auto pt-5" alt="" />
        <p className="text-white px-10 text-center">
          bertujuan untuk membentuk kekuatan yang dapat menghasilkan keuntungan
          atau menguatkan perekonomian dan juga memiliki harapan yang besar
          untuk mewujudkan kesejahteraan masyarakat.
        </p>
      </div>
    </>
  );
};

export default TemaPasarRakyat;
