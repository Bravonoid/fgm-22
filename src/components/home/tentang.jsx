import React from 'react'
import Logo from '../../assets/logo_fgm.svg';
import gunungan from '../../assets/home/gunungan.svg';
import mozaik_horizontal from '../../assets/home/mozaik_horizontal.svg';
import rectangle_17 from '../../assets/home/rectangle-17.svg';
import rectangle_18 from '../../assets/home/rectangle-18.svg';



const tentang = () => {
  return (
    <div className='w-full h-[75vh] justify-end items-center  bg-[#1E1E1E]'>
      <img src={gunungan} className='absolute sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6' alt='gunungan'></img>
      <div className='grid relative sm:top-32 sm:-right-8 xl:-right-40 xl:top-48 xl:top-48 xl:ml-[50px] mx-auto grid-cols-2'>
      <div className='relative my-5 -top-10  w-full items-end text-left text-white sm:mb-[100px] xl:-top-16'>
        <div className='xl:text-5xl xl:mb-5 font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
        <img className='w-full' src={mozaik_horizontal} alt="mozaik"></img>
          <div className='flex sm:gap-1.5 md:gap-1'>
            <p>FESTIVAL </p>
            <img className='sm:w-48 md:w-56 lg:w-72' src={rectangle_17} alt="rectangle"></img>
          </div>
          <div className='flex sm:gap-1'>
            <p>GADJAH MADA</p>
            <img className='sm:w-[105px] md:w-32 lg:w-40' src={rectangle_18} alt="rectangle"></img>
          </div>
          </div>
        <div className='xl:text-xl xl:w-full sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tellus nulla, porta vel consectetur et,
         mattis quis orci. In hac habitasse platea dictumst. Sed eget tincidunt risus. Mauris nec luctus sapien, eu cursus diam.</div>
         <button className='border rounded-md px-[10px] mt-2 drop-shadow-2xl text-black bg-slate-300' >Selengkapnya</button>

      </div>  
      <img className=' sm:w-1/2 sm:top-1 sm:left-20 md:-top-0.5 lg:left-40 lg:w-2/5 relative xl:mb-1 xl:-top-20 justify-center xl:w-1/3 items-center text-left text-white' src={Logo} alt="logo">



      </img>  
      </div>
    </div>
  )
}

export default tentang
