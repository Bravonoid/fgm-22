import React from "react";

import Coming_soon from "../coming_soon";
import Pattern from "../../assets/coming_soon/pattern.svg";

const trailer = () => {
  return (
    <div className="inline-block h-full w-full bg-black  ">
      <div className="mx-auto my-auto w-full items-center 2xl:pt-12 pt-24 sm:px-2 px-6 lg:px-12 align-center justify-between">
      <iframe className="2xl:w-[85%] 2xl:h-[85%] w-full h-full aspect-video relative mx-auto" src="https://www.youtube.com/embed/XLwFSC-zRVE" title="Iron to Ascendant - VALORANT INTERACTIVE STREAM #2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default trailer;
