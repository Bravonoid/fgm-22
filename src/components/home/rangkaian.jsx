import React from 'react'
import Cards from '../home/tentang/index'
import Pattern from '../../assets/home/rangakaian/pattern-rangkaian-acara.svg'
import Rangkaian from '../../assets/home/rangakaian/rangkaian-acara.svg'
import acara from '../../assets/home/acara_mobile.svg'
import Rangkaian2line from '../../assets/home/rangakaian/rangkaian-2line.svg'


const rangkaian = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717]  mobile:pt-12 z-10 px-10 md:px-20 md:py-20">
    <div className="pointer-events-none" data-aos="fade-right" data-aos-duration="1000">
    <img className=" hidden sm:block font-bold text-xl md:text-5xl text-fgmBlue pb-8" src={Rangkaian}></img>
    <img className=" sm:hidden font-bold text-xl md:text-5xl text-fgmBlue pb-8" src={Rangkaian2line}></img>

    <img className="mobile:block w-full" scr={acara} alt=""></img>
    </div>
    <div className="flex flex-col md:flex-row" data-aos="zoom-out" data-aos-duration="1000">
      <Cards />
    </div>
    <img className='h-16  w-[1000px] MIN-w-[1000px] overflow-hidden hidden  md:inline-block translate-y-80 absolute z-10' src={Pattern}>
 
    </img>
  </div>
  )
}

export default rangkaian