import { Link } from "react-router-dom";

import Opening_video from "../components/home/opening_video";
import Tentang from "../components/home/tentang";
import Rangkaian from "../components/home/rangkaian";
import LiniMasa from '../components/home/lini_masa'
import Sponsor from "../components/home/sponsor";
import Medpart from "../components/home/medpart";

export default function Home() {
	return (
		<>
			<main className="overflow-hidden">
				<Opening_video/>
				<Tentang/>
				<Rangkaian/>



				<LiniMasa/>
				<Sponsor/>
				<Medpart/>

			</main>
			
		</>
	);
}
