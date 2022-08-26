import React, {useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DatadigitalBestSeller } from '../../assets/data/home/dataTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDiscord, faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, 
    faLine, faLinkedin, faSteam, faTiktok, faTwitter, faTwitterSquare, faUssunnah, faWhatsapp, faYoutube, faGmail } from '@fortawesome/free-brands-svg-icons';


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







    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: `${TimelineCondition(today)}`,
        responsive: [
          {
            breakpoint: 1304,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    <div className='w-3/4 mx-auto '>
    <Slider {... settings}>
    {DatadigitalBestSeller.map((item) =>(
    <div className='card text-white mx-5'>
        <div className='card-top justify-center items-center '>
            <div className='bg-[#242424] justify-between flex-col flex items-start text-left mx-auto h-72 w-72'>
                <h1 className='text-4xl my-5 mx-5 font-bold  '>
                    {item.title}
                </h1>
                <div className='relative my-5 mx-5 '>
         
                <h3> <FontAwesomeIcon icon={faTwitter} size='2x' color='white' className='h-5 lg:h-6 hover:text-yellow-500  transition-all'></FontAwesomeIcon>  {item.price}</h3>
                <p>{item.category}</p>
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