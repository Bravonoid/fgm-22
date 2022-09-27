// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Teater from "./pages/Teater";
import Festival from "./components/festival seni/festival_seni";
import Produk from "./components/pasar rakyat/produk/produk";
import Tenant from "./components/pasar rakyat/tenant/tenant.jsx";
import Tiket from "./pages/Tiket";
import PasarRakyat from "./pages/PasarRakyat";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/teater" element={<Teater />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/tenants" element={<Tenant />} />
        <Route path="/tiket" element={<Tiket />} />
        <Route path="/pasar-rakyat" element={<PasarRakyat />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
