import TeksKolaborasi from "../../../assets/Pasar-Rakyat/home-pasar/teks-kolaborasi.svg";
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
        className="bg-[#202020] bg-contain bg-repeat py-16"
        style={{ backgroundImage: `url(${BGPattern})` }}
      >
        <img
          src={TeksKolaborasi}
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="1400"
          className="mx-auto scale-150 lg:scale-100"
          alt=""
        />
        <div
          className="mx-auto mt-10 h-[371px] w-1/2 bg-kkm px-10 lg:w-[1140.88px]"
          data-aos="fade-up"
          data-aos-offset="1400"
          data-aos-duration="1500"
        >
          <img
            src={LogoUser}
            className="m-auto items-center justify-center pt-10"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default KolaborasiKreasi;
