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
  return (
    <>
      <div
        className="bg-[#202020] bg-contain bg-repeat py-10"
        style={{ backgroundImage: `url(${BGPattern})` }}
      >
        <img
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="1200"
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
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="1300"
          className="hidden py-10 md:block"
        >
          <Coming />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="2200"
          className="p-10 md:hidden"
        >
          <Coming />
        </div>
      </div>
    </>
  );
};

export default SkemaPasar;
