import React, { useEffect, useState, useRef } from "react";

import "./index.css";
import axios from "axios";


export default function Login(props){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    

    return (
      
      <div>
        <h1 className="titulo">Onde é?</h1>
        <form className="login">
        <label>
          <b>Login
        </b>
        </label>
          <input className="usuario" type="text"  name="usuario"  placeholder="Login" />
          <label>
          <b>Senha
        </b>
        </label>
          <input className="senha" type="text"  name="senha"  placeholder="Senha" />
          <button className="botao" type="submit">ir</button>
        </form>
      </div>
    
      );
}