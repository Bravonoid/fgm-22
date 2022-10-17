// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Teater from "./pages/Teater";
import Festival from "./pages/Festival";
import Produk from "./components/pasar rakyat/tenant/produk/produk";
import Tenant from "./components/pasar rakyat/tenant/tenant.jsx";
import Tiket from "./pages/Tiket";
import PasarRakyat from "./pages/PasarRakyat";
import NotFound from "./pages/NotFound";
import Product from './components/pasar rakyat/tenant/produks/Product';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/teater" element={<Teater />} />
        <Route path="/festival-seni" element={<Festival />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/pasar-rakyat/tenant" element={<Tenant />} />
        <Route path="/tiket" element={<Tiket />} />

        <Route path="/pasar-rakyat" element={<PasarRakyat />} />
        <Route path="/pasar-rakyat/tenant/produk/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

