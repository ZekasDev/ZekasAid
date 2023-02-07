import React from "react";
import "./styles.css";
import { FiLogIn, FiAlertTriangle } from "react-icons/fi";
import frontImg from "../../assets/zekasaid.jpg";
import logoImg from "../../assets/logo.jpg";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Usuário" />
          <button className="button" type="submit">
            Login
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#01ab6d" />
            Cadastrar
          </a>
          <a href="/recover">
            <FiAlertTriangle size={16} color="#01ab6d" />
            Esqueci minha senha
          </a>
        </form>
      </section>
      <img src={frontImg} alt="Background Img" />
    </div>
  );
}
