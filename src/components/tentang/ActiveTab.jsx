import React, { useEffect, useState } from "react";
import TemaBesar from "../../assets/tentang/text-tema-besar.png";
import TemaBesarKecil from "../../assets/tentang/text-tema-besar-kecil.png";
import Tagline from "../../assets/tentang/tagline.png";
import Kembang from "../../assets/tentang/kembang.png";

const ActiveTab = () => {
  const [tema, setTema] = useState(true);
  const [tagline, setTagline] = useState(false);

  const handleTema = () => {
    setTema(true);
    setTagline(false);
  };

  const handleTagline = () => {
    setTema(false);
    setTagline(true);
  };

  return (
    <>
      <div className="flex h-[15vh] w-full justify-center bg-[#1E1E1E]">
        <div className="flex w-full justify-center">
          <h2 onClick={handleTema} className="text-[40px] text-white">
            TEMA BESAR
          </h2>
          <span className="mx-10 my-[10px] inline-block h-[2.5em] w-[3px] bg-white "></span>
          <h2
            onClick={handleTagline}
            className="text-[40px] text-white opacity-40 hover:opacity-100"
          >
            TAGLINE
          </h2>
        </div>
      </div>
      <div className="flex h-[40vh] w-full bg-[#1E1E1E]">
        <div className={tema ? "mx-auto justify-center block" : "hidden"}>
          <img src={TemaBesar} alt="tema-besar" />
          <img src={TemaBesarKecil} style={{ paddingLeft:'0.5rem', paddingRight:'0.5rem' }} alt="tema-besar-kecil" />
        </div>
        <div className={tagline ? "block" : "hidden"}>
          <img src={Tagline} className="px-[15rem] scale-[110%]" alt="tagline" />
          <img src={Kembang} className="absolute ml-[80rem] mt-[-32rem] overflow-hidden" alt="kembang" />
        </div>
      </div>
    </>
  );
};

export default ActiveTab;
