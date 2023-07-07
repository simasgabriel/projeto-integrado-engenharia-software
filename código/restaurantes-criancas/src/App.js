import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FaleConosco from "./pages/FaleConosco/FaleConosco";
import TituloMain from "./components/TituloMain";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
