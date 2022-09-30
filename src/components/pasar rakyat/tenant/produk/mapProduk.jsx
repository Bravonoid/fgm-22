import React,{useEffect,useState} from 'react'

const Tenant = ({tenantList,categoryName,dataTenant}) => {
    const [showModal, setShowModal] = useState(false);
  const [showModalData, setShowModalData] = useState([]);
  const modalData = (
    newName,
    newImages,
    newBahan,
    newColor,
    newDImension,
    newPrice,
    newPromo,
    newPembayaran,
    newTenantName,
    id
  ) => {
    let showModalData = [
      newName,
      newImages,
      newBahan,
      newColor,
      newDImension,
      newPrice,
      newPromo,
      newPembayaran,
      newTenantName,
      id,
    ];
    setShowModalData((product) => [1, ...showModalData]);
    return setShowModal(true);
  };

  const [searchValue, setSearchValue] = useState("");
  const[sorting,setSorting] = useState(false)




  console.log(tenantList)


  const handle = () =>{  tenantList = tenantList.sort((a,b)=> {
    var a1 = a.tenantName.toLowerCase();
    var b1 = b.tenantName.toLowerCase();
    return a1<b1 ?-1:a1> b1? 1 :0;
    })
    console.log(tenantList);}
    console.log(tenantList)
  let listItem;
  if (tenantList) {
    listItem = tenantList.filter((item) => {
      const regex = new RegExp(searchValue, "gi");
      return regex.test(item.tenantName);
    });
  }

  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="flex flex-col w-full items-center pt-5 pb-20">
      <form className="2xl:w-1/4 xl:w-1/3 lg:w-1/2 w-4/5 h-12">
        <input
          id="search-tenant"
          className="bg-fgmGray  focus:outline-none focus:ring-2 focus:ring-fgmRed w-full h-full px-8 text-fgmBlack"
          placeholder="Nama Tenant"
          value={searchValue}
          onChange={searchHandler}
        ></input>
        <button type='button' onClick={handle}>
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
                <div className="flex flex-row flex-wrap justify-center gap-y-4 ">
                {dataTenant.product.map((product, product_index) => {
                    return (
                        <>
                        <div
                        className="bg-white text-center justify-self-center my-4"
                        key={product_index}
                        ></div>
                <div className="flex flex-row mx-auto text-white">
                    <div className="flex flex-col w-[300px] mx-auto bg-[#494949] hover:scale-110 duration-300" onClick={() => {
                                  modalData(
                                    product.productName,
                                    product.productImages,
                                    product.bahan,
                                    product.color,
                                    product.dimension,
                                    product.price,
                                    product.promo,
                                    dataTenant.pembayaran,
                                    dataTenant.tenantName,
                                    dataTenant.id_tenant
                                  );
                                }}>
                                <img
                                  className="object-cover"
                                  alt={product.productName}
                                  src={
                                    "/data/tenant/" +
                                    dataTenant.id_tenant +
                                    "/product/" +
                                    product.productImages
                                  }
                                  width="auto"
                                  height="auto"
                                />
                        <p className="font-bold px-10 text-3xl">{product.productName}</p>
                        <p className="text-lg px-10"> Rp{product.price}.000</p>
                    </div>
                </div>
                </>
                    );
                })}
                </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Tenant