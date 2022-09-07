// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Teater from "./pages/Teater";
import Festival from "./components/festival seni/festival_seni";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="/teater" element={<Teater />} />
				<Route path="festival" element={<Festival />} />
			</Routes>
	
			<Footer />
		</div>
	);
}

export default App;
