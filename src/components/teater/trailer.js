import React from "react";

import Coming_soon from "../coming_soon";
import Pattern from "../../assets/coming_soon/pattern.svg";

const trailer = () => {
  return (
    <div className="inline-block h-full w-full bg-black  ">
      <div className="mx-auto pointer-events-none my-auto w-full items-center px-12 py-48 sm:px-24 2xl:p-48 align-center justify-between">
        <Coming_soon />
      </div>
    </div>
  );
};

export default trailer;
