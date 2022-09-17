import React,{useState} from 'react'
import Informasitokoh from './Pemeran/informasitokoh'
import Sliders from  './Pemeran/slider'

const Pemeran = () => {
  const [foto, setFoto] = useState(true);
  const [nama, setNama] = useState(false);
  const [deskripsi, setDeskripsi] = useState(false); 






  return (
    <div className='bg-gray-200  w-full h-full flex  justify-between align-center  items-center   pl-16  my-auto'>
      <div className='w-full md:flex grid mx-2 xl:ml-24 mr-32 p-4'>
        <div className='w-1/2  h-full'>
          <h1 className='font-bold mb-4 text-4xl'>
            PEMERAN
          </h1>
          <Sliders/>
          <ul className='top-0  relative text-2xl   h-1 w-full'>
                      <li className=' bg-fgm-merah-orange w-3/4'>
                        <h1>Gambar Tokoh 1</h1>
                        <p>Nama Tokoh 1</p>
                        </li>
                      <li className=' bg-fgm-orange w-3/4'>
                      <h1>Gambar Tokoh 1</h1>
                        <p>Nama Tokoh 1</p>



                      </li>

                      <li className=' bg-fgm-hijau w-3/4'>
                      <h1>Gambar Tokoh 1</h1>
                        <p>Nama Tokoh 1</p>

                      </li>

                    </ul>
        </div>
        <Informasitokoh/>
      
     </div>
     </div>
  )
}

export default Pemeran