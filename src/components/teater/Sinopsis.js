import React from 'react'
import Pattern_bawah from '../../assets/home/teater/Pattern_bawah.svg'
import Judul_sinopsis from '../../assets/teater/judul-sinopsis.svg'
const trailer = () => {
  return (
    <div className=' bg-cover  text-white w-full h-full flex py-4  justify-start relative items-center  text-start align-start pl-3 pr-2 xl:pr-24  sm:pl-16 my-auto' >
      <div className='lg:w-3/4 xl:w-3/4  mx-6 md:ml-1 mb-6  md:mr-4 xl:-translate-y-10 sm:w-full w-full xl:mx-12'>
      <img className='  mt-2 sm:mt-6 h-14 mb-2 xl:h-24 pointer-events-none' src={Judul_sinopsis}></img>

      <p className='relative mt-5  text-base md:text-lg xl:text-2xl '>
      Manusia adalah makhluk multidimensi. Sejahat-jahat manusia, masih memiliki kebaikan. Sebaik-baik manusia, masih ada sisi kejahatan. 
      <br /> <br />  Konsekuensi dari multidimensional adalah adanya perubahan watak dari seorang manusia. Sewaktu manusia dapat jahat ketika memiliki perasaan tamak. Sewaktu manusia dapat baik hingga mampu menebarkan perasaan damai dan kenyamanan.
      <br /> <br />
Tamak, damai, dan kenyamanan merupakan emosi turunan dari enam (6) emosi dasar manusia.
      </p>
      <img className='hidden xl:inline-block mt-6 pointer-events-none' src={Pattern_bawah}>
      
      </img>
     </div>
     </div>
  )
}

export default trailer