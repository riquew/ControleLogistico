import React from "react";
import BackButton from "../BackButton/BackButton";
import ModalButton from "../ModalButton/ModalButton";
import styles from "./Pesquisar.module.css";

const Pesquisar = () => {
  return (
    <div className="container">
      <BackButton />
      <div className={styles.pesquisarConteudo}>
        <h1>Pesquisar</h1>
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
