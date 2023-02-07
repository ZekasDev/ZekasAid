import React from "react";
import "./styles.css";
import { FiLogIn } from 'react-icons/fi' //npm install react-icons assim que chegar em casa
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
          <button className="button" type="submit">Login</button>
          <a href="/register">
            <FiLogIn size={16} color="green"/>
            Cadastrar
          </a>
        </form>
        </section>  
        <img src={frontImg} alt='Background Img'/>
    </div>
  )
}
