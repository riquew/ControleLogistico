import React from "react";
import FormModal from "../FormModal/FormModal";
import styles from "./ModalButton.module.css";

const ModalButton = ({ titulo }) => {
  const [modal, setModal] = React.useState(false);
  const modalArrow = React.useRef(null);
  const labelArray = titulo === "Policial" ? ["RE", "Categoria"] : ["Código"];

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
      {modal && labelArray && <FormModal labels={labelArray} />}
    </>
  );
};

export default ModalButton;
