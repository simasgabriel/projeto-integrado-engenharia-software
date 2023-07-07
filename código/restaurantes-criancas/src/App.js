import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FaleConosco from "./pages/FaleConosco/FaleConosco";
import TituloMain from "./components/TituloMain";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

// context
import { AuthProvider } from "./context/AuthContext";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
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
      </AuthProvider>
    </div>
  );
}

export default App;
