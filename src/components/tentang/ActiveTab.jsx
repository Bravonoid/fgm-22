import React, { useEffect, useState } from "react";
import TemaBesar from "../../assets/tentang/text-tema-besar.svg";

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
    <div className="flex h-[40vh] w-full justify-center bg-[#1E1E1E]">
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
        <div className={tema ? "" : "hidden"}>
          <img src={TemaBesar} className="p-auto" alt="tema-besar" />
        </div>
        <div className={tagline ? "" : "hidden"}>
          <img src={TemaBesar} className="p-auto" alt="tema-besar" />
          <h2 className="text-white">AJAJAJ</h2>
        </div>
      </div>
    </div>
  );
};

export default ActiveTab;
