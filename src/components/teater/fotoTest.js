import React, {useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataSliderTeater } from '../../assets/data/home/DataSliderTeater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tenant.css'

import Trailer from './trailer';
import Sinopsis from './Sinopsis'
import Pemeran from './Pemeran'




const Foto = () => { 
  const [teater, setTeater] = useState(true);
  const [trailer, setTrailer] = useState(false);
  const [sinopsis, setSinopsis] = useState(false);
  const [pemeran, setPemeran] = useState(false);

  const handleTeater = () => {
    setTeater(true);
    setTrailer(false);
    setSinopsis(false);
    setPemeran(false);

  };
  const handleTrailer = () => {
    setTeater(false);
    setTrailer(true);
    setSinopsis(false);
    setPemeran(false);
  };
  const handleSinopsis = () => {

    setTeater(false);
    setTrailer(false);
    setSinopsis(true);
    setPemeran(false);
  };
  const handlePemeran = () => {
    setTeater(false);
    setTrailer(false);
    setSinopsis(false);
    setPemeran(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0, 0, 0.2, 1)",
    arrows: false,
    draggable: false,
    lazyLoad: "progressive",
  };

    
  return (
    <div className='grid md:flex'>
      
   <div       className={'relative  w-full md:w-3/4 h-[550px] xl:h-[750px]  overflow-hidden ' }>
   <div         className={trailer? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
    <Trailer/>
    </div>
    <div         className={sinopsis? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
     <Sinopsis/>
     </div>
     <div         className={pemeran? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
     <Pemeran/>
     </div>
   <div       className={teater? ' relative ease-in-out duration-1000 ' : 'ease-in-out  duration-1000 relative left-[-100%] '}>
   <div className='absolute py-5 xl:py-20 mx-auto grid w-full  grid-cols-2 z-20'>
        <div>
        <div className='bg-white xl:w-full py-5 xl:px-16  px-4'>
          <h1 className='text-xl xl:text-3xl  font-bold'>
            TEATER
          </h1>
          <p className=' text-sm xl:text-2xl font-bold'>
            18 November 2022 | Taman Budaya Yogyakarta
          </p>
        </div>
        <div className='xl:w-full bg-white xl:px-16  px-4 '>
        <h1 className='text-2xl xl:text-5xl mt-3 font-bold'>
            AMONG DINO SUKMO
          </h1>
          <p className=' my-2 text-sm xl:text-2xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        
          </p>
        </div>
        </div>
        
       
      </div>


    <Slider {... settings}>
    {DataSliderTeater.map((item) =>(
      <>
      
  

                <div className='bg-cover bg-center  w-full h-[550px] xl:h-[750px] relative ' style={ {backgroundImage: `url('/img/${item.img}')`}}> 
               
                </div>
                </>
       ))}
    </Slider>

   

    </div>
    
   
    
    </div>
    
    <div className='text-start order-first md:order-last p-5 items-start z-100  '>
      <ul className='flex md:inline-block justify-center items-center md:m-8 gap-2 md:text-3xl text-lg '>
        <li onClick={handleTeater} className={teater?' font-bold ':" hover:font-bold cursor-pointer"}>TEATER</li>
        <li onClick={handleTrailer} className={trailer?' font-bold ':" hover:font-bold cursor-pointer"}>TRAILER</li>


        <li onClick={handleSinopsis} className={sinopsis?' font-bold ':" hover:font-bold cursor-pointer"}>SINOPSIS</li>
        <li onClick={handlePemeran} className={pemeran?' font-bold ':" hover:font-bold cursor-pointer"}>PEMERAN</li>

        <li>TIKET</li>

      </ul>
    </div>

    </div>
   
    
    
       
  )
}

export default Foto