import React from 'react'

const informasitokoh = ({foto,nama,deskripsi}) => {
  return (
    <div className='w-full mt-14 h-full'>
    <div className='w-[500px] bg-black h-72'>


    </div>
    <ul className=' mt-2 relative flex  h-3 w-full'>
                <li className=' bg-fgm-merah-orange w-1/3'></li>
                <li className=' bg-fgm-orange w-1/3'></li>

                <li className=' bg-fgm-hijau w-1/3'></li>

              </ul>
    <h1 className='text-3xl '>
      Nama Tokoh
    </h1>
    <p>
    Deskripsi Tokoh Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce ultrices quam ac nibh imperdiet efficitur. Maecenas ultricies ut leo ut dictum. Vivamus et lacus sem.
    </p>
  </div>

  )
}

export default informasitokoh