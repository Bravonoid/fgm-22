import { motion } from "framer-motion";
import React, { useState } from "react";
import Logo from "../assets/home/logo-navbar.svg";
import logo from "../assets/logo_fgm.svg";
import './home/navbar.css';
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="flex h-[70px] justify-between bg-black py-4 text-white fixed w-full z-50">
      <div className="ml-14 flex flex-shrink-0 items-center px-[28px] mobile:mx-0 mobile:px-10">
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
      <ul className="mr-28 flex h-full items-center justify-between gap-5 text-xl sm:hidden lg:ml-auto xl:flex mobile:hidden">
        <a href="/">
          <li className="w-[8.1rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center">
            Beranda
          </li>
        </a>
        <a href="/about">
          <li className="w-[8.1rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center">
            Tentang
          </li>
        </a>
        <li className="mr-3 w-[8.1rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center">
          Teater
        </li>
        <li className="mr-7 w-[8.1rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center">
          Pasar Rakyat
        </li>
        <li className="w-[8.1rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center">
          Festival Seni
        </li>
        <li className="w-28 cursor-pointer p-6 text-center hover:bg-pattern hover:bg-cover hover:bg-center">
					Tiket
				</li>
      </ul>
      <div className=" my-auto items-center sm:block xl:hidden mobile:block">
        <button
          onClick={() => setNavbar(!navbar)}
          className="my-0 px-10 outline-none"
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
      <CSSTransition
        in={navbar}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
        onEnter={() => setNavbar(true)}
        onExited={() => setNavbar(false)}
        >
      {/* <div className={`${navbar ? "absolute" : "hidden"}`}> */}
        <ul className="z-50 mx-0 mt-12 flex h-full w-full flex-col bg-black sm:fixed sm:items-center sm:justify-evenly sm:text-3xl mobile:fixed mobile:items-center mobile:gap-10 mobile:text-3xl">
          <li className="active">
            <a
              href=" "
              className="block px-2 py-4 text-2xl font-bold text-white"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Teater
            </a>
          </li>
		  <li>
            <a
              href="#about"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Pasar Rakyat
            </a>
          </li>
		  <li>
            <a
              href="#about"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Festival Seni
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Ticket
            </a>
          </li>
        </ul>
      {/* </div> */}
      </CSSTransition>
    </div>
  );
};

export default Navbar;
