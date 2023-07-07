import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FaleConosco from "./pages/FaleConosco/FaleConosco";
import TituloMain from "./components/TituloMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <TituloMain />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="/faleconosco" element={<FaleConosco />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
