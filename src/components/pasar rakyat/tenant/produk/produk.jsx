import React, { useState, useRouter } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kembangputih1 from "../../../../assets/Pasar-Rakyat/produk/kembangputih1.svg";
import kembangputih2 from "../../../../assets/Pasar-Rakyat/produk/kembangputih2.svg";
import produk from "../../../../assets/Pasar-Rakyat/produk/produk.svg";
import sort from "../../../../assets/Pasar-Rakyat/produk/sort.svg";
import pattern from "../../../../assets/Pasar-Rakyat/produk/bg-pattern.svg";
import produk2 from "../../../../assets/Pasar-Rakyat/produk/produk2.svg";
import hiasan from "../../../../assets/Pasar-Rakyat/produk/hiasan-kanan-pageproduk.svg";
import productData from "../../../../assets/data/tenants/data.json";
import Modal from "./Modal.js";

const Pasar_rakyat = ({ tenantList, categoryName }) => {
	const [number, setNumber] = useState(24);
	const [showModal, setShowModal] = useState(false);
	const [showModalData, setShowModalData] = useState([]);
	const [sorting, setSorting] = useState(false);
	const [searchValue, setSearchValue] = useState("");
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
	console.log(tenantList);
	let listItem;
	if (tenantList) {
		listItem = tenantList.filter((item) => {
			const regex = new RegExp(searchValue, "gi");
			return regex.test(item.tenantName);
		});
	}
	console.log(listItem);
	const handle = () => {
		listItem = tenantList.sort((a, b) => {
			var a1 = a.tenantName.toLowerCase();
			var b1 = b.tenantName.toLowerCase();
			return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
		});
		setSorting(true);
		console.log(listItem);
	};
	console.log(listItem);

	function searchHandler(event) {
		setSearchValue(event.target.value);
	}
	let { userId } = useParams();
	return (
		<>
			{productData.map((dataTenant) => {
				if (dataTenant.id_tenant == number) {
					return (
						<>
							<div className="h-[825px] bg-[#171717] mobile:h-auto">
								<p className="pt-24 pl-10 text-xs font-bold text-white">
									&#9664; Kategori
								</p>
								<div className=" relative top-20 flex flex-row gap-12 pl-16 mobile:top-0 mobile:flex-col mobile:px-8 mobile:pt-8">
									<img
										className="h-[300px] w-[300px] object-cover mobile:h-[200px] mobile:w-[200px]"
										alt={dataTenant.tenantName}
										src={dataTenant.tenantLogo}
									/>
									<div className="flex w-1/3 flex-col gap-y-4 mobile:w-full">
										<div className="text-4xl font-bold text-white">
											{" "}
											{dataTenant.tenantName}
										</div>
										<p className="text-justify text-xl text-white mobile:text-base ">
											{dataTenant.description}
										</p>
										<div className="flex flex-row gap-4">
											{dataTenant.socialMedia.map((socMed) => {
												return (
													<>
														<div className="grid grid-cols-3 items-start justify-items-center gap-10 self-center justify-self-center text-left md:flex">
															{socMed.whatsapp !== null ? (
																<>
																	<div>
																		<a href={socMed.whatsapp}>
																			<img src="" width="30" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
															{socMed.instagram !== null ? (
																<>
																	<div>
																		<a href={socMed.instagram}>
																			<img src="" width="30" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
															{socMed.facebook !== null ? (
																<>
																	<div>
																		<a href={socMed.facebook}>
																			<img src="" width="30" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
															{socMed.website !== null ? (
																<>
																	<div>
																		<a href={socMed.website}>
																			<img src="" width="30" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
															{socMed.shopee !== null ? (
																<>
																	<div>
																		<a href={socMed.shopee}>
																			<img src="" width="100" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
															{socMed.tokopedia !== null ? (
																<>
																	<div>
																		<a href={socMed.tokopedia}>
																			<img src="" width="125" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
															{socMed.lazada !== null ? (
																<>
																	<div>
																		<a href={socMed.lazada}>
																			<img src="" width="125" height="30" />
																		</a>
																	</div>
																</>
															) : (
																""
															)}
														</div>
													</>
												);
											})}
										</div>
									</div>
								</div>
								<img
									src={hiasan}
									alt="hiasan"
									className="absolute right-0 top-auto w-1/2 sm:hidden lg:bottom-24 lg:block xl:bottom-0 mobile:hidden"
								/>
							</div>
							<div
								className="block bg-[#202020] bg-cover"
								style={{ backgroundImage: `url(${pattern}` }}
							>
								<div className="relative mx-auto flex w-full items-center justify-center pt-20 text-left text-white">
									<img
										src={produk2}
										alt="produk"
										className="relative top-0 left-0 h-full w-full object-cover"
									/>
									{/* <img src={kembangputih1} alt="kembangputih" className="hidden sm:block relative h-16 mr-10 mx-auto"/>
                    <img src={produk} alt="kembangputih" className="relative h-16 mx-auto"/>
                    <img src={kembangputih2} alt="kembangputih" className="hidden sm:block relative h-16 ml-10 mx-auto"/> */}
								</div>
								<form className="mx-auto flex h-12 w-4/5 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
									<input
										id="search-tenant"
										className="bg-fgmGray  focus:ring-fgmRed text-fgmBlack h-full w-full px-8 focus:outline-none focus:ring-2"
										placeholder="Nama Tenant"
										value={searchValue}
										onChange={searchHandler}
									></input>
									<button
										type="button"
										className="bg-gray-500"
										onClick={handle}
									>
										sorting
									</button>
								</form>
								<div className="flex flex-row flex-wrap justify-center gap-y-4 pt-8 ">
									{dataTenant.product.map((product, product_index) => {
										return (
											<>
												<div
													className="my-4 justify-self-center bg-white text-center"
													key={product_index}
												></div>
												<div className="mx-auto flex flex-row text-white">
													<div
														className="mx-auto flex w-[300px] flex-col bg-[#494949] duration-300 hover:scale-110"
														onClick={() => {
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
														}}
													>
														<img
															className="object-cover"
															alt={product.productName}
															src={
																"/data/tenants/" +
																dataTenant.id_tenant +
																"/product/" +
																product.productImages
															}
															width="auto"
															height="auto"
														/>
														<p className="px-10 text-3xl font-bold">
															{product.productName}
														</p>
														<p className="px-10 text-lg">
															{" "}
															Rp{product.price}.000
														</p>
													</div>
												</div>
											</>
										);
									})}
								</div>
							</div>
							<div className="flex justify-center bg-[#202020]">
								<a href="https://formfaca.de/sm/zYgTo63cn">
									<button className="m-4 bg-[#EEEEEE] p-4 text-center font-Montserrat font-bold text-[#171717] hover:bg-[#171717] hover:text-[#EEEEEE]">
										PREORDER DISINI
									</button>
								</a>
							</div>
						</>
					);
				}
			})}
			{showModal === true ? (
				<Modal
					newProductName={showModalData[1]}
					newProductImages={showModalData[2]}
					newProductBahan={showModalData[3]}
					newProductColor={showModalData[4]}
					newProductDimension={showModalData[5]}
					newProductPrice={showModalData[6]}
					newProductPromo={showModalData[7]}
					newPembayaran={showModalData[8]}
					newTenantName={showModalData[9]}
					newId={showModalData[10]}
					hide={() => setShowModal(false)}
				/>
			) : (
				""
			)}
		</>
	);
};
export default Pasar_rakyat;
