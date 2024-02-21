import BackButton from "../BackButton/BackButton";
import FormModel from "../FormModel/FormModel";

const Inserir = () => {
  return (
    <div className="container">
      <BackButton />
      <div className="conteudo">
        <h1 className="titulo">Inserir</h1>
        <div>
          <FormModel titulo="Policial" modo="inserir" />
        </div>
        <div>
          <FormModel titulo="Item" modo="inserir" />
        </div>
      </div>
    </div>
  );
};

export default Inserir;
