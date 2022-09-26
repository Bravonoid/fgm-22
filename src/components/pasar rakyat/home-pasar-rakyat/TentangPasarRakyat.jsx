import Slider from "react-slick";
import KembangTentangMobile from "../../../assets/Pasar-Rakyat/home-pasar/kembang-tentang-mobile.svg";
import JudulTentangMobile from "../../../assets/Pasar-Rakyat/home-pasar/judul-tentang-mobile.svg";
import Gambar1Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar1-tentang.png";
import Gambar2Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar2-tentang.png";

const TentangPasarRakyat = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0.5,
  };
  return (
    <>
      <div className="items-center bg-[#171717] pb-[5rem]">
        <div className="relative sm:top-24 sm:-right-4 sm:mx-auto sm:grid sm:grid-cols-4 xl:top-48 mobile:top-0 mobile:flex mobile:flex-col">
          <div className="col-span-2 mt-8 flex items-center justify-center lg:mt-12 mobile:mt-32"></div>
          <div className="items-left relative col-span-2 mx-10 mr-24 text-left text-white sm:my-5 xl:w-3/4 mobile:mx-10 mobile:text-base">
            <img src={KembangTentangMobile}  alt="" />
            <img src={JudulTentangMobile} className="py-2" alt="" />
            <p className="font-bold">26 November 2022 |</p>
            <p className="font-bold">Lapangan Pancasila UGM</p>
            <p className="pt-5">
              Pasar rakyat hadir sebagai peluang untuk mahasiswa berwirausaha
              dan membantu meningkatkan ekonomi masyarakat. Konsep yang diangkat
              pasar rakyat adalah menyajikan perpaduan penjualan tradisional dan
              kekinian
            </p>
            <Slider className="pt-10" {...settings}>
              <div className="mr-[-3rem]">
                <img src={Gambar1Tentang} alt="" />
              </div>
              <div className="ml-[-3rem]">
                <img src={Gambar2Tentang} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangPasarRakyat;
