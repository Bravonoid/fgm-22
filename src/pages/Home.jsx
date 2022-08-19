import { Link } from "react-router-dom";

import Opening_video from "../components/home/opening_video";
import Tentang from "../components/home/tentang";
import Rangkaian from "../components/home/rangkaian";
import LiniMasa from '../components/home/lini_masa'


export default function Home() {
	return (
		<>
			<main>
				<Opening_video/>
				<Tentang/>
				<Rangkaian/>



				<LiniMasa/>

			</main>
			
		</>
	);
}
