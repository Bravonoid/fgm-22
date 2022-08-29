import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, faLine, faLinkedin, faSteam, faTiktok, faTwitter, faTwitterSquare, faUssunnah, faWhatsapp, faYoutube, faGmail } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo_fgm.svg';
import festival_footer from '../assets/footer/festival-gm-footer.svg';
import ornament_footer from '../assets/footer/ornament-footer.svg';
import ikuti_footer from '../assets/footer/ikuti-kami-footer.svg';
import sitemap_footer from '../assets/footer/sitemap-footer.svg';



import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer className=" bg-black ">
        <div className='flex flex-row'>
        <img className='hidden xl:block md:scale-50 lg:scale-75 xl:scale-100 absolute w-auto h-auto' src={ornament_footer} >

        </img>
    <div className="container mx-auto py-32 px-2 text-left sm:w-auto lg:w-full">
        <div className="flex mobile:flex-col sm:flex-col sm:gap-8 md:gap-8 lg:flex-row justify-evenly mobile:text-2xl mobile:gap-8 lg:items-start gap-y-2 md:gap-0 mx-4">
            {/* Nesco dan sosmed */}
            <div className="flex flex-col items-center self-center lg:items-start lg:self-auto xl:ml-12">
                <div className="flex sm:flex-row sm:bottom-10 lg:flex-row items-center md:gap-10 mt-8 md:mt-0 lg:mb-4 lg:mr-10 lg:mt-6">
                    <img src={Logo} alt="" className='hidden lg:inline-flex lg:h-28 transition-all lg:scale-[1.4]' />
                    <img src={festival_footer} alt="" className='sm:h-auto sm:-top-8 md:my-auto lg:h-28 transition-all lg:scale-[1.4] lg:ml-10' />
                </div>
               
                <p className='text-xs content-left lg:text-sm text-white lg:mt-6'>&copy; IT FGM 2022</p>
            </div>
            {/* quick link */}
            <div className="flex flex-col gap-0.5 mobile:gap-2 text-white">
            <img src={sitemap_footer} alt="" className='h-10 mobile:h-auto mobile:mr-16 mobile:ml-4 sm:h-auto' />
            <div className="mobile:ml-4 flex flex-col mobile:gap-2 sm:gap-2">
                <Link to='/' className='text-sm sm:text-2xl hover:text-yellow-500'>Beranda</Link>
                <Link to='/' className='text-sm sm:text-2xl hover:text-yellow-500'>Tentang</Link>
                <Link to='/' className='text-sm sm:text-2xl hover:text-yellow-500'>Teater </Link>
                <Link to='/' className='text-sm sm:text-2xl hover:text-yellow-500'>Pasar Rakyat</Link>
                <Link to='/' className='text-sm sm:text-2xl hover:text-yellow-500'>Festival Seni</Link>
                <Link to='/' className='text-sm sm:text-2xl hover:text-yellow-500'>Tiket</Link>
            </div>
             
                
            </div>
            {/* kontak person whatsapp */}
            <div className="mobile:flex-wrap flex flex-col sm:gap-2 text-white text-sm sm:text-2xl">
            <img src={ikuti_footer} alt="" className='h-10 mobile:h-auto mobile:mr-10 mobile:gap-4 mobile:ml-4 mobile:mb-2 sm:h-auto' />
            <div className="mobile:ml-4 flex flex-col mobile:gap-2 sm:gap-2">
               <a href={"https://www.instagram.com/festivalgadjahmada"} rel='noreferrer' target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size='2x' color='white' className='h-5 lg:h-6 hover:text-yellow-500  transition-all'></FontAwesomeIcon>  @festivalgadjahmada </a> 
                <a href={"https://www.tiktok.com/@festivalgadjahmada?lang=id-ID"} rel='noreferrer' target="_blank">
                        <FontAwesomeIcon icon={faTiktok} size='2x' color='white' className='h-5 lg:h-6  hover:text-yellow-500  transition-all'></FontAwesomeIcon> @festivalgadjahmada </a>
                <a href={"https://twitter.com/FGM_UGM"} rel='noreferrer' target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size='2x' color='white' className='h-5 lg:h-6 hover:text-yellow-500  transition-all'></FontAwesomeIcon>  @FGM_UGM 
                    </a>
                    </div>

                
            </div>
        </div>
    </div>
    </div>
</footer >
  )
}

export default footer