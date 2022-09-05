import React from 'react'
import Penari from '../../assets/home/penari.png';
import fgm_black from '../../assets/home/fgm-black.svg';
import mozaik from '../../assets/home/mozaik.svg'


const opening_video = () => {
  return (
    <div className="w-full sm:object-left relative flex justify-center px-[10px] py-[1px]" style={{backgroundImage: `url(${Penari})`}}>
      <div className='flex h-[450px]'>
        <img className="w-1/8 px-[10px] py-[10px] mx-[0px] lg:mr-[50px] lg:w-1/12 xl:mr-[100px] mobile:hidden" src={mozaik} alt="fgm_black"></img>
        <img className=' sm:ml-[100px] sm:pr-[10px] sm:w-2/3 lg:ml-[10px] xl:w-1/2 mobile:mx-auto' src={fgm_black} alt="fgm_black"></img>
      </div>
    </div>
  )
}

export default opening_video
