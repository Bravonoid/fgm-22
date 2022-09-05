import React from 'react'
import Cards from '../home/tentang/index'
import Pattern from '../../assets/home/rangakaian/pattern-rangkaian-acara.svg'
import Rangkaian from '../../assets/home/rangakaian/rangkaian-acara.svg'



const rangkaian = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717]  h-[90vh] px-10 md:px-20 md:py-20">
    <img className="font-bold text-xl md:text-5xl text-fgmBlue pb-8" src={Rangkaian}>
    
    </img>
    <div className="flex flex-col md:flex-row">
      <Cards />
    </div>
    <img className=' h-16 inline-block w-full z-10' src={Pattern}>
 
    </img>
  </div>
  )
}

export default rangkaian