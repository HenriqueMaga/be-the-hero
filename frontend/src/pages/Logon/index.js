import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try{
            const response = await api.post('sessions', data)
            
            localStorage.setItem('ongId', response.data.id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input
                        placeholder="Seu E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Sua Senha"
                        value={password} type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>

            </section>

            <img src={herosImg} alt="Heros"/>
        </div>
    )
}