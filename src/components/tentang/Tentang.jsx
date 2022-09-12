import React from "react";
import KembangLogo from "../../assets/tentang/kembang-tentang.svg";
import Logo from "../../assets/tentang/logo-tentang.svg";
import KembangLogoBawah from "../../assets/tentang/kembang-tentang-bawah.svg";
import TextFGM from "../../assets/tentang/text-fgm.svg";

const Tentang = () => {
  return (
    <div className="z-[10] h-[70vh] w-full items-center justify-end bg-[#1E1E1E]">
      <div className="relative sm:top-32 sm:-right-8 sm:mx-auto sm:grid sm:grid-cols-5 xl:-right-40 xl:top-36 xl:ml-[50px] mobile:flex mobile:flex-col-reverse">
        <div className="col-[span_1] h-auto">
          <img src={Logo} className="" alt="tema-besar" />
        </div>
        <div className="relative col-[span_4] w-[50vw] items-end pl-[3rem] text-left text-white sm:-top-10 sm:my-5 sm:mb-[100px] xl:-top-16 mobile:top-24 mobile:mx-10 mobile:text-sm">
          <img src={KembangLogo} alt="tema-besar" />
          <img src={TextFGM} className="mt-3" alt="tema-besar" />
          <p className="mt-5 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum
            distinctio facilis nemo voluptatibus ea aperiam commodi qui totam,
            quas expedita dolore sapiente consequatur incidunt modi magni
            voluptas iure voluptatum odio ad accusantium numquam? Quo expedita
            harum inventore, ad eveniet nihil nam voluptatum, eaque eos adipisci
            nisi! Mollitia modi similique voluptatibus blanditiis iusto est,
            delectus enim odit numquam quia repellat ullam laboriosam commodi
            reprehenderit!
          </p>
          <button class="mt-6 mr-5 rounded bg-[#4A8068] py-2 px-6 font-Montserrat text-lg font-bold text-[#EEEEEE] hover:bg-slate-400">
            Tema Besar
          </button>
          <button class="mt-6 rounded bg-[#9C4A9A] py-2 px-6 font-Montserrat text-lg font-bold text-[#EEEEEE] hover:bg-slate-400">
            Cindaru
          </button>
          <div className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl"></div>
        </div>
        <img
          src={KembangLogoBawah}
          className="absolute bottom-0 right-[10rem]"
          alt="tema-besar"
        />
      </div>
    </div>
  );
};

export default Tentang;
