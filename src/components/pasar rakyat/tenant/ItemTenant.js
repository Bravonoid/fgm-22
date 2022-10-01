import { useState,  } from "react";


export default function ItemTenant(props) {
  const [src, setSrc] = useState(
    `/data/tenant/${props.itemData.id_tenant}/${props.itemData.tenantLogo}`
  );
  console.log(src)
  return (
    <a
      className="flex flex-col items-center border sm:border-2 shadow  bg-white  hover:scale-110 duration-300 ease-out overflow-hidden"
      href={`/pasar-rakyat/tenant/produk/${props.itemData.id_tenant}`}
    >
      <img
        height="240"
        width="240"
        className="my-auto object-cover"
        src={ process.env.PUBLIC_URL + src}
        onError={() => setSrc("/tenant/tokodummy.png")}
      />
      <div className="flex-none font-bold sm:text-base text-sm m-2">
        {props.itemData.tenantName}
      </div>
    </a>
  );
}
