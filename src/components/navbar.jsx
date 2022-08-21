import React from 'react';
import Logo from '../assets/logo_fgm.svg';


const navbar = () => {
  return (
      <div className='w-full h-16 bg-black relative top-0 items-center px-10 text-white justify-end flex'>
        <div className="flex items-center flex-shrink-0 px-2 mx-[525px] text-2xl">
          <div className="h-12 w-12">
              <img src={Logo} alt="Logo" className="h-12 w-12 hover:cursor-pointer" />
            </div>
          <a href="/" className="text-lg hover:bg-red-500 rounded-full text-left p-2">
            Festival Gadjah Mada
          </a>
        </div>
        <ul className='flex justify-between mx-10 gap-36 text-2xl hover:cursor-pointer'>
            <li className="hover:bg-red-500 rounded-full p-2">Beranda</li>
            <li className="hover:bg-red-500 rounded-full p-2">Event</li>
            <li className="hover:bg-red-500 rounded-full p-2">Ticket</li>

            </ul>
      </div>
  )
}

export default navbar;
