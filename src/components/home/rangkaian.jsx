import React from 'react'
import Cards from '../home/tentang/index'
import Pattern from '../../assets/home/rangakaian/pattern-rangkaian-acara.svg'
import Rangkaian from '../../assets/home/rangakaian/rangkaian-acara.svg'
import acara from '../../assets/home/acara_mobile.svg'



const rangkaian = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717]  mobile:h-[120vh] z-10 px-10 md:px-20 md:py-20">
    <img className=" sm:block font-bold text-xl md:text-5xl text-fgmBlue pb-8" src={Rangkaian}>
  
    
    </img>
    <img className="mobile:block w-full" scr={acara} alt=""></img>
    <div className="flex flex-col md:flex-row">
      <Cards />
    </div>
    <img className='h-16  w-[1000px] min-w-[1000px] overflow-hidden hidden  md:inline-block translate-y-80 absolute z-10' src={Pattern}>
 
    </img>
  </div>
  )
}

export default rangkaian