import React from 'react'
import Penari from '../../assets/home/penari.png'
import logo from '../../assets/logo_fgm.svg'
import festival_footer from '../../assets/footer/festival-gm-footer.svg';


const opening_video = () => {
  return (
    <div className="w-full relative flex justify-center px-[10px] py-[142px]" style={{backgroundImage: `url(${Penari})`}}>
      <div className=" mr-[500px] flex justify-center flex-row">
        <img  className="px-[10px]" src={logo} alt="logo"></img>
        <img  className="" src={festival_footer} alt="text"></img>
      </div>
    </div>
  )
}

export default opening_video
