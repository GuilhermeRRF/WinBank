import Layout from './components/Layout'; // Ajuste o caminho se necessário
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./home/Inicio";
import Novidades from "../src/pages/Novidades"
import Ajuda from "../src/pages/Ajuda";
import CriarConta from "../src/pages/CriarConta";
import Login from "./pages/Login";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import PerfilPessoal from "./pages/PerfilPessoal";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout><Inicio /></Layout>} />
        <Route path="/novidades" element={<Layout><Novidades /></Layout>} />
        <Route path="/ajuda" element={<Layout><Ajuda /></Layout>} />
        <Route path="/criarconta" element={<Layout><CriarConta /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/perfilpessoal" element={<Layout><PerfilPessoal /></Layout>} />
        <Route path="/etapa2" element={<Layout><Etapa2 /></Layout>} />
        <Route path="/etapa3" element={<Layout><Etapa3 /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
