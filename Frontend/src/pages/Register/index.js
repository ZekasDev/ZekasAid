import React from 'react';
import './styles.css'

import { Link } from 'react-router-dom'
import logoImg from "../../assets/logo.jpg";
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#01ab6d" />
                        Não tenho cadastro.
                    </Link>
                </section>

                <form>
                    <input placeholder='Nome da ONG'/>
                    <input type="email" placeholder='E-mail'/>
                    <input placeholder='WhatsApp'/>
                    
                    <div className='input-group'>
                        <input placeholder='Cidade'/>
                        <input placeholder='UF' style={{ width: 80 }}/>
                    </div>

                    <input placeholder='Senha' type="password"/>
                    <input placeholder='Repita a Senha' type="password"/>

                    <button className='button' type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}