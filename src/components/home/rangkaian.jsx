import React from 'react'
import Cards from '../home/tentang/index'
import Pattern from '../../assets/home/rangakaian/pattern-rangkaian.svg'
import Rangkaian from '../../assets/home/rangakaian/rangkaian-acara.svg'



const rangkaian = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717]  min-h-screen px-10 md:px-40 md:py-40">
    <img className="font-bold text-xl md:text-5xl text-fgmBlue pb-8" src={Rangkaian}>
    
    </img>
    <div className="flex flex-col md:flex-row">
      <Cards />
    </div>
  </div>
  )
}

export default rangkaian