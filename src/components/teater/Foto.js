import React, {useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataSliderTeater } from '../../assets/data/home/DataSliderTeater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tenant.css'
import { faDiscord, faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, 
    faLine, faLinkedin, faSteam, faTiktok, faTwitter, faTwitterSquare, faUssunnah, faWhatsapp, faYoutube, faGmail } from '@fortawesome/free-brands-svg-icons';
import{faLocationDot, faCalendar} from '@fortawesome/free-solid-svg-icons';


const Foto = () => { 


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
    <div className='flex'>
   <div       className="relative  w-full md:w-3/4   overflow-hidden">


    <Slider {... settings}>
    {DataSliderTeater.map((item) =>(
      <>
      
  
            <img className=''  src={`${process.env.PUBLIC_URL}/img/${item.img}`}>

                </img>
                
                </>
       ))}
    </Slider>
    
    </div>
    
    <div className='text-start p-5 items-start '>
      <ul className='text-md'>
        <li className='hover:font-bold cursor-pointer '>TEATER</li>
        <li>TRAILER</li>


        <li>SINOPSIS</li>
        <li>PEMERAN</li>
        <li>TIKET</li>

      </ul>
    </div>

    </div>
   
    
    
       
  )
}

export default Foto