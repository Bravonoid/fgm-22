import React from 'react'
import Judul_pentas from '../../assets/tiket/pentas_teater_tiket.svg'
import Rangkaian from './rangkaian'
import Green_card from '../../assets/tiket/Green_card.svg'
import Red_card from '../../assets/tiket/Red_card.svg'
import Pink_card from '../../assets/tiket/Pink_card.svg'



const section1 = () => {
  return (
    <div className='sm:h-full h-full items-center flex flex-col overflow-hidden justify-between bg-fgm-base '>
        <div className=' my-8  mx-8 pt-8 md:p-16 flex-row w-full h-full justify-center'>
            <div className="my-16  sm:mx-32">
            <div className='h-32 items-center sm:w-full justify-between flex '>
                <div className=' sm:mr-8  h-10 w-2/3 bg-fgm-merah-orange'></div>
                <img className="h-18 " src={Judul_pentas}></img>
                <div className='sm:ml-8  h-10 w-2/3 bg-fgm-merah-orange'></div>
            </div>
            <div className='tems-center w-full justify-between text-2xl font-bold sm:grid sm:grid-cols-2 text-white '>
                <div className='hidden sm:inline-block mr-4 text-right'>
                    18 November <br/>
                    2022
                </div>
                <div className='hidden sm:inline-block ml-4 text-left'>
                Taman Budaya <br/>Yogyakarta               
                </div>
                <div className='text-base sm:hidden text-center '>
                    18 November 2022 Taman Budaya Yogyakarta
                </div>
            </div>
            <div>

            </div>  
            </div>
            <div className="my-16 xl:px-16  mx-4 xl:mx-32">
            <div className='flex sm:flex-row flex-col items-center gap-4 h-full sm:h-[32rem] justify-between w-full '>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full sm:h-72 md:h-96' src={Red_card} alt="" />
                </div>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full sm:h-72 md:h-96'src={Green_card} alt="" />
                </div>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full sm:h-72 md:h-96' src={Pink_card} alt="" />
                </div>

                
            </div>
            
            <div>

            </div>
            
                
            </div>
            <div>
                
            </div>
        </div>
        <div className=' my-8  mx-8 pt-8 md:p-16 flex-row w-full h-full justify-center'>
            <div className="my-16  sm:mx-32">
            <div className='h-32 items-center sm:w-full justify-between flex '>
                <div className=' sm:mr-8  h-10 w-2/3 bg-fgm-orange'></div>
                <img className="h-18 " src={Judul_pentas}></img>
                <div className='sm:ml-8  h-10 w-2/3 bg-fgm-orange'></div>
            </div>
            <div className='tems-center w-full justify-between text-2xl font-bold sm:grid sm:grid-cols-2 text-white '>
            <div className='hidden sm:inline-block mr-4 text-right'>
                    26 November <br/>
                    2022
                </div>
                <div className='hidden sm:inline-block ml-4 text-left'>
                Lapangan Pancasila <br/>UGM              
                </div>
                <div className='text-base sm:hidden text-center '>
                    26 November 2022 Lapangan Pancasila UGM
                </div>
            </div>
            <div>

            </div>  
            </div>
            <div className="my-16 xl:px-16  mx-4 xl:mx-32">
            <div className='flex sm:flex-row flex-col items-center gap-4 h-full sm:h-[32rem] justify-between w-full '>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full sm:h-72 md:h-96' src={Red_card} alt="" />
                </div>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full sm:h-72 md:h-96'src={Green_card} alt="" />
                </div>
                <div className='justify-center mx-auto'  >
                <img className='xl:h-full sm:h-72 md:h-96' src={Pink_card} alt="" />
                </div>

                
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