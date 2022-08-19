import React from 'react';
import Logo from '../assets/logo_fgm.svg';


const navbar = () => {
  return (
    <>
      <nav
        id="nav-trans"
        style={{ zIndex: "100" }}
        class="fixed navbar flex items-center justify-between flex-wrap shadow-lg text-fgmBlack w-screen bg-white p-3 pl-2"
      >
        <div className="flex items-center flex-shrink-0 px-2 mx-2">
          <div className="h-12 w-12">
            <Link href="/">
              <Image
                src={Logo}
                className="hover:cursor-pointer"
                alt="Logo Festival Gadjah Mada"
              />
            </Link>
          </div>
          <Link href="/" className="text-lg">
            Festival Gadjah Mada
          </Link>
        </div>
        <div class="block lg:hidden mx-2">
          <button
            class="flex items-center px-3 py-2 border rounded"
            onClick={() => setNavbar(!navbar)}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      <div className='w-full h-16 bg-black relative top-0 items-center px-10 text-white justify-end flex'>
        <ul className='flex justify-between mx-10 gap-36 text-2xl '>
            <li >Beranda</li>
            <li>Event</li>
            <li>Ticket</li>

            </ul></div>
      </nav>
    </>
  )
}

export default navbar;
