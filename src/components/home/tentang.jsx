import React from 'react'
import Penari from '../../assets/home/penari.png'
import Logo from '../../assets/logo_fgm.svg';



const tentang = () => {
  return (
    <div className='w-full   h-[75vh] justify-end items-center  bg-[#1E1E1E]'>
      <div className='grid relative  top-48 -right-40 mx-auto w-3/4 grid-cols-2'>
      <div className=' relative my-5 -top-10 mx-auto justify-center w-full  items-end text-left text-white'>
        <div className='text-5xl mb-5 font-bold'><p>
          FESTIVAL <br /> GADJAH MADA </p></div>
        <div className='text-xl w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tellus nulla, porta vel consectetur et,
         mattis quis orci. In hac habitasse platea dictumst. Sed eget tincidunt risus. Mauris nec luctus sapien, eu cursus diam.</div>

      </div>  
      <img className=' relative my-5 -top-10 mx-auto justify-center w-2/5 items-center text-left text-white' src={Logo}>



      </img>  
      </div>
    </div>
  )
}

export default tentang