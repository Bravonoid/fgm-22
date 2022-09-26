import React from 'react'
import Judul_pentas from '../../assets/tiket/pentas_teater_tiket.svg'
import Rangkaian from './rangkaian'
import Green_card from '../../assets/tiket/Green_card.svg'
import Red_card from '../../assets/tiket/Red_card.svg'
import Pink_card from '../../assets/tiket/Pink_card.svg'

import Early_Bird from '../../assets/tiket/Early_Bird.svg'
import Presale_1 from '../../assets/tiket/Presale_1.svg'
import Regular from '../../assets/tiket/Regular.svg'

import EarlyBirdSM from '../../assets/tiket/EarlyBirdSM.svg'
import Presale1SM from '../../assets/tiket/Presale1SM.svg'
import RegularSM from '../../assets/tiket/RegularSM.svg'

import FestivalSeni from '../../assets/tiket/FESTIVAL SENI.svg'


const section1 = () => {
  return (
    <div className='sm:h-full h-full items-center flex flex-col overflow-hidden justify-between bg-fgm-base '>
        <div className=' mt-8 mb-2  mx-8 pt-8 md:px-16  flex-row w-full h-full justify-center'>
            <div className="my-16  sm:mx-16 md:mx-32">
            <div className='h-32 items-center sm:w-full justify-between flex '>
                <div className=' hidden sm:block sm:mr-8  h-10 w-2/3 bg-fgm-merah-orange'></div>
                <img className="mx-auto h-10 sm:h-16 " src={Judul_pentas}></img>
                <div className='hidden sm:block sm:ml-8  h-10 w-2/3 bg-fgm-merah-orange'></div>
            </div>
            <div className='tems-center w-full justify-between text-2xl font-bold sm:grid sm:grid-cols-2 text-white '>
                <div className='hidden sm:inline-block mr-4 text-right'>
                    18 November <br/>
                    2022
                </div>
                <div className='hidden sm:inline-block ml-4 text-left'>
                Taman Budaya <br/>Yogyakarta               
                </div>
                <div className='text-lg sm:hidden text-center '>
                    18 November 2022 <br/> Taman Budaya Yogyakarta
                </div>
            </div>
            <div>

            </div>  
            </div>
            <div className="my-16 xl:px-16 justify-between items-center mx-8 sm:mx-4 xl:mx-32">
            <div className='flex sm:flex-row flex-col items-center gap-4 h-full sm:h-[32rem] justify-between w-full '>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full h-[30rem] sm:h-72 md:h-96' src={Red_card} alt="" />
                </div>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full h-[30rem] sm:h-72 md:h-96'src={Green_card} alt="" />
                </div>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full h-[30rem] sm:h-72 md:h-96' src={Pink_card} alt="" />
                </div>

                
            </div>

            <div className='text-white mt-8 md:mt-8 xl:mt-16 2xl:mt-32 md:text-2xl text-xl font-bold bg-fgm-merah-orange py-4 px-5  w-fit text-center mx-auto'>
                BELI TIKET PENTAS TEATER
            </div>
            <div>

            </div>
            
                
            </div>
            <div>
                
            </div>
        </div>
        <div className=' my-2  mx-8 pt-8 md:px-16 flex-row w-full h-full justify-center'>
            <div className="my-8  sm:mx-32">
            <div className='h-32 items-center  sm:w-full justify-between flex '>
                <div className='hidden sm:block sm:mr-8  h-10 w-2/3 bg-fgm-orange'></div>
                <img className="mx-auto h-8 sm:h-10 " src={FestivalSeni}></img>
                <div className='hidden sm:block  sm:ml-8  h-10 w-2/3 bg-fgm-orange'></div>
            </div>
            <div className='tems-center w-full justify-between text-2xl font-bold sm:grid sm:grid-cols-2 text-white '>
            <div className='hidden sm:inline-block mr-4 text-right'>
                    26 November <br/>
                    2022
                </div>
                <div className='hidden sm:inline-block ml-4 text-left'>
                Lapangan Pancasila <br/>UGM              
                </div>
                <div className='text-lg  sm:hidden text-center '>
                    26 November 2022  <br/> Lapangan Pancasila UGM  
                </div>
            </div>
            <div>

            </div>  
            </div>
            <div className="my-16 xl:px-8  mx-8 xl:mx-32">
            <div className='flex flex-col  items-center gap-4 h-full sm:h-[32rem] justify-between w-full '>
                <div className='justify-center h-[32rem] mx-auto'  >
                <img className='hidden sm:block' src={Early_Bird} alt="" />
                <img className='block h-[25rem] sm:hidden' src={EarlyBirdSM} alt="" />

                </div>
                <div className='justify-center h-[32rem] mx-auto'  >
                <img className='hidden sm:block'src={Regular} alt="" />
                <img className='block  h-[25rem] sm:hidden' src={RegularSM} alt="" />

                </div>
                <div className='justify-center h-[32rem]  mx-auto'  >
                <img className='hidden sm:block' src={Presale_1} alt="" />
                <img className='block  h-[25rem]  sm:hidden' src={Presale1SM} alt="" />

                </div>

                
            </div>
            <div className='text-white md:mt-8 xl:mt-16 2xl:mt-32 md:text-2xl text-xl font-bold bg-fgm-orange py-4 px-5  w-fit text-center mx-auto'>
            BELI TIKET FESTIVAL SENI X PASAR RAKYAT
            </div>
            
            <div>

            </div>
            
                
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default section1