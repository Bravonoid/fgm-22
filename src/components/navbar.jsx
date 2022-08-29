
import React, {useState} from 'react';
import Logo from '../assets/home/logo-navbar.svg'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
      <div className='w-full h-16 bg-black relative flex text-white justify-between'>
        <div className="flex items-center flex-shrink-0 px-[10px] py-[10px] ml-8">
          <div className="h-full w-full">
              <img src={Logo} alt="Logo" className="hover:cursor-pointer" />
          </div>
        </div>
        <ul className='flex items-center justify-between mx-10 gap-20 text-xl hover:cursor-pointer sm:hidden lg:flex lg:ml-auto py-2'>
            <li className="hover:bg-pattern hover:bg-cover p-4">Beranda</li>
            <li className="hover:bg-pattern hover:bg-cover p-4">Tentang</li>
            <li className="hover:bg-pattern hover:bg-cover p-4">Event</li>
            <li className="hover:bg-pattern hover:bg-cover p-4">Ticket</li>
        </ul>
        <div className="lg:hidden items-center">
						<button onClick={() => setNavbar(!navbar)} className="outline-none items-center my-[20px]">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>

				</div>
        <div className={`${navbar?"absolute":"hidden"}`} >
          <ul className="flex flex-col w-screen h-screen bg-black mt-16 absolute z-50">
            <li className="active"><a href=" " className="block text-sm px-2 py-4 text-white font-semibold">Beranda</a></li>
            <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Tentang</a></li>
            <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Event</a></li>
            <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Ticket</a></li>
          </ul>
			  </div>
      </div>
  )
}

export default Navbar;
