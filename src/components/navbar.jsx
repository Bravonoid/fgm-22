import { motion } from "framer-motion"
import React, { useState } from "react";
import Logo from "../assets/home/logo-navbar.svg";
import logo from "../assets/logo_fgm.svg";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<div className="relative flex h-[70px] justify-between bg-black py-4 text-white">
			<div className="mx-14 flex flex-shrink-0 items-center px-[36px] mobile:mx-0 mobile:px-8">
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
			</div>
			<ul className="mx-12 flex h-full items-center justify-between gap-16 py-2 text-xl sm:hidden lg:ml-auto xl:flex mobile:hidden">
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
			<div className=" my-auto items-center xl:hidden mobile:block sm:block">
				<button
					onClick={() => setNavbar(!navbar)}
					className="my-0 outline-none px-4"
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
				<ul className="absolute z-50 mt-12 mx-0 flex h-full w-full flex-col bg-black mobile:items-center mobile:justify-evenly mobile:text-3xl mobile:fixed sm:fixed sm:justify-evenly sm:items-center sm:text-3xl">
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