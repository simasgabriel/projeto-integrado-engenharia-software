import styles from "./Register.module.css";
import { useState, useEffect } from "react";
const Register = () => {
  return (
    <div>
      <h1>Cadastre-se</h1>
      <p>Cadastre-se para criar novos perfis de Restaurantes</p>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite sua senha do usuário"
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Digite sua senha novamente"
          />
        </label>
        <button className="btn">Cadastre-se </button>
      </form>
    </div>
  );
};

export default Register;
