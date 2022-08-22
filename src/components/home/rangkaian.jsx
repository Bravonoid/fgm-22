import React from 'react'
import Cards from '../home/tentang/index'
import Pattern from '../../assets/home/rangakaian/pattern-rangkaian.svg'
import Rangkaian from '../../assets/home/rangakaian/rangkaian-acara.svg'



const rangkaian = () => {
  return (
    <div className='w-full flex z-10 flex-col   h-auto justify-center items-center  bg-[#171717]'>

      <img className='relative md:my-2 my-10' src={Rangkaian} title="judul" ></img>
      <div className=' relative my-5 -top-10 mx-auto justify-center w-3/5 items-center text-left text-white'>
      <div className="flex flex-col mx-auto justify-center items-center md:flex-row">
            <Cards />
          </div>

      </div>
      <img className='relative  ' src={Pattern} title="yes" >

</img>

    </div>
  )
}

export default rangkaian