import React from 'react'
import Pattern from '../../assets/home/linimasa/pattern-linimasa.svg'
import Medpart from '../../assets/home/medpart-text.svg'
import KembangMerah from  '../../assets/kembang-merah.svg'
import PlainCover from  '../../assets/home/plain-cover.svg'
import { MedPartSponsorLogo } from '../home/sponsor/MedPartSponsor';
import {  dataSponsor, dataMedpart } from '../../data/dataMedPartSponsor';
import medpart_mobile from '../../assets/home/media_partner_mobile.svg'


import Slider from './slider'
const medpart = () => {
  return (
    <div className=' relative  justify-center bg-cover  py-16 bg-[#171717] pointer-events-none' >
        
            <div className=' grid absolute gap-24 h-full  mx-auto w-full grid-cols-2'>
            <div className=' flex bg-cover h-auto w-fit  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>
            <div className='  flex bg-cover h-auto w-auto  bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}></div>

            </div>
      
          <div className=' justify-center w-full h-1/5 relative flex ' data-aos="fade-down" data-aos-duration="1000">
              <div className=' relative my-1 mx-auto  flex justify-center items-center w-full text-left text-white mobile:hidden'>
                <div className='h-1 z-10 hidden sm:block bg-white w-1/3 ml-24 '></div>
                  <img src={KembangMerah} className=' hidden sm:block relative -ml-10 h-16 mx-auto' alt="" />
                  <img src={Medpart} className='relative h-16 mx-auto' alt="" />
                  <img src={KembangMerah} className=' hidden sm:block relative -mr-10 h-16 mx-auto' alt="" />
                  <div className='h-1  hidden sm:block bg-white relative w-1/3  mr-24'></div>


            </div>
            <img src={medpart_mobile} className='block sm:hidden relative h-24 mx-auto' alt="" />
          </div>

          <div className={` flex  mobile:mt-12 mt-32  p-5 bg-[#242424] xl:bg-flat-medpart bg-auto h-3/5 w-4/5 my-auto mx-auto  2xl:w-2/3 relative z-100 `} data-aos="zoom-in" data-aos-duration="1000">
          <div className="relative p-2 z-40  flex 2xl:ml-24 flex-wrap md:gap-8 gap-4 justify-evenly md:mx-16 align-middle ">
                            {dataMedpart.map((sponsor, index) =>
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

export default medpart