import React from "react";
import Pattern from "../assets/coming_soon/pattern.svg";
import Segera_Hadir from "../assets/coming_soon/segerahadir1.svg";

const coming_soon = () => {
  return (
    <div className="items-center h-screen align-center">
      <img className="mx-auto mb-8" src={Segera_Hadir}></img>
      <img className="mx-auto" src={Pattern}></img>
    </div>
  );
};

export default coming_soon;
