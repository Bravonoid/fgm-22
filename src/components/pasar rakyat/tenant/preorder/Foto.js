import React from 'react'


const foto = ({src,judul,color}) => {


  return (
    <>
    <div className='flex h-[89vh] md:w-[70vw] md:h-[89%] w-[100vw] bg-center justify-start relative items-end bg-cover  my-auto' style={ {backgroundImage: `url(${src})`}}> 
     <div className='sm:p-16 p-8 text-5xl flex  w-full text-white font-bold'>
     <span>{judul}</span> <div className={` hidden  md:inline-block bg-fgm-${color} my-auto ml-5 md:w-1/3 mr-3 w-1/3 h-8`}></div>
      
   
     
     
     
     </div>
     </div>
     
    
     </>
  )
}

export default foto