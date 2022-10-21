import { Link } from "react-router-dom";

import Opening_video from "../components/home/opening_video";
import Tentang from "../components/home/tentang";
import Rangkaian from "../components/home/rangkaian";
import LiniMasa from "../components/home/lini_masa";
import Sponsor from "../components/home/sponsor";
import Medpart from "../components/home/medpart";
import { HtmlHead } from "../components/HtmlHead";

export default function Home() {
	return (
		<>
			<HtmlHead
				title="Beranda"
				decription="[insert page description]"
				link="/"
			/>
			<main className="overflow-hidden">
				<Opening_video />
				<Tentang />
				<Rangkaian />

				<LiniMasa />
				<Sponsor />
				<Medpart />
			</main>
		</>
	);
}
