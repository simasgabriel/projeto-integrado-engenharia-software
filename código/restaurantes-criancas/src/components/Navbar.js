import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Restaurantes para Crianças
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink to="/Register">Cadastrar-se</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Entrar </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
