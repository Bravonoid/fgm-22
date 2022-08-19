import { Link } from "react-router-dom";
import Slider from "../components/home/slider";


export default function About() {
	return (
		<>
		
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<Slider/>
		</>
	);
}
