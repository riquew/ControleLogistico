import React from "react";
import BackButton from "../BackButton/BackButton";
import ModalButton from "../ModalButton/ModalButton";

const Pesquisar = () => {
  return (
    <div className="container">
      <BackButton />
      <div className="conteudo">
        <h1 className="titulo">Pesquisar</h1>
        <div>
          <ModalButton titulo="Policial" />
        </div>
        <div>
          <ModalButton titulo="Item" />
        </div>
      </div>
    </div>
  );
};

export default Pesquisar;
