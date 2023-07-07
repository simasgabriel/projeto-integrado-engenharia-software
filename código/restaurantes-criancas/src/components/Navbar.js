import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Restaurantes para Crianças
      </NavLink>

      {!user && (
        <>
          <li className={styles.links_list}>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Entrar
            </NavLink>
          </li>
          <li className={styles.links_list}>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Cadastrar-se
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li className={styles.links_list}>
            <NavLink
              to="/posts/create"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Criar novo perfil de restaurante
            </NavLink>
          </li>
          <li className={styles.links_list}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Meus posts
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <li className={styles.links_list}>
          <button className={styles.btn} onClick>
            Sair
          </button>
        </li>
      )}
    </nav>
  );
};

export default Navbar;
