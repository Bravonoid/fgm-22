import React from 'react'
import Pattern from '../../assets/home/linimasa/pattern-linimasa.svg'
import LiniMasa from '../../assets/home/linimasa/linimasa-tulisan.svg'
import KembangUngu from  '../../assets/kembang-ungu.svg'
import PlainCover from  '../../assets/home/plain-cover.svg'

import Slider from './slider'
const medpart = () => {
  return (
    <div className=' relative  justify-center bg-cover h-[60vh] overflow-hidden  bg-[#171717]' >
        
            <div className='grid absolute gap-24 h-full  mx-auto w-full grid-cols-2'>
            <div className=' flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>
            <div className='  flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>

            </div>
      
          <div className=' justify-center w-full h-1/5 relative flex '>
              <div className=' relative my-1 mx-auto  flex justify-center items-center w-full text-left text-white'>
                <div className='h-1 z-10 bg-white w-1/3 ml-24 '></div>
                  <img src={KembangUngu} className='relative -ml-10 h-16 mx-auto' alt="" />
                  <img src={LiniMasa} className='relative h-16 mx-auto' alt="" />
                  <img src={KembangUngu} className=' relative -mr-10 h-16 mx-auto' alt="" />
                  <div className='h-1  bg-white relative w-1/3  mr-24'></div>


            </div>
          </div>

          <div className=' flex bg-cover h-3/5 w-3/4 my-auto mx-auto top-20  relative z-100  bg-[#171717]' >
            <Slider></Slider>
          </div>
    </div>
  )
}

export default medpart