import React,{useEffect,useState} from 'react'
import ItemTenant from './ItemTenant'

import Tenants from '../../../assets/Pasar-Rakyat/Tenant.svg'
import KembangMerah from  '../../../assets/kembang-putih.svg'

const Tenant = ({tenantList,categoryName}) => {

  const [searchValue, setSearchValue] = useState("");
  const[sorting,setSorting] = useState(false)




  console.log(tenantList)



  let listItem;
  if (tenantList) {
    listItem = tenantList.filter((item) => {
      const regex = new RegExp(searchValue, "gi");
      return regex.test(item.tenantName);
    });
  } 
  console.log(listItem)
   const handle = () =>{  listItem = tenantList.sort((a,b)=> {
    var a1 = a.tenantName.toLowerCase();
    var b1 = b.tenantName.toLowerCase();
    return a1<b1 ?-1:a1> b1? 1 :0;
    })
    setSorting(true)
    console.log(listItem);}
    console.log(listItem)

  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="flex flex-col w-full items-center pt-5 pb-20">
      <div className=' relative my-1 mx-auto  flex justify-center items-center w-full text-left text-white '>
                <div className='h-1 z-10 hidden sm:block bg-white w-1/3 ml-24 '></div>
                  <img src={KembangMerah} className=' hidden sm:block relative -ml-10 h-16 mx-auto' alt="" />
                  <img src={Tenants} className='relative h-16 mx-auto' alt="" />
                  <img src={KembangMerah} className=' hidden sm:block relative -mr-10 h-16 mx-auto' alt="" />
                  <div className='h-1  hidden sm:block bg-white relative w-1/3  mr-24'></div>


            </div>
      <h2 className="my-8 text-4xl font-bold text-center text-white">
        {categoryName}
      </h2>
      <form className="2xl:w-1/4 xl:w-1/3 lg:w-1/2 w-4/5 flex h-12">
        <input
          id="search-tenant"
          className="bg-fgmGray  focus:outline-none focus:ring-2 focus:ring-fgmRed w-full h-full px-8 text-fgmBlack"
          placeholder="Nama Tenant"
          value={searchValue}
          onChange={searchHandler}
        ></input>
        <button type='button' className='bg-gray-500' onClick={handle}>
          sorting
        </button>
      </form>
      {listItem && (
        <>
          <p className="text-fgmBlack mt-5 mb-20">
            {listItem.length} tenant ditemukan
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-12">
            {listItem.map((item) => (
              <ItemTenant key={item.id_tenant} itemData={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Tenant