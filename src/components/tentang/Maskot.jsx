import React from "react";
import TextCindaru from "../../assets/tentang/text-cindaru.svg";
import MaskotCindaru from "../../assets/tentang/maskot-cindaru.svg";

const Maskot = () => {
  return (
    <>
      <div className="w-full bg-[#171717] py-10"></div>
      <div
        id="maskot"
        className="z-[10] w-full items-center justify-end bg-[#242424] py-12 md:py-24"
      >
        <div className="relative sm:mx-auto sm:grid sm:grid-cols-3 xl:px-24 mobile:flex mobile:flex-col-reverse">
          <div className="col-span-2">
            <h1 className="mb-3 text-4xl font-bold text-white mobile:text-center mobile:hidden">
            MASKOT KITA
          </h1>
          <img
            src={TextCindaru}
            className="mobile:scale-[90%] mobile:px-10 mobile:hidden"
            alt="text-cindaru"
          />
            <h2 className="mt-4 text-2xl xl:text-3xl text-white mobile:px-10">
              Gabungan kata dari{" "}
              <span className="bg-[#E62C20] px-1 font-bold">Cindaku</span> dan{" "}
              <span className="bg-[#4A8068] px-1 font-bold">Aru.</span>
            </h2>
            <div className="mt-3 py-5 md:w-[90%] lg:w-[85%] xl:w-[80%] mobile:px-10">
              <p className="text-justify text-xl text-white xl:text-2xl">
                <span className="font-bold">Cindaru</span> digambarkan dengan
                sosok harimau Sumatera bertubuh manusia dengan kostum pemimpin
                kerajaan. Nama Cindaru berasal dari gabungan kata{" "}
                <span className="font-bold">Cindaku dan Aru</span> di mana{" "}
                <span className="font-bold">Cindaku</span> merupakan makhluk
                mitologi manusia harimau yang dipercaya sebagai penjaga kawasan
                hutan Gunung Kerinci dalam cerita legenda di masyarakat Jambi.
                Sementara <span className="font-bold">Aru</span> merupakan gelar
                bangsawan dalam suku Bugis. Selain itu, wujud harimau Sumatera
                dipilih sebagai bentuk pelestarian fauna asli Indonesia yang
                kini sedang dalam fase krisis menuju kepunahan.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full items-end text-left text-white mobile:text-sm">
            <h1 className="mb-3 text-3xl font-bold text-white mobile:text-center sm:hidden">
              MASKOT KITA
            </h1>
            <img
              src={TextCindaru}
              className="mobile:scale-[90%] mobile:px-10 sm:hidden"
              alt="text-cindaru"
            />
            <img
              src={MaskotCindaru}
              className="scale-[110%] mobile:my-10 -translate-x-2 transform md:translate-y-16 md:-translate-x-10 md:scale-[150%]"
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
    </>
  );
};

export default Maskot;
