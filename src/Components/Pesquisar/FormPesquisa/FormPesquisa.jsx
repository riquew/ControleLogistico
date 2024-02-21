import React from "react";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";

const FormPesquisa = ({ labels }) => {
  const [form, setForm] = React.useState({
    re: "",
    categoria: "",
  });
  const [data, setData] = React.useState(null);
  const navigate = useNavigate();

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const sql = {
    //   sql: `SELECT * FROM POLICIAL WHERE RE = ${form.re}`,
    // };
    Api.get("pesquisar").then((response) => setData(response.data));
    navigate(`/pesquisar/${form.re}`);
  }

  if (labels[0] === "RE") {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={labels[0]}>{labels[0]}</label>
        <input
          type="text"
          name={labels[0]}
          id="re"
          value={form.re || ""}
          placeholder="140948"
          onChange={handleChange}
        />

        <button>Enviar</button>
      </form>
    );
  } else {
    return (
      <form>
        <label htmlFor={labels[0]}>{labels[0]}</label>
        <input type="text" name={labels} id="" placeholder="Nome do Produto" />
      </form>
    );
  }
};

export default FormPesquisa;
