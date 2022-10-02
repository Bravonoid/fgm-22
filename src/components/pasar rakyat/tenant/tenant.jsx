import React from 'react'
import { useState,useEffect } from 'react'
import MapTenant from './mapTenant'
import Foto from './Foto'
import Polygon from '../../../assets/Pasar-Rakyat/Polygon 1.svg'
import { Link } from 'react-router-dom'

const Tenant = () => {
  const [teater, setTeater] = useState(true);
  const [trailer, setTrailer] = useState(false);
  const [sinopsis, setSinopsis] = useState(false);
  const [pemeran, setPemeran] = useState(false);

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

    const [number,setNumber] = useState("1");
    const data = require("../../../assets/data/tenants/data.json");
   

    const [categoryName,setCategoryName] = useState("test");
    const [tenantLists,setTenantLists] = useState([]);


    useEffect(() => {
      

        switch (number) {
          case "1":
            setCategoryName("Fashion")
            break;
          case "2":
            setCategoryName( "Aksesoris");
            break;
          case "3":
            setCategoryName("Kain")
            break;
          case "4":
            setCategoryName("Food and Beverages")
            break;
        }


        console.log(number)
      
        const tenantList = data.filter((tenant) => {
            if (tenant.category.toString() === number) {
              return tenant;
            } else if (tenant.category2 && tenant.category2.toString() === number) {
              tenant.category = tenant.category2;
              return tenant;
            }
          });
          console.log(data)
          setTenantLists(tenantList)
          if (!tenantList) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            return {
              notFound: true,
            };
          }
      }, [number]);
      console.log(tenantLists)

  return (
    <div className='w-full h-full bg-fgm-base'>
      <div className='grid  py-16 bg-fgm-base  justify-between  xl:flex'>
      <div className='text-start order-first xl:order-first p-5 items-start z-100  '>
         <ul className=' hidden xl:inline-block justify-center items-center xl:m-8 gap-2 xl:text-3xl text-white text-lg sm:text-lg '>
         <Link to="/pasar-rakyat">
         <li onClick={handleTeater} className={' font-bold py-16 px-6 text-3xl cursor-pointer transition-colors  ease-in-out duration-200  '}>
          <img className='h-7 inline-block mr-5' src={Polygon}>
          </img>
          Pasar Rakyat</li>
          </Link>
           <li onClick={handleTeater} className={number === "1" ?'  py-16 px-6 font-semibold bg-fgm-merah-orange transition-colors  ease-in-out duration-200 border-2 border-black ':"font-semibold px-6 border-[1px] border-black ease-in-out duration-200    py-8 bg-gray-500 cursor-pointer"}>HASIL KARYA SENI</li>
           <li onClick={handleTrailer} className={number === "2"?'  py-16 px-6 font-semibold bg-fgm-merah-orange  transition-colors ease-in-out duration-200 border-2  border-black':"font-semibold px-6 border-[1px] border-black ease-in-out duration-200  bg-gray-500 py-8 cursor-pointer"}>KECANTIKAN</li>  
           <li onClick={handleSinopsis} className={number === "3"?' py-16 px-8 font-semibold bg-fgm-merah-orange transition-colors ease-in-out duration-200 border-2 border-black ':" font-semibold px-6 border-[1px] border-black ease-in-out duration-200       py-8 bg-gray-500 cursor-pointer"}>MAKANAN DAN MINUMAN</li>
           <li onClick={handlePemeran} className={number === "4"?'  py-16 px-8 font-semibold bg-fgm-merah-orange  transition-colors ease-in-out duration-200 border-2 border-black':" font-semibold px-6 border-[1px]  border-black  ease-in-out duration-200   py-8 bg-gray-500 cursor-pointer"}>PAKAIAN DAN AKSESORIS</li>
   
         </ul>
         <ul className=' flex xl:hidden justify-center items-center xl:m-8 gap-2 xl:text-3xl text-white text-lg sm:text-lg '>
         <li onClick={handleTeater} className={number === "5" ?' font-bold text-black py-8 ':" hover:font-bold cursor-pointer text-black"}>HASIL KARYA SENI</li>

           <li onClick={handleTeater} className={number === "1" ?' font-bold  bg-fgm-merah-orange transition-colors  ease-in-out duration-200 border-2 border-black ':" px-6 border-[1px] border-black ease-in-out duration-200 hover:font-bold py-8 bg-gray-500 cursor-pointer"}>HASIL KARYA SENI</li>
           <li onClick={handleTrailer} className={number === "2"?' font-bold bg-fgm-merah-orange  transition-colors ease-in-out duration-200 border-2  border-black  ':" px-6 border-[1px] border-black ease-in-out duration-200 hover:font-bold bg-gray-500 py-8 cursor-pointer"}>KECANTIKAN</li>  
           <li onClick={handleSinopsis} className={number === "3"?'font-bold bg-fgm-merah-orange transition-colors ease-in-out duration-200 border-2 border-black ':" pl-6 pr-8  border-[1px] border-black ease-in-out duration-200 hover:font-bold py-8 bg-gray-500 cursor-pointer"}>MAKANAN DAN MINUMAN</li>
           <li onClick={handlePemeran} className={number === "4"?' font-bold bg-fgm-merah-orange  transition-colors ease-in-out duration-200 border-2 border-black':" px-6 border-[1px]  border-black  ease-in-out duration-200 hover:font-bold py-8 bg-gray-500 cursor-pointer"}>PAKAIAN DAN AKSESORIS</li>
   
         </ul> 

         
       </div>
      <div       className={'relative  w-full xl:w-2/3 xl:h-screen  overflow-hidden ' }>
      
      <div         className={number === "1"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
        <Foto src ={"/img/hero1.png"} judul ="HASIL KARYA SENI"/>

       </div>
       <div         className={number === "2"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
      
       <Foto src ={"/img/hero1.png"} judul ="KECANTIKAN"/>
        </div>
        <div         className={number === "3"? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
        
        <Foto src ={"/img/hero1.png"} judul ="MAKANAN DAN MINUMAN"/>
        </div>
      <div       className={number === "4"? '  ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
   
      
      <Foto src ={"/img/hero1.png"} judul ="PAKAIAN DAN AKSESORIS"/>
       </div>
       
      
       
       </div>
       
    
   
       </div>

        <MapTenant categoryName = {categoryName} tenantList = {tenantLists} ></MapTenant>

    </div>
  )
}

export default Tenant