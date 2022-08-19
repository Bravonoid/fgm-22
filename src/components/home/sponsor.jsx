import React from 'react'
import Pattern from '../../assets/home/linimasa/pattern-linimasa.svg'
import Sponsor from '../../assets/home/sponsor-text.svg'
import KembangHijau from  '../../assets/kembang-hijau.svg'
import PlainCover from  '../../assets/home/plain-cover.svg'

const sponsor = () =>  {
  return (
    <div className=' relative  justify-center bg-cover h-[75vh]   bg-[#171717]' >
        
            <div className='grid absolute gap-24 h-full  mx-auto w-full grid-cols-2'>
            <div className=' flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>
            <div className='  flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>

            </div>
      
          <div className=' justify-center w-full h-1/5 relative flex '>
              <div className=' relative my-1 mx-auto  flex justify-center items-center w-full text-left text-white'>
                <div className='h-1 z-10 bg-white w-1/3 ml-24 '></div>
                  <img src={KembangHijau} className='relative -ml-10 h-16 mx-auto' alt="" />
                  <img src={Sponsor} className='relative h-16 mx-auto' alt="" />
                  <img src={KembangHijau} className=' relative -mr-10 h-16 mx-auto' alt="" />
                  <div className='h-1  bg-white relative w-1/3  mr-24'></div>


            </div>
          </div>

          <div className=' flex bg-cover h-3/5 w-3/4 my-auto mx-auto  relative z-100  bg-[#171717]' style={{ backgroundImage: "url(" + PlainCover + ")" }}></div>
    </div>
  )
}

export default sponsor