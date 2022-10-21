import React from "react";
import Foto from "../components/teater/Foto";
import FotoTest from "../components/teater/fotoTest";
import { HtmlHead } from "../components/HtmlHead";

const Teater = () => {
	return (
		<>
			<HtmlHead
				title="Pentas Teater"
				decription="[insert page description]"
				link="/teater"
			/>
			<main className="overflow-hidden ">
				<FotoTest />
			</main>
		</>
	);
};

export default Teater;
