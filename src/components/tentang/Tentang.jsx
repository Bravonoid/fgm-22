import React from "react";
import KembangLogo from "../../assets/tentang/kembang-tentang.svg";
import Logo from "../../assets/tentang/logo-tentang.svg";
import KembangLogoBawah from "../../assets/tentang/kembang-tentang-bawah.svg";
import KembangLogoBawahMobile from "../../assets/tentang/kembang-tentang-bawah-mobile.svg"
import TextFGM from "../../assets/tentang/text-fgm.svg";

const Tentang = () => {
  return (
    <div className="sm:h-[90vh] h-[90vh] items-center bg-[#1E1E1E] pb-[50rem]">
      <div className="relative sm:top-24 sm:-right-4 sm:mx-auto sm:grid sm:grid-cols-3 xl:top-48 mobile:top-0 mobile:flex mobile:flex-col">
        <div className="col-span-1 mt-8 flex items-center justify-center lg:mt-32 mobile:mt-32">
          <img
            src={Logo}
            className="sm:scale-[175%] lg:scale-[225%] mobile:scale-125"
            alt="logo"
          />
        </div>
        <div className="items-left relative col-span-2 mx-10 mr-24 text-left text-white sm:my-5 mobile:mx-10 mobile:mt-12 mobile:text-base">
          <img src={KembangLogo} className="" alt="tema-besar" />
          <img src={TextFGM} className="mt-3" alt="tema-besar" />
          <p className="text-xl mobile:text-base mt-5 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quae autem aliquam consequuntur, officia esse, maiores quos,
            necessitatibus deleniti pariatur amet eveniet aut. Et asperiores
            vitae nobis eius quaerat voluptate iusto repellendus?
          </p>
          <button class="mr-5 rounded bg-[#4A8068] py-2 px-6 font-Montserrat text-lg text-[#EEEEEE] hover:bg-slate-400 hover:font-bold mobile:mr-3 mobile:px-3 mobile:text-base">
            Tema Besar
          </button>
          <button class="rounded bg-[#9C4A9A] py-2 px-6 font-Montserrat text-lg text-[#EEEEEE] hover:bg-slate-400  hover:font-bold mobile:px-3 mobile:text-base">
            Cindaru
          </button>
        </div>
      </div>
      <img
        src={KembangLogoBawah}
        className="absolute bottom-0 right-0 hidden md:block scale-75 md:mr-[-2rem] lg:mr-[0] lg:scale-100 lg:right-0 overflow-hidden"
        alt="tema-besar"
      />
      <img
        src={KembangLogoBawahMobile}
        className="absolute right-0 mt-10 sm:mt-[6rem] md:hidden"
        alt="tema-besar"
      />
    </div>
    // <div className="z-[10] h-[70vh] w-full items-center justify-center bg-[#1E1E1E]">
    //   <div className="relative sm:top-32 sm:-right-8 grid-cols-2 sm:mx-auto sm:grid-cols-5 xl:-right-40 xl:top-48 xl:ml-[50px] mobile:flex mobile:flex-col-reverse">
    //     <div className="col-[span_1] h-auto">
    //     <img src={Logo} className="" alt="logo" />
    //     </div>

    //     <div className="relative col-[span_4] w-[50vw] items-end pl-[3rem] text-left text-white sm:-top-10 sm:my-5 sm:mb-[100px] xl:-top-16 mobile:top-24 mobile:mx-10 mobile:text-sm">
    //       <img src={KembangLogo} alt="tema-besar" />
    //       <img src={TextFGM} className="mt-3" alt="tema-besar" />
    //       <p className="text-md mt-5">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum
    //         distinctio facilis nemo voluptatibus ea aperiam commodi qui totam,
    //         quas expedita dolore sapiente consequatur incidunt modi magni
    //         voluptas iure voluptatum odio ad accusantium numquam? Quo expedita
    //         harum inventore, ad eveniet nihil nam voluptatum, eaque eos adipisci
    //         nisi! Mollitia modi similique voluptatibus blanditiis iusto est,
    //         delectus enim odit numquam quia repellat ullam laboriosam commodi
    //         reprehenderit!
    //       </p>
    //       <button class="mt-6 mr-5 rounded bg-[#4A8068] py-2 px-6 font-Montserrat text-lg font-bold text-[#EEEEEE] hover:bg-slate-400">
    //         Tema Besar
    //       </button>
    //       <button class="mt-6 rounded bg-[#9C4A9A] py-2 px-6 font-Montserrat text-lg font-bold text-[#EEEEEE] hover:bg-slate-400">
    //         Cindaru
    //       </button>
    //       <div className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl"></div>
    //     </div>

    //     <img
    //       src={KembangLogoBawah}
    //       className="absolute bottom-0 right-[10rem]"
    //       alt="tema-besar"
    //     />
    //   </div>
    // </div>
  );
};

export default Tentang;
