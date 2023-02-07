import React from "react";
import "./styles.css";
import frontImg from '../../assets/zekasaid.jpg'
import logoImg from '../../assets/logo.jpg'

export default function Login() {
  return (
    <div className="login-container"> 
        <section className="form">
        <img src={logoImg} alt='Logo'/>
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Usuário" />
          <button type="submit">Login</button>
          <a href="/register">
            Cadastrar
          </a>
        </form>
        </section>  
        <img src={frontImg} alt='Background Img'/>
    </div>
  )
}
