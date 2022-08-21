import React from 'react'
import Penari from '../../assets/home/penari.png';
import fgm_black from '../../assets/home/fgm-black.svg';
import mozaik from '../../assets/home/mozaik.svg'


const opening_video = () => {
  return (
    <div className="w-full relative flex justify-center px-[10px] py-[1px]" style={{backgroundImage: `url(${Penari})`}}>
      <div className=" mr-[500px] flex justify-center flex-row">
        <img className="mr-[150px] p-[10px]" src={mozaik} alt="mozaik"></img>
        <img  className="px-[10px]" src={fgm_black} alt="logo"></img>
      </div>
    </div>
  )
}

export default opening_video
