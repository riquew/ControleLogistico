import React from "react";
import FormPesquisa from "../FormPesquisa/FormPesquisa";
import FormInserir from "../FormInserir/FormInserir";
import styles from "./ModalButton.module.css";

const ModalButton = ({ titulo, modo }) => {
  const [modal, setModal] = React.useState(false);
  const modalArrow = React.useRef(null);
  const pesquisaArray = titulo === "Policial" ? ["RE", "Categoria"] : ["Nome"];
  const insereArray = titulo;
  const funcao = modo;

  function toggleModal() {
    setModal(!modal);
    if (modal) {
      modalArrow.current.style.webkitTransform = "rotate(225deg)";
    } else {
      modalArrow.current.style.webkitTransform = "rotate(405deg)";
    }
  }

  return (
    <>
      <div className={styles.modalButtonConteudo}>
        <h2>{titulo}</h2>
        <div className={styles.modalButton} onClick={toggleModal}>
          <i className={styles.modalArrow} ref={modalArrow}></i>
        </div>
      </div>
      {modal && pesquisaArray && funcao === "pesquisa" && (
        <FormPesquisa labels={pesquisaArray} />
      )}
      {modal && insereArray && funcao === "inserir" && (
        <FormInserir labels={insereArray} />
      )}
    </>
  );
};

export default ModalButton;
