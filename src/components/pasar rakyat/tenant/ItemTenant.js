import { useState } from "react";

export default function ItemTenant(props) {
  const [src, setSrc] = useState(
    `/data/tenants/${props.itemData.id_tenant}/${props.itemData.tenantLogo}`
  );
  console.log(src);
  return (
    <a
      className="flex flex-col items-center overflow-hidden border bg-white  shadow   duration-300 ease-out sm:border-2"
      href={`/pasar-rakyat/tenant/produk/${props.itemData.id_tenant}`}
    >
      <img
        height="240"
        width="240"
        className="my-auto object-cover"
        src={process.env.PUBLIC_URL + src}
      />
      <div className="m-2 flex-none text-sm font-bold sm:text-base">
        {props.itemData.tenantName}
      </div>
    </a>
  );
}
