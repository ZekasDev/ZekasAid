import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import { FiLogIn, FiAlertTriangle } from "react-icons/fi";
import frontImg from "../../assets/zekasaid.jpg";
import logoImg from "../../assets/logo.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { email });
      
      localStorage.setItem('email', email)
      localStorage.setItem('ong_name', response.data.name)

      history.push('/profile')
    } catch (err) {
      alert("Falha no login, tente novamente");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input placeholder="Senha" />
          <button className="button" type="submit">
            Login
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#01ab6d" />
            Cadastrar
          </Link>
          <Link className="back-link" to="/recover">
            <FiAlertTriangle size={16} color="#01ab6d" />
            Esqueci minha senha
          </Link>
        </form>
      </section>
      <img src={frontImg} alt="Background Img" />
    </div>
  );
}
