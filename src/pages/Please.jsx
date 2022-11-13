import PressRelease from "../components/press release/press_release";
import { HtmlHead } from "../components/HtmlHead";

const Press = () => {
	return (
		<>
			<HtmlHead
				title="Press Release"
				decription="[insert page description]"
				link="/press-release"
			/>
			<PressRelease />
		</>
	);
};

export default Press;
