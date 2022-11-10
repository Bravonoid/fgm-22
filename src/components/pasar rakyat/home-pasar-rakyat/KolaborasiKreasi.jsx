import TeksKolaborasi from "../../../assets/Pasar-Rakyat/home-pasar/teks-kolaborasi.svg";
import pdm from "../../../assets/Pasar-Rakyat/home-pasar/pdm.png";
import BGPattern from "../../../assets/Pasar-Rakyat/home-pasar/bg-pasar.svg";
import LogoUser from "../../../assets/Pasar-Rakyat/home-pasar/logo-user.png";
import AOS from "aos";
import "aos/dist/aos.css";

const KolaborasiKreasi = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();
  return (
    <>
      <div
        className="bg-[#202020] bg-contain bg-repeat py-16 lg:hidden"
        style={{ backgroundImage: `url(${BGPattern})` }}
      >
        <img
          src={TeksKolaborasi}
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="2200"
          style={{ transform: "scale(150%)" }}
          className="mx-auto"
          alt=""
        />
        <div
          className="mx-auto mt-10 h-full w-[50%] bg-kkm px-10 lg:w-[1140.88px] py-20"
          data-aos="fade-up"
          data-aos-offset="2200"
          data-aos-duration="1500"
        >
          <img
            src={LogoUser}
            className="m-auto items-center justify-center"
            alt=""
          />
        </div>
      </div>

      <div
        className="bg-[#202020] bg-contain bg-repeat py-16 hidden lg:block"
        style={{ backgroundImage: `url(${BGPattern})` }}
      >
        <img
          src={TeksKolaborasi}
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="1100"
          className="mx-auto scale-150 lg:scale-100"
          alt=""
        />
        <div
          className="mx-auto mt-10 h-[371px] bg-kkm px-10 lg:w-[1140.88px] flex flex-row"
          // data-aos="fade-up"
          // data-aos-offset="1100"
          // data-aos-duration="1500"
        >
          <img
            src={LogoUser}
            className="m-auto items-center justify-center pt-10"
            alt=""
          />
            <img
              src={pdm}
              className="m-auto items-center justify-center pt-10"
              alt=""
            />
  
   
          
        </div>
      </div>
    </>
  );
};
export default KolaborasiKreasi;
