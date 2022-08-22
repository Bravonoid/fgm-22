import React from 'react'
import Penari from '../../assets/home/penari.png'
import Logo from '../../assets/logo_fgm.svg';
import gunungan from '../../assets/home/gunungan.svg';
import mozaik_horizontal from '../../assets/home/mozaik_horizontal.svg';



const tentang = () => {
  return (
    <div className='w-full   h-[75vh] justify-end items-center  bg-[#1E1E1E] bg-cover bg-1/2' style={{backgroundImage: `url(${gunungan})`}}>
      <div className='grid relative  top-48 -right-40 mx-auto w-3/4 grid-cols-2'>
      <div className=' relative my-5 -top-10 mx-auto justify-center w-full  items-end text-left text-white'>
        <img className='w-full' src={mozaik_horizontal} alt="mozaik"></img>
        <div className='text-5xl mb-5 font-bold'>
          <p>FESTIVAL</p>

          <p>GADJAH MADA</p>
          </div>
        <div className='text-xl w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tellus nulla, porta vel consectetur et,
         mattis quis orci. In hac habitasse platea dictumst. Sed eget tincidunt risus. Mauris nec luctus sapien, eu cursus diam.</div>

      </div>  
      <img className=' relative my-5 -top-10 mx-auto justify-center w-2/5 items-center text-left text-white' src={Logo} alt="logo">



      </img>  
      </div>
    </div>
  )
}

export default tentang
