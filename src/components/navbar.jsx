import React, { useState } from "react";
import Logo from "../assets/home/logo-navbar.svg";
import logo from "../assets/logo_fgm.svg";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<div className="relative flex h-[72px] justify-between bg-black py-4 px-4 text-white">
			<div className="my-auto ml-4 flex flex-shrink-0 items-center px-[10px]">
				<div className="h-full w-full">
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
			<ul className="mx-10 flex h-full items-center justify-between gap-16 py-2 text-xl sm:hidden lg:ml-auto lg:flex mobile:hidden">
				<li className="w-28 cursor-pointer p-4 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Beranda
				</li>
				<li className="w-28 cursor-pointer p-4 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Tentang
				</li>
				<li className="w-28 cursor-pointer p-4 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Event
				</li>
				<li className="w-28 cursor-pointer p-4 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
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
