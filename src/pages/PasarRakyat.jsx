import Infografis from "../components/pasar rakyat/home-pasar-rakyat/Infografis";
import SkemaPasar from "../components/pasar rakyat/home-pasar-rakyat/SkemaPasar";
import TemaPasarRakyat from "../components/pasar rakyat/home-pasar-rakyat/TemaPasarRakyat";
import TentangPasarRakyat from "../components/pasar rakyat/home-pasar-rakyat/TentangPasarRakyat";
import KolaborasiKreasi from "../components/pasar rakyat/home-pasar-rakyat/KolaborasiKreasi";
import { HtmlHead } from "../components/HtmlHead";

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
			</main>
		</>
	);
}
