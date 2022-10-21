import React from "react";
import Section1Tiket from "../components/tiket/section1";
import { HtmlHead } from "../components/HtmlHead";

const Tiket = () => {
	return (
		<>
			<HtmlHead
				title="Tiket"
				decription="[insert page description]"
				link="/tiket"
			/>
			<Section1Tiket />
		</>
	);
};

export default Tiket;
