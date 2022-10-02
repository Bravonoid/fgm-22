import React from 'react'
import Template from '../../../assets/Pasar-Rakyat/Rectangle_233.svg'


const foto = ({src,judul}) => {


  return (
    <div className='bg-gray-500 w-screen h-[89%] flex  justify-start relative items-end   my-auto' src={ process.env.PUBLIC_URL + Template}>
     <div className='p-16 text-5xl flex w-2/3 text-white font-bold'>
     <span>{judul}</span> <div className={` hidden  md:inline-block bg-fgm-merah-orange my-auto ml-5 md:w-1/3 mr-3 w-1/3 h-8`}></div>
      
   
     
     
     
     </div>
     </div>
  )
}

export default foto