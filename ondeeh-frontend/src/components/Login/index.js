import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";
import axios from "axios";



export default function Login({setToken}){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function pegaLogin(e){
      e.preventDefault();
      setUsuario(usuario);
      setSenha(senha);  
      axios({
        method: 'post',
        url: 'http:///127.0.0.1:8000/api/token',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: usuario,
          password: senha
        }
    }).then(function(response){
      window.location.replace('/Perfil');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log('USUARIO NÃO ENCONTRADO');
      window.location.replace('/Cadastro');
    })
    ;
  }

    

    return (
      
      <div>
        <h1 className="titulo">Onde é?</h1>
        <h2 className="titulo2"> Fazer Login</h2>
        <form className="login" onSubmit={pegaLogin}>
        <label>
          <b>Login
        </b>
        </label>
          <input className="usuario" type="text"  name="usuario"  placeholder="Login" onChange={e => setUsuario(e.target.value)}/>
          <label>
          <b>Senha
        </b>
        </label>
          <input className="senha" type="text"  name="senha"  placeholder="Senha" senha={senha} onChange={e => setSenha(e.target.value)}/>
         
          <button className="botao" type="submit">Logar</button>
          
        </form>

      </div>

      
    
      );
}
