import TeksTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-tema-mobile.svg";
import TemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/tema-mobile.svg";
import LineTemaMobile from "../../../assets/Pasar-Rakyat/home-pasar/line-tema-mobile.svg";
import Judul_Kolaborasi from "../../../assets/Pasar-Rakyat/home-pasar/judulkolaborasi.svg";
import TemaBox from "../../../assets/Pasar-Rakyat/home-pasar/tema-box.svg";
import GarisTema from "../../../assets/Pasar-Rakyat/home-pasar/garis-tema.svg";
import BGPattern from "../../../assets/Pasar-Rakyat/home-pasar/bg-pasar.svg";
import AOS from "aos";
import Judul_HP from "../../../assets/Pasar-Rakyat/home-pasar/judul_hp.svg";
import SeminarPic from  "../../../assets/Pasar-Rakyat/seminar.PNG";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Seminar = () => {
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
          src={Judul_Kolaborasi}
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="400"
          className="mx-auto hidden px-10 md:block"
          alt=""
        />
        {/*mobile */}
        <img
          src={Judul_HP}
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="400"
          className="mx-auto px-10 sm:hidden "
          alt=""
        />

        <div data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="400" className="mx-auto mt-16 flex flex-col items-center justify-around   pb-5 text-white md:h-[20rem] md:flex-row lg:w-[1000.88px] xl:w-[1260.88px]">
          <div className="h-[12rem]  w-[16rem] md:h-[20rem] md:w-[40%]">
            <img src={SeminarPic}></img>
          </div>
          <div className="mt-5 flex h-full w-2/3  flex-col justify-around sm:mt-0 sm:mr-5 md:w-[50%] xl:mr-0">
            <h1 className="text-2xl mb-5 font-bold text-center ">Dukung UMKM, Festival Gadjah Mada Gelar Seminar Edukasi Kewirausahaan
</h1>
            <p className="text-justify text-sm leading-6  sm:leading-normal lg:leading-[1.6rem]">
            Yogyakarta, 13 November 2022 – Kewirausahaan, khususnya UMKM, menjadi sektor penting dalam perekonomian Indonesia, terlebih lagi kemunculan UMKM menyumbang 61% PDB Indonesia. Dalam mendukung peran ini, Festival Gadjah Mada menghadirkan seminar edukasi kewirausahaan pada hari Minggu (13/11/2022) di Ruang Audiotorium Tropical Biologi, Universitas Gadjah Mada. Seminar yang bertemakan “Optimizing Additional Capital & Market Analyze For Business Strategy in Digital Era” ini bertujuan untuk mengembangkan potensi dalam berwirausaha serta mengoptimalkan bisnis. 
            </p>
            <Link to = "/pasar-rakyat/press-release">
              <div className="btn  mt-2  w-fit cursor-pointer bg-fgm-orange py-2 px-3  text-center font-bold  text-black shadow-[0_0px_0px_rgb(72,130,103)] transition-all  ease-out hover:translate-y-1 hover:shadow-[9px_9px_0_rgb(230,44,32)] ">
              Selengkapnya
            </div>
            </Link>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Seminar;
