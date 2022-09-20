import React from 'react'
import Judul_pentas from '../../assets/tiket/pentas_teater_tiket.svg'
import Rangkaian from './rangkaian'

const section1 = () => {
  return (
    <div className='h-screen items-center flex overflow-hidden justify-between bg-fgm-base '>
        <div className=' my-32  mx-32 pt-16 md:p-32 flex-row w-full h-1/3 justify-center'>
            <div className='h-fit items-center w-full justify-between flex '>
                <div className='  h-10 w-2/3 bg-white'></div>
                <img className="h-16 " src={Judul_pentas}></img>
                <div className=' h-10 w-2/3 bg-white'></div>


            </div>
            <div className='tems-center w-full justify-between grid grid-cols-2 text-white '>
                <div className='mr-4 text-right'>
                    18 November <br/>
                    2022
                </div>
                <div className='ml-4 text-left'>
                Taman Budaya <br/>Yogyakarta 
                    
                </div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default section1