import Infografis from "../components/pasar rakyat/home-pasar-rakyat/Infografis";
import SkemaPasar from "../components/pasar rakyat/home-pasar-rakyat/SkemaPasar";
import TemaPasarRakyat from "../components/pasar rakyat/home-pasar-rakyat/TemaPasarRakyat";
import TentangPasarRakyat from "../components/pasar rakyat/home-pasar-rakyat/TentangPasarRakyat";
import KolaborasiKreasi from "../components/pasar rakyat/home-pasar-rakyat/KolaborasiKreasi";
import btn from "../assets/Pasar-Rakyat/home-pasar/btnPO.png";
import { HtmlHead } from "../components/HtmlHead";
import { Link } from "react-router-dom";
import Seminar from "../components/pasar rakyat/home-pasar-rakyat/Seminar";

export default function PasarRakyat() {
	return (
		<>
			<HtmlHead
				title="Pasar Rakyat"
				decription="[insert page description]"
				link="/pasar-rakyat"
			/>
			<main className="overflow-hidden">
				<TentangPasarRakyat />
				<TemaPasarRakyat />
				<Infografis />
				<SkemaPasar />
				<KolaborasiKreasi />
				<Link to="/pasar-rakyat/pre-order">
					<img
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: "auto" });
					}}
					src={btn}
					className="fixed right-0 bottom-0 z-50 p-4"
					alt=""
					/>
				</Link>
				<Seminar/>
			</main>
		</>
	);
}