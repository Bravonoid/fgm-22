import React, {useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataSliderTeater } from '../../assets/data/home/DataSliderTeater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tenant.css'
import Bgfoto from '../../assets/home/teater/teater.svg'
import Pattern_samping from '../../assets/home/teater/pattern-group.svg'
import Trailer from './trailer';
import Sinopsis from './Sinopsis'
import Pemeran from './Pemeran'
import Judul_teater from '../../assets/teater/judul teater.svg'
import { Link } from 'react-router-dom';



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
    <div className='grid bg-fgm-base-terang bg-cover mt-16 md:flex'  >
      
   <div       className={'relative  w-full md:w-3/4 h-[550px] xl:h-[750px]  overflow-hidden ' }>
   <div         className={trailer? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
    <Trailer/>
    </div>
    <div         className={sinopsis? ' ease-in-out duration-1000  transition-all w-full h-full bg-right bg-no-repeat  ' : 'hidden'} style={{ backgroundImage: `url(${Bgfoto})` }}>
     
     <Sinopsis/>
     </div>
     <div         className={pemeran? ' ease-in-out duration-1000  transition-all w-full h-full' : 'hidden'}>
     
     <Pemeran/>
     </div>
   <div       className={teater? ' relative ease-in-out duration-1000 ' : 'ease-in-out  duration-1000 relative left-[-100%] '}>
   <div className='absolute py-5 xl:py-20 mx-auto flex w-[90%] sm:w-[60%] md:w-[65%] xl:w-[55%] text-white flex-col-2  z-20'>
        <div className='w-full'>
        <div className='bg-fgm-base-terang xl:w-[80%] py-5 xl:pl-16 pr-4 px-4'>
          <img className='h-8 xl:h-12' src={Judul_teater}>
          </img>
          <p className='text-sm md:text-lg xl:text-2xl font-bold'>
            18 November 2022 | Taman Budaya Yogyakarta
          </p>
        </div>
        <div className='xl:w-full  xl:px-16  pl-8  sm:px-4 '>
        <h1 className='text-3xl underline md:text-4xl xl:text-5xl mt-3 font-bold'>
            AMONG DINO SUKMO
          </h1>
          <p className='  my-2  text-base md:text-lg xl:text-lg'>
          Wirama Bhatara Kertagama merupakan pementasan akulturasi budaya kontemporer dan tradisional yang menyajikan sebuah pertunjukan seni peran, tari, dan musik, yang nantinya akan dinarasikan oleh seorang dalang menggunakan wayang. Kata ‘Wirama’ diambil dari bahasa Sanskerta yang berarti ‘kidung’, ‘Bhatara’ memiliki arti ‘agung’, sedangkan “Kertagama” memiliki arti “negeri”. Dengan demikian, “Wirama Bhatara Kertagama” memiliki makna ‘kidung agung negeri’. 

Pementasan ini mengangkat tema keberagaman budaya Nusantara yang akan digambarkan melalui kisah kerajaan di Indonesia. Setiap kerajaan akan mewakili emosi dasar yang manusia miliki, seperti marah, sedih, bahagia, takut, jijik, dan terkejut. Pementasan ini akan dibawakan secara fragmentasi berdasarkan tiga kisah kerajaan Indonesia yaitu Kerajaan Singosari, Mataram, dan Majapahit. 
 
        
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
    
    <div className='text-start order-first  bg-fgm-base-terang md:order-last p-5 items-start z-100  '>
      <ul className='flex md:inline-block text-white justify-center items-center md:m-8 gap-2 md:text-3xl  text-lg sm:text-lg '>
        <li onClick={handleTeater} className={teater?' font-bold ':" hover:font-bold cursor-pointer"}>TEATER</li>
        <li onClick={handleTrailer} className={trailer?' font-bold ':" hover:font-bold cursor-pointer"}>TRAILER</li>


        <li onClick={handleSinopsis} className={sinopsis?' font-bold ':" hover:font-bold cursor-pointer"}>SINOPSIS</li>
        <Link to="/tiket">
        <li>TIKET</li>
        </Link>

      </ul>
      
    </div>
    <div className=' hidden md:flex  right-0  absolute bottom-[250px] justify-start  items-end'>
      <img className=' h-48 xl:h-72 mx-auto relative' src={Pattern_samping}>
      </img>

      </div>

    </div>
   
    
    
       
  )
}

export default Foto