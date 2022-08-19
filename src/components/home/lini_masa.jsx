import React from 'react'
import Pattern from '../../assets/home/linimasa/pattern-linimasa.svg'


const tentang = () => {
  return (
    <div className=' relative flex justify-center bg-cover h-screen   bg-[#171717]' style={{ backgroundImage: "url(" + Pattern + ")" }}>
      
    <div className=' relative my-5 mx-auto justify-center w-2/5 items-center text-left text-white'>
        <div className='text-5xl mb-5 font-bold'><p>
          FESTIVAL <br /> GADJAH MADA </p></div>
        <div className='text-xl w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tellus nulla, porta vel consectetur et,
         mattis quis orci. In hac habitasse platea dictumst. Sed eget tincidunt risus. Mauris nec luctus sapien, eu cursus diam.</div>

      </div>
    </div>
  )
}

export default tentang