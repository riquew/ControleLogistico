import React from "react";
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
        <button>PESQUISAR</button>
        <button>INSERIR</button>
        <button>PAGAR</button>
      </div>
    </div>
  );
};

export default Home;
