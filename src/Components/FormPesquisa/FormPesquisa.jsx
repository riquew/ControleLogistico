import styles from "./FormPesquisa.module.css";

const FormPesquisa = ({ labels }) => {
  if (labels.length > 1) {
    return (
      <form className={styles.formPesquisa}>
        <label htmlFor={labels[0]}>{labels[0]}</label>
        <input type="text" name={labels} id="" placeholder="140948" />
        <label htmlFor={labels[1]}>{labels[1]}</label>
        <select htmlFor={labels[1]}>
          <option value="fardamento">Fardamento</option>
          <option value="materiais">Materiais</option>
          <option value="completo">Completo</option>
        </select>
      </form>
    );
  } else {
    return (
      <form className={styles.formPesquisa}>
        <label htmlFor={labels[0]}>{labels[0]}</label>
        <input type="text" name={labels} id="" placeholder="Nome do Produto" />
      </form>
    );
  }
};

export default FormPesquisa;
