import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Restaurantes <span>para Crianças</span>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/">Página Inicial</NavLink>
        </li>
        <li>
          <NavLink to="/QuemSomos">Quem somos </NavLink>
        </li>
        <li>
          <NavLink to="/FaleConosco">Fale Conosco </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
