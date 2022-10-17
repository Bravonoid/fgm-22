import React from 'react'
import { useState,useEffect } from 'react'
import MapTenant from './mapTenant'
import Foto from './Foto'
import Polygon from '../../../assets/Pasar-Rakyat/Polygon 1.svg'
import { Link } from 'react-router-dom'
import { Divide as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";

import './dropdown.css'
import MyDropdown from './Dropdown'
const Tenant = () => {
  const [teater, setTeater] = useState(true);
  const [trailer, setTrailer] = useState(false);
  const [sinopsis, setSinopsis] = useState(false);
  const [pemeran, setPemeran] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleTeater = () => {
    setNumber("1");


  };
  const handleTrailer = () => {
    setNumber("2");

  };
  const handleSinopsis = () => {

    setNumber("3");

  };
  const handlePemeran = () => {
    setNumber("4");

  };
  const handlePeralatan = () => {
    setNumber("5");

  };

    const [number,setNumber] = useState("1");
    const data = require("../../../assets/data/tenants/data.json");
   

    const [categoryName,setCategoryName] = useState("test");
    const [tenantLists,setTenantLists] = useState([]);


    useEffect(() => {
      

        switch (number) {
          case "1":
            setCategoryName("Hasil Karya Seni")
            break;
          case "2":
            setCategoryName( "Kecantikan");
            break;
          case "3":
            setCategoryName("Makanan dan Minuman")
            break;
          case "4":
            setCategoryName("Pakaian dan Aksesoris")
          case "5":
              setCategoryName("Peralatan dan Perabotan")
            break;
        }


      
        const tenantList = data.filter((tenant) => {
            if (tenant.category.toString() === number) {
              return tenant;
            } else if (tenant.category2 && tenant.category2.toString() === number) {
              tenant.category = tenant.category2;
              return tenant;
            }
          });
          setTenantLists(tenantList)
          if (!tenantList) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            return {
              notFound: true,
            };
          }
      }, [number]);

  return (
    <div className='w-full h-full bg-fgm-base'>
      <div className='grid  py-16 bg-fgm-base  justify-between  md:flex'>
      <div className='text-start order-first w-1/2  xl:order-first  items-start z-100  '>
         <ul className='hidden md:inline-block justify-center items-center w-full  gap-2 xl:text-xl 2xl:text-3xl h-full text-white text-lg sm:text-lg '>
         <Link to="/pasar-rakyat">
         <li onClick={handleTeater} className={' font-bold py-16 px-6 text-xl xl:text-3xl cursor-pointer transition-colors  ease-in-out duration-200  '}>
          <img className='h-7 inline-block mr-5' src={Polygon}>
          </img>
          Pasar Rakyat</li>
          </Link>
           <li onClick={handleTeater} className={number === "1" ?'  py-20 px-4 font-semibold bg-fgm-hijau transition-colors  ease-in-out duration-200 border-2 border-black ':"font-semibold px-4 border-[1px] border-black ease-in-out duration-200    py-10 bg-gray-500 cursor-pointer"}>HASIL KARYA SENI</li>
           <li onClick={handleTrailer} className={number === "2"?'  py-20 px-4 font-semibold bg-fgm-purple transition-colors ease-in-out duration-200 border-2  border-black':"font-semibold px-4 border-[1px] border-black ease-in-out duration-200  bg-gray-500 py-10 cursor-pointer"}>KECANTIKAN</li>  
           <li onClick={handleSinopsis} className={number === "3"?' py-20 px-4 font-semibold bg-fgm-orange transition-colors ease-in-out duration-200 border-2 border-black ':" font-semibold px-4 border-[1px] border-black ease-in-out duration-200       py-10 bg-gray-500 cursor-pointer"}>MAKANAN DAN MINUMAN</li>
           <li onClick={handlePemeran} className={number === "4"?'  py-20 px-4 font-semibold bg-fgm-merah-orange  transition-colors ease-in-out duration-200 border-2 border-black':" font-semibold px-4 border-[1px]  border-black  ease-in-out duration-200   py-10 bg-gray-500 cursor-pointer"}>PAKAIAN DAN AKSESORIS</li>
           <li onClick={handlePeralatan} className={number === "5"?'  py-20 px-4 font-semibold bg-fgm-hijau  transition-colors ease-in-out duration-200 border-2 border-black':" font-semibold px-4 border-[1px]  border-black  ease-in-out duration-200   py-10 bg-gray-500 cursor-pointer"}>PERALATAN <br className='2xl:hidden'/> DAN PERABOTAN</li>

   
         </ul>
         <div className="mb-0 px-10 outline-none">
          <Hamburger toggled={navbar} toggle={setNavbar} />
        </div>
        <CSSTransition
        in={navbar}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
        onEnter={() => setNavbar(true)}
        onExited={() => setNavbar(false)}
      >
         <ul className=' flex flex-col z-50 md:hidden w-[85%] absolute justify-center ml-5 mr-5 items-center  gap-2  text-white text-lg sm:text-lg  '>
           <li onClick={handleTeater} className={number === "1" ?'text-center  bg-fgm-hijau w-full ':"bg-fgm-merah-orange w-full text-center "}><p>HASIL KARYA SENI</p></li>
           <li onClick={handleTrailer} className={number === "2"?'text-center  bg-fgm-purple w-full ':"bg-fgm-merah-orange w-full text-center "}><p>KECANTIKANs</p></li>  
           <li onClick={handleSinopsis} className={number === "3"?'text-center  bg-fgm-orange w-full ':"bg-fgm-merah-orange w-full text-center "}><p>MAKANAN DAN MINUMAN</p></li>
           <li onClick={handlePemeran} className={number === "4"?'text-center bg-fgm-merah-orange w-full  ':"bg-fgm-merah-orange w-full text-center "}><p>PAKAIAN DAN AKSESORIS</p></li>
           <li onClick={handlePeralatan} className={number === "5"?'text-center bg-fgm-hijau w-full  ':"bg-fgm-merah-orange w-full text-center "}><p>PERALATAN DAN PERABOTAN</p></li>

         </ul> 
         </CSSTransition>
 
      
         
       </div>
      <div       className={'relative  w-full  md:h-screen  overflow-hidden ' }>
      {/* "fgm-merah-orange": "#E62C20",
				"fgm-purple": "#9C4A9A",
				"fgm-orange": "#F69722",
				"fgm-hijau": "#4A8068",
				"fgm-base" :"#171717",
				"fgm-base-terang":"#242424" */}
      
      <div         className={number === "1"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
        <Foto src ={"/img/kategori/karya_bg.png"} judul ="HASIL KARYA SENI" color="hijau"/> 

       </div>
       <div         className={number === "2"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
      
       <Foto src ={"/img/kategori/kecantikan_bg.png"} judul ="KECANTIKAN" color="purple" />
        </div>
        <div         className={number === "3"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
        
        <Foto src ={"/img/kategori/makanan_bg.png"} judul ="MAKANAN DAN MINUMAN" color="orange" />
        </div>
      <div       className={number === "4"? '  ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
   
      
      <Foto src ={"/img/kategori/pakaian.png"} judul ="PAKAIAN DAN AKSESORIS" color = "merah-orange"/>
       </div>
       <div       className={number === "5"? '  ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
   
      
      <Foto src ={"/img/kategori/peralatan.png"} judul ="PERALATAN DAN PERABOTAN" color="hijau" />
       </div>
      
       
       </div>
       
    
   
       </div>

        <MapTenant categoryName = {categoryName} tenantList = {tenantLists} ></MapTenant>

    </div>
  )
}

export default Tenant