import { Link } from "react-router-dom";

import Opening_video from "../components/home/opening_video";
import Tentang from "../components/home/tentang";
import Rangkaian from "../components/home/rangkaian";

export default function Home() {
	return (
		<>
			<main>
				<Opening_video/>
				<Tentang/>
				<Rangkaian/>
			</main>
			<nav>
			
			</nav>
		</>
	);
}
