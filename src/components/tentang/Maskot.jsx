import React from "react";
import TextCindaru from "../../assets/tentang/text-cindaru.svg";
import MaskotCindaru from "../../assets/tentang/maskot-cindaru.svg";

const Maskot = () => {
  return (
    <div
      id="maskot"
      className="z-[10] w-full items-center justify-end bg-[#242424] pt-48 sm:pt-12 pb-44 lg:py-24 lg:pb-36 sm:px-10 xl:px-0"
    >
      <div className="relative sm:top-32 sm:mx-auto sm:grid sm:grid-cols-3 xl:top-24 xl:px-24 mobile:flex mobile:flex-col">
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
          <div className="mt-3 py-5 md:w-[60vw] lg:w-[55vw] xl:w-[45vw] mobile:px-10">
            <p className="text-justify text-xl text-white xl:text-2xl">
              <span className="font-bold">Cindaru</span> digambarkan dengan sosok harimau Sumatera bertubuh manusia
              dengan kostum pemimpin kerajaan. Nama Cindaru berasal dari
              gabungan kata <span className="font-bold">Cindaku dan Aru</span> di mana <span className="font-bold">Cindaku</span> merupakan makhluk
              mitologi manusia harimau yang dipercaya sebagai penjaga kawasan
              hutan Gunung Kerinci dalam cerita legenda di masyarakat Jambi.
              Sementara <span className="font-bold">Aru</span> merupakan gelar bangsawan dalam suku Bugis. Selain
              itu, wujud harimau Sumatera dipilih sebagai bentuk pelestarian
              fauna asli Indonesia yang kini sedang dalam fase krisis menuju
              kepunahan.
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full items-end text-left text-white sm:my-5 mobile:my-24 mobile:mt-10 mobile:text-sm">
          <img
            src={MaskotCindaru}
            className="scale-[110%] md:scale-[150%]"
            alt="maskot-cindaru"
          />
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
