import "./App.css";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddEditPost from "./pages/AddEditPost";
import Detail from "./pages/Detail";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditPost />} />
        <Route path="/update/:id" element={<AddEditPost />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
