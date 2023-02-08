import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva detalhadamente o caso para arrecadação de fundo.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#01ab6d" />
            Voltar.
          </Link>
        </section>

        <form>
          <input placeholder="Título do Caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="WhatsApp" />
          <input placeholder="Valor em Reais" />
          

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

//1h14m24s
