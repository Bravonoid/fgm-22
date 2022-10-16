import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";

import Tenants from "../../../assets/Pasar-Rakyat/Tenant.svg";
import KembangMerah from "../../../assets/kembang-putih.svg";

const Tenant = ({ tenantList, categoryName }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sorting, setSorting] = useState(false);

  console.log(tenantList);

  let listItem;
 
  if (tenantList) {
    listItem = tenantList.sort((a, b) => {
      var a1 = a.tenantName.toLowerCase();
      var b1 = b.tenantName.toLowerCase();
      return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
    });
    listItem = tenantList.filter((item) => {
      const regex = new RegExp(searchValue, "gi");
      return regex.test(item.tenantName);
    });
  }
  ;
  // set up event listeners
 

  console.log(listItem);

  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="flex w-full flex-col items-center pt-5 pb-20">
      <div className=" relative my-1 mx-auto  flex w-full items-center justify-center text-left text-white ">
        <div className="z-10 ml-24 hidden h-1 w-1/3 bg-white sm:block "></div>
        <img
          src={KembangMerah}
          className=" relative mx-auto -ml-10 hidden h-16 sm:block"
          alt=""
        />
        <img src={Tenants} className="relative mx-auto h-16" alt="" />
        <img
          src={KembangMerah}
          className=" relative mx-auto -mr-10 hidden h-16 sm:block"
          alt=""
        />
        <div className="relative  mr-24 hidden h-1 w-1/3 bg-white  sm:block"></div>
      </div>
      <h2 className="my-8 text-center text-4xl font-bold text-white">
        {categoryName}
      </h2>
      <form className="flex h-12 w-4/5 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <input
          id="search-tenant"
          className="bg-fgmGray  focus:ring-fgmRed text-fgmBlack h-full w-full px-8 focus:outline-none focus:ring-2"
          placeholder="Nama Tenant"
          value={searchValue}
          onChange={searchHandler}
        ></input>
   
      </form>
      {listItem && (
        <>
          <p className="text-fgmBlack mt-5 mb-20">
            {listItem.length} tenant ditemukan
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-12 lg:grid-cols-3 2xl:grid-cols-4">
            {listItem.map((item) => (
              <ItemTenant key={item.id_tenant} itemData={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tenant;
