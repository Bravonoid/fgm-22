import React from 'react';
import Logo from '../assets/home/logo-navbar.svg';


const navbar = () => {
  return (
      <div className='w-full h-16 bg-black relative top-0 items-center px-10 text-white justify-end flex'>
        <div className="flex items-center flex-shrink-0 px-2 mx-[300px]">
          <div className="h-full w-full">
              <img src={Logo} alt="Logo" className="hover:cursor-pointer" />
          </div>
        </div>
        <ul className='flex justify-between mx-10 gap-20 text-xl hover:cursor-pointer'>
            <li className="hover:bg-red-500 rounded-full p-2">Beranda</li>
            <li className="hover:bg-red-500 rounded-full p-2">Tentang</li>
            <li className="hover:bg-red-500 rounded-full p-2">Event</li>
            <li className="hover:bg-red-500 rounded-full p-2">Ticket</li>

            </ul>
      </div>
  )
}

export default navbar;
