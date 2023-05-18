import React, { useEffect, useState, useRef } from "react";

import "./index.css";
import axios from "axios";


export default function Login(props){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    

    return (
        <form className="">
          <input className="usuario" type="text"  name="usuario"  placeholder="Login" />
          <input className="senha" type="text"  name="senha"  placeholder="Senha" />
          <button className="btn" type="submit">ir</button>
        </form>
      );
}