import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../../src/assets/logo.jpg";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";
import api from "../../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const email = localStorage.getItem("email");
  const ongName = localStorage.getItem("ong_name");
 
  const history = useHistory()

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: email,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [email]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: email,
        },
      });
      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      console.log(err)
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#01ab6d" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 1h27m43s
