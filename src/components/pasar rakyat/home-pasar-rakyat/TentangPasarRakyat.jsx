import Slider from "react-slick";
import KembangTentangMobile from "../../../assets/Pasar-Rakyat/home-pasar/kembang-tentang-mobile.svg";
import JudulTentangMobile from "../../../assets/Pasar-Rakyat/home-pasar/judul-tentang-mobile.svg";
import Gambar1Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar1-tentang.png";
import Gambar2Tentang from "../../../assets/Pasar-Rakyat/home-pasar/gambar2-tentang.png";
import KembangTentang from "../../../assets/Pasar-Rakyat/home-pasar/kembang-tentang.svg";
import JudulTentang from "../../../assets/Pasar-Rakyat/home-pasar/judul-tentang.svg";

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
      <div className="items-center bg-[#171717] pb-[10rem] xl:pb-[20rem]">
        <div className="relative md:top-24 md:mx-auto md:grid md:grid-cols-4 xl:top-48 mobile:top-0 mobile:flex mobile:flex-col">
          <div className="col-span-2 mt-8 hidden items-center justify-center md:block lg:mt-12 mobile:mt-32">
            <div>
              <img src={KembangTentang} alt="" />
              <div className="bg-[#202020] py-5 px-10 xl:max-w-[596px]">
                <img src={JudulTentang} className="mx-auto py-2" alt="" />
                <p className="text-center text-xl font-bold text-white">
                  26 November 2022 | Lapangan Pancasila UGM
                </p>
              </div>
            </div>
            <p className="max-w-[700px] pt-10 pl-32 text-2xl font-medium text-white">
              Pasar rakyat hadir sebagai peluang untuk mahasiswa berwirausaha
              dan membantu meningkatkan ekonomi masyarakat. Konsep yang diangkat
              pasar rakyat adalah menyajikan perpaduan penjualan tradisional dan
              kekinian
            </p>
          </div>
          <div className="items-left relative col-span-2 mx-10 mr-24 pt-36 text-left text-white md:my-5 xl:w-3/4 mobile:mx-10 mobile:text-base">
            <img src={KembangTentangMobile} className="md:hidden" alt="" />
            <img src={JudulTentangMobile} className="py-2 md:hidden" alt="" />
            <p className="font-bold md:hidden">26 November 2022 |</p>
            <p className="font-bold md:hidden">Lapangan Pancasila UGM</p>
            <p className="pt-5 md:hidden">
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
