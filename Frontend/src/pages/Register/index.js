import React, { useState } from "react";

import "./styles.css";
import api from "../../services/api";

import { Link, useHistory} from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
      password,
    };

    try {
      const response = await api.post("ongs", data);

      alert(`Cadastro realizado com sucesso: ${response.data.id}`);
      history.push('/')
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#01ab6d" />
            Voltar.
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <input placeholder="Senha" type="password" />
          <input placeholder="Repita a Senha" type="password" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
