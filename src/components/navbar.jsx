import { motion } from "framer-motion"
import React, { useState } from "react";
import Logo from "../assets/home/logo-navbar.svg";
import logo from "../assets/logo_fgm.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
      <div className='w-full h-16 bg-black relative flex text-white justify-between'>
        <div className="flex items-center flex-shrink-0 px-[10px] py-[10px] ml-4">
          <div className="h-full w-full">
              <img src={Logo} alt="Logo" className="mobile:hidden hover:cursor-pointer" />
              <img src={logo} alt="Logo" className="sm:hidden h-12 hover:cursor-pointer" />
          </div>
        </div>
        <ul className='flex items-center justify-between mx-10 gap-16 text-xl hover:cursor-pointer mobile:hidden  sm:hidden lg:flex lg:ml-auto py-2'>
            <li className="hover:bg-pattern hover:bg-cover p-4">Beranda</li>
            <li className="hover:bg-pattern hover:bg-cover p-4">Tentang</li>
            <li className="hover:bg-pattern hover:bg-cover p-4">Event</li>
            <li className="hover:bg-pattern hover:bg-cover p-4">Ticket</li>
        </ul>
        <div className="lg:hidden items-center">
						<button onClick={() => setNavbar(!navbar)} className="outline-none items-center my-[20px] mr-4">
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

	const [navbar, setNavbar] = useState(false);
6b0049356130997fa4182c1bd95a31d1a024de7a

	return (
		<div className="relative flex h-[70px] justify-between bg-black py-4 px-4 text-white">
			<div className="mx-14 flex flex-shrink-0 items-center px-[36px]">
				<div className="h-full w-full pb-[3.05rem]">
					<img
						src={Logo}
						alt="Logo"
						className="hover:cursor-pointer mobile:hidden"
					/>
					<img
						src={logo}
						alt="Logo"
						className="h-12 hover:cursor-pointer sm:hidden"
					/>
				</div>

        <div className={`${navbar?"fixed z-50 scale-x-100":"hidden"}`} >
          <ul className="flex flex-col w-screen h-screen bg-black mt-16 absolute z-50 gap-28">
            <li className="active"><a href=" " className="block text-2xl px-2 py-4 text-white font-semibold">Beranda</a></li>
            <li><a href="#services" className="block text-2xl px-2 py-4 hover:bg-green-500 transition duration-300">Tentang</a></li>
            <li><a href="#about" className="block text-2xl px-2 py-4 hover:bg-green-500 transition duration-300">Event</a></li>
            <li><a href="#contact" className="block text-2xl px-2 py-4 hover:bg-green-500 transition duration-300">Ticket</a></li>
          </ul>
			  </div>
      </div>
  )
}

			</div>
			<ul className="mx-12 flex h-full items-center justify-between gap-16 py-2 text-xl sm:hidden lg:ml-auto lg:flex mobile:hidden">
				<li className="w-28 cursor-pointer p-6 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Beranda
				</li>
				<li className="w-28 cursor-pointer p-6 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Tentang
				</li>
				<li className="w-28 cursor-pointer p-6 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Event
				</li>
				<li className="w-28 cursor-pointer p-6 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Ticket
				</li>
			</ul>
			<div className="items-center lg:hidden">
				<button
					onClick={() => setNavbar(!navbar)}
					className="my-[20px] items-center outline-none"
				>
					<svg
						className=" h-6 w-6 text-gray-500 hover:text-green-500"
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
			<div className={`${navbar ? "absolute" : "hidden"}`}>
				<ul className="absolute z-50 mt-16 flex h-screen w-screen flex-col bg-black">
					<li className="active">
						<a
							href=" "
							className="block px-2 py-4 text-sm font-semibold text-white"
						>
							Beranda
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
						>
							Tentang
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
						>
							Event
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
						>
							Ticket
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
