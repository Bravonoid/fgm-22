import TeksSkemaPasar from "../../../assets/Pasar-Rakyat/home-pasar/teks-skema-pasar-mobile.svg";
import TeksSkema from "../../../assets/Pasar-Rakyat/home-pasar/teks-skema-pasar.svg";
import Coming from "../../../components/coming_soon.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const SkemaPasar = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();
  return (
    <>
      <div className="bg-[#202020] py-10">
        <img data-aos="fade-down" data-aos-duration="1500" data-aos-offset="800" src={TeksSkema} className="mx-auto hidden md:block" alt="" />
        <img src={TeksSkemaPasar} className="mx-auto md:hidden" alt="" />
        <div data-aos="fade-down" data-aos-duration="1500" data-aos-offset="1000" className="py-10">
          <Coming />
        </div>
      </div>
    </>
  );
};

export default SkemaPasar;
