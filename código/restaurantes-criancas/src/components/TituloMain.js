import styles from "./TituloMain.module.css";
import { NavLink } from "react-router-dom";

const TituloMain = () => {
  return (
    <div className={styles.titulo}>
      <div className={styles.brand}>Restaurantes para Crianças</div>
      <p>
        Descubra e avalie estabelecimentos com espaço kids (ou brinquedão),
        fraldário e cadeirão
      </p>
    </div>
  );
};

export default TituloMain;
