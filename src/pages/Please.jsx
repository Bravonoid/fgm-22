import PleaseRelease from "../components/please release/please_release";
import { HtmlHead } from "../components/HtmlHead";

const Please = () => {
	return (
		<>
			<HtmlHead
				title="Please Release"
				decription="[insert page description]"
				link="/please-release"
			/>
			<PleaseRelease />
		</>
	);
};

export default Please;
