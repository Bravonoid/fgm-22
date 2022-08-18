// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Footer from './components/footer'


function App() {
	return (
		<div className="App">
			<Navbar/>
	
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
