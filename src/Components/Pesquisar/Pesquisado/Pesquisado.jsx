import React from "react";
import { useParams } from "react-router-dom";
import Api from "../../../Api";
import BackButton from "../../BackButton/BackButton";

const Pesquisado = () => {
  const id = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getInfo() {
      Api.get(`pesquisar/${id.id}`).then((response) =>
        setData(response.data[0])
      );
    }
    getInfo();
  }, [id]);

  return (
    <div className="container">
      <BackButton />
      {data && (
        <div className="conteudo">
          <h1>{data.RE}</h1>
          <p>
            {data.POSTO} {data.QRA}
          </p>
          <p>{data.UNIDADE}</p>
        </div>
      )}
    </div>
  );
};

export default Pesquisado;
