import React from 'react'
import { useState,useEffect } from 'react'
import MapTenant from './mapTenant'
import Foto from './Foto'
import Polygon from '../../../assets/Pasar-Rakyat/Polygon 1.svg'
import { Link } from 'react-router-dom'
import { Divide as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
import DropdownIcon from '../../../assets/Pasar-Rakyat/kategori/dropdown.svg'
import { useParams } from 'react-router-dom'
import btn from "../../../assets/Pasar-Rakyat/home-pasar/btnPO.png";
import './dropdown.css'
import MyDropdown from './Dropdown'
const Dropdown = (navbar,setNavbar)=>{
  return (<li className="flex translate-x-32 -translate-y-[3rem] absolute z-[100] outline-none">
  <Hamburger toggled={navbar} toggle={setNavbar} />
</li>)
}


const Tenant = () => {
  const Params = useParams();
  let ID = Params.id;
  console.log(ID)
  if( ID == "1" ||ID == "2" ||ID == "3" ||ID == "4" ||ID == "5" )
  {
    ID = ID
  } else{
    ID = "1"
  }
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

    const [number,setNumber] = useState(ID);
    const data = require("../../../assets/data/tenants/data copy.json");
   

    const [categoryName,setCategoryName] = useState("test");
    const [tenantLists,setTenantLists] = useState([]);
    const handleNav = () => {
      setNavbar(!navbar);
    };

    useEffect(() => {
      

        switch (number) {
          case "1":
            setCategoryName("Makanan")
            break;
          case "2":
            setCategoryName( "Minuman");
            break;
          case "3":
            setCategoryName("Aksesoris ")
            break;
          case "4":
            setCategoryName("Pakaian")
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
    
      <div className='grid  py-16  bg-fgm-base  justify-between  md:flex'>
      <Link to="/pasar-rakyat/pre-order">
					<img
						src={btn}
						className="fixed p-4 right-0 bottom-0 z-50"
						alt=""
					/>
					</Link>
      <div className='text-start order-first w-1/2  xl:order-first  items-start z-100  '>
         <ul className='hidden md:inline-block justify-center items-center w-full  gap-2 text-xl md:text-2xl xl:text-3xl h-[89vh] text-white'>
         <Link to="/pasar-rakyat">
         <li onClick={handleTeater} className={' h-1/6 font-bold flex items-center justify-start px-6 text-xl xl:text-3xl cursor-pointer transition-colors  ease-in-out duration-200  '}>
          <img className='h-7 inline-block mr-5 pointer-events-none' src={Polygon}>
          </img>
          Pasar Rakyat</li>
          </Link>
           <li onClick={handleTeater} className={number === "1" ?'  h-2/6 flex my-auto px-5 items-center justify-start py-auto font-bold bg-fgm-hijau transition-colors  ease-in-out duration-200 border-2 border-black ':"h-1/6 font-semibold px-4 border-[1px] border-black ease-in-out duration-200    py-10 bg-gray-500 cursor-pointer"}> <p>MAKANAN</p></li>
           <li onClick={handleTrailer} className={number === "2"?'  h-2/6 flex my-auto px-5 items-center justify-start py-auto  font-bold bg-fgm-purple transition-colors ease-in-out duration-200 border-2  border-black':"h-1/6 font-semibold px-4 border-[1px] border-black ease-in-out duration-200  bg-gray-500 py-10 cursor-pointer"}>MINUMAN</li>  
           <li onClick={handleSinopsis} className={number === "3"?' h-2/6 flex my-auto px-5 items-center justify-start py-auto  font-bold bg-fgm-orange transition-colors ease-in-out duration-200 border-2 border-black ':" h-1/6 font-semibold px-4 border-[1px] border-black ease-in-out duration-200       py-10 bg-gray-500 cursor-pointer"}> AKSESORIS</li>
           <li onClick={handlePemeran} className={number === "4"?'  h-2/6 flex my-auto px-5 items-center justify-start py-auto  font-bold bg-fgm-merah-orange  transition-colors ease-in-out duration-200 border-2 border-black':"h-1/6 font-semibold px-4 border-[1px]  border-black  ease-in-out duration-200   py-10 bg-gray-500 cursor-pointer"}>PAKAIAN</li>

   
         </ul>
         
        <div>
        <ul className=' mt-8 flex flex-col z-50 md:hidden w-full absolute justify-center font-bold  items-center    text-white text-xl sm:text-3xl  '>
       
          {        number ==="1"?   <li onClick={handleTeater} className={number === "1" ?'text-center h-16 pt-4  bg-fgm-hijau w-full order-1 ':"order-2 w-full text-center "}><div className='flex   justify-between mx-8 '>MAKANAN <div className='flex  items-center justify-start'> { number ==="1"?   <img src={DropdownIcon}  onClick={setNavbar} /> :<></>}</div></div></li>:<></>}
          {        number ==="2"?<li onClick={handleTrailer} className={number === "2"?'text-center h-16 pt-4 order-1  bg-fgm-purple w-full ':" w-full  order-3 text-center "}><div className='flex  justify-between mx-8 '>MINUMAN<div className='flex  items-center justify-start'> { number ==="2"?   <img src={DropdownIcon}  onClick={setNavbar} /> :<></>}</div></div></li>  :<></>}
           {        number ==="3"?<li onClick={handleSinopsis} className={number === "3"?'text-center h-16 pt-4 order-1  bg-fgm-orange w-full ':"w-full   order-4 text-center "}><div className='flex  justify-between mx-8 '>AKSESORIS <div className='flex  items-center justify-start'> { number ==="3"?   <img src={DropdownIcon}  onClick={setNavbar} /> :<></>}</div></div></li>:<></>}
           {        number ==="4"?<li onClick={handlePemeran} className={number === "4"?'text-center  h-16 pt-4 order-1 bg-fgm-merah-orange w-full ':"  order-5 w-full text-center "}><div className='flex  justify-between mx-8 '>PAKAIAN <div className='flex  items-center justify-start'> { number ==="4"?   <img src={DropdownIcon}  onClick={setNavbar} />:<></>}</div></div></li>:<></>}

         </ul> 
        </div>
        <CSSTransition
        in={navbar}
        

        unmountOnExit
        onEnter={() => setNavbar(true)}
        onExited={() => setNavbar(false)}
      >
         <ul className='mt-8 flex flex-col z-50 md:hidden w-full absolute justify-center items-center  text-black font-semibold text-xl sm:text-3xl  '>
         
           <li onClick={handleTeater} className={number === "1" ?'  bg-fgm-hijau  h-16 pt-4 text-white w-full order-1 cursor-default':"order-2 h-[3rem] pt-3 sm:h-16 cursor-pointer w-full bg-gray-100 "}><div className='flex justify-between mx-8'>MAKANAN<div className='flex  items-center justify-start '> { number ==="1"?   <img src={DropdownIcon} className="cursor-pointer" onClick={handleNav} /> :<></>}</div></div></li>
           <li onClick={handleTrailer} className={number === "2"?'  order-1  h-16 pt-4  text-white bg-fgm-purple w-full cursor-default ':" w-full h-[3rem] sm:h-16  pt-3 cursor-pointer order-3  bg-gray-200 "}><div className='flex justify-between mx-8  '>MINUMAN <div className='flex  items-center justify-start'> { number ==="2"?   <img src={DropdownIcon} className="cursor-pointer" onClick={handleNav} /> :<></>}</div></div></li>
           <li onClick={handleSinopsis} className={number === "3"?'  order-1 h-16 pt-4 text-white  bg-fgm-orange w-full cursor-default ':"w-full  h-[3rem] sm:h-16 pt-3 cursor-pointer order-4 bg-gray-300  "}><div className='flex justify-between mx-8  '> AKSESORIS<div className='flex  items-center justify-start'> { number ==="3"?   <img src={DropdownIcon} className="cursor-pointer" onClick={handleNav} /> :<></>}</div></div></li>
           <li onClick={handlePemeran} className={number === "4"?'   order-1  h-16 pt-4 text-white bg-fgm-merah-orange w-full cursor-default':" h-[3rem] sm:h-16 pt-3 cursor-pointer order-5 w-full bg-gray-400 "}><div className='flex justify-between mx-8  '>PAKAIAN<div className='flex  items-center justify-start'> { number ==="4"?   <img src={DropdownIcon} className="cursor-pointer" onClick={handleNav} /> :<></>}</div></div></li>

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
        <Foto src ={"/img/kategori/makanan_bg.png"} judul ="MAKANAN" color="hijau"/> 

       </div>
       <div         className={number === "2"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
      
       <Foto src ={"/img/kategori/minuman.png"} judul ="MINUMAN" color="purple" />
        </div>
        <div         className={number === "3"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
        
        <Foto src ={"/img/kategori/aksesori.png"} judul =" AKSESORIS" color="orange" />
        </div>
      <div       className={number === "4"? '  ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
   
      
      <Foto src ={"/img/kategori/pakaian.png"} judul ="PAKAIAN" color = "merah-orange"/>
       </div>
       
      
       
       </div>
       
    
   
       </div>

        <MapTenant categoryName = {categoryName} tenantList = {tenantLists} ></MapTenant>

    </div>
  )
}

export default Tenant