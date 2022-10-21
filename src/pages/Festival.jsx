import FestivalSeni from "../components/festival seni/festival_seni";
import { HtmlHead } from "../components/HtmlHead";

const Festival = () => {
	return (
		<>
			<HtmlHead
				title="Festival Seni"
				decription="[insert page description]"
				link="/festival-seni"
			/>
			<FestivalSeni />
		</>
	);
};

export default Festival;
