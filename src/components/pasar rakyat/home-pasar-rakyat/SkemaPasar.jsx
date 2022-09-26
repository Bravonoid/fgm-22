import TeksSkemaPasar from "../../../assets/Pasar-Rakyat/home-pasar/teks-skema-pasar-mobile.svg";
import TeksSkema from "../../../assets/Pasar-Rakyat/home-pasar/teks-skema-pasar.svg"

const SkemaPasar = () => {
  return (
    <>
      <div className="bg-[#202020] py-10">
        <img src={TeksSkema} className="mx-auto hidden md:block" alt="" />
        <img src={TeksSkemaPasar} className="mx-auto md:hidden" alt="" />
      </div>
    </>
  );
};

export default SkemaPasar;
