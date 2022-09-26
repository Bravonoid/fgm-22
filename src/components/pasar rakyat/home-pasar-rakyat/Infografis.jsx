import TeksInfografisMobile from "../../../assets/Pasar-Rakyat/home-pasar/teks-infografis-mobile.svg";
import KontenInfografisMobile from "../../../assets/Pasar-Rakyat/home-pasar/konten-infografis-mobile.svg"
import TeksInfografis from "../../../assets/Pasar-Rakyat/home-pasar/teks-infografis.svg"
import KontenInfografis from "../../../assets/Pasar-Rakyat/home-pasar/konten-infografis.svg"

const Infografis = () => {
    return (
        <>
        <div className="bg-[#202020] py-5 pb-12">
            <img src={TeksInfografis} className="mx-auto hidden md:block" alt="" />
            <img src={KontenInfografis} className="mx-auto py-5 hidden md:block" alt="" />
            <img src={TeksInfografisMobile} className="mx-auto md:hidden" alt="" />
            <img src={KontenInfografisMobile} className="mx-auto pt-10 md:hidden" alt="" />
        </div>
        </>
    )
}

export default Infografis;
