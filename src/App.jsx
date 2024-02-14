import Headerprincipal from "../src/components/header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./home/Inicio";
import Novidades from "../src/pages/Novidades"
import Ajuda from "../src/pages/Ajuda";
import Sobrenos from "../src/pages/Sobrenos";
import Footer  from "../src/components/footer";
import CriarConta from "../src/pages/CriarConta";
import Login from "./pages/Login";
import Etapa2 from "./pages/Etapa2";

function App() {
  return (
    <>
      <Headerprincipal />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path={"#conta"} element={<Inicio/>} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/criarconta" element={<CriarConta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/etapa2" element={<Etapa2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
