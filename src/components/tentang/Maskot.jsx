import React from "react";
import TextCindaru from "../../assets/tentang/text-cindaru.svg";
import MaskotCindaru from "../../assets/tentang/maskot-cindaru.svg";

const Maskot = () => {
  return (
    <div className="z-[10] h-[80vh] mobile:h-[100vh] w-full items-center justify-end bg-[#242424] pt-10">
      <div className="relative sm:top-32 sm:-right-8 sm:mx-auto sm:grid sm:grid-cols-3 xl:-right-40 xl:top-24 xl:ml-[50px] mobile:flex mobile:flex-col">
        <div className="col-span-2">
          <h1 className="mb-3 text-3xl font-bold text-white mobile:text-center">
            MASKOT KITA
          </h1>
          <img
            src={TextCindaru}
            className="mobile:scale-[90%] mobile:px-10"
            alt="text-cindaru"
          />
          <h2 className="mt-4 text-2xl text-white mobile:px-10">
            Gabungan kata dari{" "}
            <span className="bg-[#E62C20] px-1 font-bold">Cindaku</span> dan{" "}
            <span className="bg-[#4A8068] px-1 font-bold">Aru.</span>
          </h2>
          <div className="mt-3 py-5 md:w-[40vw] mobile:px-10">
            <h2 className="text-2xl text-white">
              <span className="font-bold">Cindaku</span> merupakan makhluk
              mitologi berupa{" "}
              <span className="font-bold">manusia harimau.</span>
              <span className="font-bold"> Aru</span> merupakan{" "}
              <span className="font-bold">gelar bangsawan</span> dalam suku
              bugis
            </h2>
          </div>
        </div>
        <div className="mobile:mt-10 relative col-span-1 w-full items-end text-left text-white sm:-top-10 sm:my-5 sm:mb-[100px] xl:-top-16 mobile:scale-[125%] mobile:my-24 mobile:text-sm">
          <img src={MaskotCindaru} alt="maskot-cindaru" />
        </div>
      </div>
      {/* <img
        src={KembangLogoBawah}
        className="absolute right-0"
        alt="tema-besar"
      /> */}
    </div>
  );
};

export default Maskot;
