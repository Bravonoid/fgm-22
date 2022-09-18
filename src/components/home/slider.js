import React, {useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataTanggalEvent } from '../../assets/data/home/dataTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDiscord, faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, 
    faLine, faLinkedin, faSteam, faTiktok, faTwitter, faTwitterSquare, faUssunnah, faWhatsapp, faYoutube, faGmail } from '@fortawesome/free-brands-svg-icons';
import{faLocationDot, faCalendar} from '@fortawesome/free-solid-svg-icons';


const Sllider = () => { 
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  console.log(today)


  const TimelineCondition = (today) => {
    switch (today) {
      case "08/22/2022":
        return 1;
      case "08/23/2022":
        return 3;
      case "08/24/2022":
        return 3;
 

      default:
        break;
    }
  };

  console.log(TimelineCondition(today))


  var settings = {
    focusOnSelect: true,
    dots: false,
    
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1604,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    
  return (
   <div className=' overflow-hidden relative justify-center align-middle items-center  bg-transparent w-full'>
    <div className='w-4/5 sm:w-3/4 mx-auto '>
    <Slider {... settings}>
    {DataTanggalEvent.map((item) =>(
    <div className='card text-white mx-5'>
        <div className='card-top justify-center items-center '>
            <div className='bg-[#242424] justify-between flex-col flex items-start p-2 text-left mx-auto sm:h-72  h-[16rem] w-[16rem] sm:w-72'>
                <h1 className='text-2xl sm:text-4xl my-2 mx-4 font-bold  '>
                    {item.title}
                    <ul className='top-0  relative flex  h-1 w-full'>
                      <li className=' bg-fgm-merah-orange w-1/3'></li>
                      <li className=' bg-fgm-orange w-1/3'></li>

                      <li className=' bg-fgm-hijau w-1/3'></li>

                    </ul>
                </h1>
               
                <div className='relative my-5 mx-5 '>
         
                <p className=' items-start  py-2'> <FontAwesomeIcon icon={faLocationDot} size='2x' color='white' className='h-5 lg:h-6   mx-2 text-center transition-all'></FontAwesomeIcon>  {item.lokasi}</p>
                <p className='items-start py-2'><FontAwesomeIcon icon={faCalendar} size='2x' color='white' className='h-5 lg:h-6  mx-2  transition-all'></FontAwesomeIcon>{item.tanggal}</p>
                </div>
                
                </div>
           
        </div>
  
       

        

    </div>))}
    </Slider>
    </div>
    </div>
    
    
       
  )
}

export default Sllider