import Tentang from "../components/tentang/Tentang";
import ActiveTab from "../components/tentang/ActiveTab";
import Maskot from "../components/tentang/Maskot";
import Harapan from "../components/tentang/Harapan";
import { HtmlHead } from "../components/HtmlHead";

export default function About() {
	return (
		<>
			<HtmlHead
				title="Tentang"
				decription="[insert page description]"
				link="/tentang"
			/>
			<main className="overflow-hidden">
				<Tentang />
				<ActiveTab />
				<Maskot />
				<Harapan />
			</main>
		</>
	);
}
