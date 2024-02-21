import React from "react";
import BackButton from "../BackButton/BackButton";
import FormModel from "../FormModel/FormModel";

const Pesquisar = () => {
  return (
    <div className="container">
      <BackButton />
      <div className="conteudo">
        <h1 className="titulo">Pesquisar</h1>
        <div>
          <FormModel titulo="Policial" modo="pesquisa" />
        </div>
        <div>
          <FormModel titulo="Item" modo="pesquisa" />
        </div>
      </div>
    </div>
  );
};

export default Pesquisar;
