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
    <footer className=" bg-black">
        <img className='absolute ' src={ornament_footer} >

        </img>
    <div className="container mx-auto py-32 px-2 text-left">
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-start gap-y-2 md:gap-0 mx-4">
            {/* Nesco dan sosmed */}
            <div className="flex flex-col items-center self-center lg:items-start lg:self-auto">
                <div className="flex items-center gap-10 mt-8 md:mt-0 lg:mb-4">
                    <img src={Logo} alt="" className='h-10 lg:h-32  transition-all' />
                    <img src={festival_footer} alt="" className='h-10 lg:h-32  transition-all' />
                </div>
               
                <p className='text-xs lg:text-sm text-white lg:mt-4'>&copy; IT FGM 2022</p>
            </div>
            {/* quick link */}
            <div className="flex flex-col gap-0.5 lg:gap-2 text-white">
            <img src={sitemap_footer} alt="" className='h-10 lg:h-auto   ' />
                <Link to='/' className='text-sm lg:text-xl hover:text-yellow-500'>Beranda</Link>
                <Link to='/' className='text-sm lg:text-xl hover:text-yellow-500'>Tentang</Link>
                <Link to='/' className='text-sm lg:text-xl hover:text-yellow-500'>Teater </Link>
                <Link to='/' className='text-sm lg:text-xl hover:text-yellow-500'>Pasar Rakyat</Link>
                <Link to='/' className='text-sm lg:text-xl hover:text-yellow-500'>Festival Seni</Link>
                <Link to='/' className='text-sm lg:text-xl hover:text-yellow-500'>Tiket</Link>
             
                
            </div>
            {/* kontak person whatsapp */}
            <div className="flex flex-col gap-0.5 lg:gap-2 text-white text-sm lg:text-xl">
            <img src={ikuti_footer} alt="" className='h-10 lg:h-auto   ' />
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
</footer >
  )
}

export default footer