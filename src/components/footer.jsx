import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faDiscord,
	faFacebook,
	faFacebookSquare,
	faInstagram,
	faInstagramSquare,
	faLine,
	faLinkedin,
	faSteam,
	faTiktok,
	faTwitter,
	faTwitterSquare,
	faUssunnah,
	faWhatsapp,
	faYoutube,
	faGmail,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo_fgm.svg";
import festival_footer from "../assets/footer/festival-gm-footer.svg";
import ornament_footer from "../assets/footer/ornament-footer.svg";
import ikuti_footer from "../assets/footer/ikuti-kami-footer.svg";
import sitemap_footer from "../assets/footer/sitemap-footer.svg";

const footer = () => {
	return (
		<footer className=" bg-black">
			<div className="flex flex-row">
				<img
					className="sm:hidden lg:block mobile:hidden"
					src={ornament_footer}
				></img>
				<div className="container mx-auto py-32 px-2 text-left sm:w-auto lg:w-full">
					<div className="mx-4 flex justify-evenly gap-y-2 sm:flex-col sm:gap-8 md:gap-8 lg:flex-row lg:items-start mobile:flex-col mobile:gap-8 mobile:text-2xl">
						{/* Nesco dan sosmed */}
						<div className="flex flex-col items-center self-center lg:items-start lg:self-auto xl:ml-12">
							<div className="mt-8 flex items-center sm:bottom-10 sm:flex-row md:mt-0 md:gap-10 lg:mb-4 lg:mr-10 lg:mt-6 lg:flex-row">
								<img
									src={Logo}
									alt=""
									className="hidden transition-all lg:inline-flex lg:h-28 lg:scale-[1.4]"
								/>
								<img
									src={festival_footer}
									alt=""
									className="transition-all sm:-top-8 sm:h-auto md:my-auto lg:ml-10 lg:h-28 lg:scale-[1.4]"
								/>
							</div>

							<p className="content-left mt-2 text-xl text-white lg:mt-6">
								&copy; IT FGM 2022
							</p>
						</div>
						{/* quick link */}
						<div className="flex flex-col text-lg text-white sm:gap-2 sm:text-2xl mobile:w-[275px] mobile:gap-2 mobile:self-center">
							<img
								src={sitemap_footer}
								alt=""
								className="sm:h-auto mobile:max-w-xs"
							/>
							<div className="flex flex-col text-lg sm:gap-2 mobile:gap-2">
								<Link
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
									}}
									to="/"
									className="w-fit text-sm transition-colors hover:text-yellow-500 sm:text-2xl mobile:text-xl"
								>
									Beranda
								</Link>
								<Link
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
									}}
									to="/tentang"
									className="w-fit text-sm transition-colors hover:text-yellow-500 sm:text-2xl mobile:text-xl"
								>
									Tentang
								</Link>
								<Link
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
									}}
									to="/teater"
									className="w-fit text-sm transition-colors hover:text-yellow-500 sm:text-2xl mobile:text-xl"
								>
									Pentas Teater{" "}
								</Link>
								<Link
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
									}}
									to="/pasar-rakyat"
									className="w-fit text-sm transition-colors hover:text-yellow-500 sm:text-2xl mobile:text-xl"
								>
									Pasar Rakyat
								</Link>
								<Link
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
									}}
									to="/festival-seni"
									className="w-fit text-sm transition-colors hover:text-yellow-500 sm:text-2xl mobile:text-xl"
								>
									Festival Seni
								</Link>
								<Link
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
									}}
									to="/tiket"
									className="w-fit text-sm transition-colors hover:text-yellow-500 sm:text-2xl mobile:text-xl"
								>
									Tiket
								</Link>
							</div>
						</div>
						{/* kontak person whatsapp */}
						<div className="flex flex-col text-lg text-white sm:gap-2 sm:text-2xl mobile:gap-2 mobile:self-center">
							<img
								src={ikuti_footer}
								alt=""
								className="sm:h-auto mobile:max-w-xs"
							/>
							<div className="flex flex-col sm:gap-2 mobile:gap-2">
								<a
									href={"https://www.instagram.com/festivalgadjahmada"}
									rel="noreferrer"
									target="_blank"
									className="group w-fit transition-colors hover:text-yellow-500"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										size="2x"
										color="white"
										className="h-5 transition-colors group-hover:text-yellow-500 lg:h-6"
									></FontAwesomeIcon>{" "}
									@festivalgadjahmada{" "}
								</a>
								<a
									href={"https://www.tiktok.com/@festivalgadjahmada?lang=id-ID"}
									rel="noreferrer"
									target="_blank"
									className="group w-fit transition-colors hover:text-yellow-500"
								>
									<FontAwesomeIcon
										icon={faTiktok}
										size="2x"
										color="white"
										className="h-5 transition-all  group-hover:text-yellow-500  lg:h-6"
									></FontAwesomeIcon>{" "}
									@festivalgadjahmada{" "}
								</a>
								<a
									href={"https://twitter.com/FGM_UGM"}
									rel="noreferrer"
									target="_blank"
									className="group w-fit transition-colors hover:text-yellow-500"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										size="2x"
										color="white"
										className="h-5 transition-all group-hover:text-yellow-500  lg:h-6"
									></FontAwesomeIcon>{" "}
									@FGM_UGM
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
