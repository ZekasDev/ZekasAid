import React, { useState } from "react";
import "./styles.css";
import logoImg from "../../assets/logo.jpg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api"

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const email = localStorage.getItem('email')
  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try {
      console.log(email)
      await api.post('incidents', data, {
        headers: {
          Authorization: email,
        }
      })

      history.push('/profile')
    } catch (err) {
      console.log(err)
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva detalhadamente o caso para arrecadação de fundo.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#01ab6d" />
            Voltar.
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
          placeholder="Título do Caso" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <textarea 
          placeholder="Descrição" 
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
          <input 
          placeholder="Valor em Reais"
          value={value}
          onChange={e => setValue(e.target.value)} 
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

//1h14m24s
