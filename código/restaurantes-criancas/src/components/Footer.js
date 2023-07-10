import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <NavLink to="/">Página Inicial</NavLink>
        </li>
        <li></li>
        <li>
          <NavLink to="/FaleConosco">Fale Conosco </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
