import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeConteudo}>
      <div>
        <img src={logo} alt="" />
      </div>
      <h1>Controle Logístico</h1>
      <div className={styles.controleBotao}>
        <Link to="pesquisar">
          <button>PESQUISAR</button>
        </Link>
        <Link to="inserir">
          <button>INSERIR</button>
        </Link>
        <Link to="pagar">
          <button>PAGAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
