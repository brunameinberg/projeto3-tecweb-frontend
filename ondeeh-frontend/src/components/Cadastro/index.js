import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";
import axios from "axios";


export default function Cadastro (){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function cadastrar(e){
        e.preventDefault();
        setUsuario(usuario);
        setSenha(senha);  
        axios({
            method: 'post',
            url: 'http:///127.0.0.1:8000/api/users/',
            headers: {
            'Content-Type': 'application/json',
            },
            data: {
            username: usuario,
            password: senha
            }
        }).then((res)=>{window.location.replace('/Perfil')});
    }

    return (
        <div>
            <h2 className="titulo2"> Fazer Cadastro</h2>
            <form className="login" onSubmit={cadastrar}>
            <label>
            <b>Usuario
            </b>
            </label>
            <input className="usuario" type="text"  name="usuario"  placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
            <label>
            <b>Senha
            </b>
            </label>
            <input className="senha" type="text"  name="senha"  placeholder="Senha" senha={senha} onChange={e => setSenha(e.target.value)}/>
            
            <button className="botao" type="submit">Criar usuário</button>
            
            </form>
        </div>
    );


}