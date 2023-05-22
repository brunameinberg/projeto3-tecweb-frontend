import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";
import axios from "axios";


async function loginUser(credentials) {
  return fetch('http://localhost:8080/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
  }

export default function Login({setToken}){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        usuario,
        senha
      });
      setToken(token);
    }
    

    return (
      
      <div>
        <h1 className="titulo">Onde é?</h1>
        <form className="login" onSubmit={handleSubmit}>
        <label>
          <b>Login
        </b>
        </label>
          <input className="usuario" type="text"  name="usuario"  placeholder="Login" onChange={e => setUsuario(e.target.value)}/>
          <label>
          <b>Senha
        </b>
        </label>
          <input className="senha" type="text"  name="senha"  placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
          <button className="botao" type="submit" >ir</button>
        </form>
      </div>
    
      );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};