import React from 'react'
import Pattern from '../../assets/home/linimasa/pattern-linimasa.svg'
import Sponsor from '../../assets/home/sponsor-text.svg'
import KembangHijau from  '../../assets/kembang-hijau.svg'
import PlainCover from  '../../assets/home/plain-cover.svg'
import { MedPartSponsorLogo } from '../home/sponsor/MedPartSponsor';
import {  dataSponsor, dataMedpart } from '../../data/dataMedPartSponsor';

const sponsor = () =>  {
  return (
    <div className=' relative  justify-center bg-cover h-auto py-16   bg-[#171717]' >
        
            <div className='grid absolute gap-24 h-full  mx-auto w-full grid-cols-2'>
            <div className=' flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>
            <div className='  flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>

            </div>
      
          <div className=' justify-center w-full h-1/5 relative flex '>
              <div className=' relative my-1 mx-auto  flex justify-center items-center w-full text-left text-white'>
                <div className='h-1 z-10 bg-white hidden sm:block w-1/3 ml-24 '></div>
                  <img src={KembangHijau} className='relative  hidden sm:block -ml-10 h-16 mx-auto' alt="" />
                  <img src={Sponsor} className='relative h-16 mx-auto' alt="" />
                  <img src={KembangHijau} className=' relative hidden sm:block -mr-10 h-16 mx-auto' alt="" />
                  <div className='h-1  hidden sm:block bg-white relative w-1/3  mr-24'></div>


            </div>
          </div>

          <div className={` flex  mt-32  p-5 bg-[#242424] xl:bg-flat-medpart bg-cover h-3/5 w-3/4 my-auto mx-auto  relative z-100 `} >
          <div className="relative p-2 z-50 flex flex-wrap md:gap-8 gap-4 justify-evenly md:mx-16 ">
                            {dataSponsor.map((sponsor, index) =>
                                <div className="self-center">
                                <MedPartSponsorLogo
                                    key={index}
                                    name={sponsor.name}
                                    img={sponsor.img}
                                    width={sponsor.lebar}
                                    height={sponsor.tinggi}
                                />
                                </div>
                            )}
                        </div>
          </div>
    </div>
  )
}

export default sponsor