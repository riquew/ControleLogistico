import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Pesquisar from "./Components/Pesquisar/Pesquisar";
import Pesquisado from "./Components/Pesquisar/Pesquisado/Pesquisado";
import Inserir from "./Components/Inserir/Inserir";
import Pagar from "./Components/Pagar/Pagar";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pesquisar" element={<Pesquisar />} />
          <Route path="/pesquisar/:id" element={<Pesquisado />} />
          <Route path="inserir" element={<Inserir />} />
          <Route path="pagar" element={<Pagar />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
