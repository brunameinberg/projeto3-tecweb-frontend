import Form from "./components/Form";
import Appbar from "./components/Appbar";
import Tabela from "./components/Tabela";
import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


function Paginainicial() {
  const [pais, setPais] = useState([]);

    function atualizaPais(pais) {
      setPais(pais);
      axios
      .post(`http://127.0.0.1:8000/api/paises/${pais}`);
    }

  return (
    <div className="App">
      <Appbar />
      <Link to="../Login/index.js">
      <button>
      <img src="/perfil.png" className="icone" />
      </button>
      </Link>
      <Form atualizaPais={atualizaPais}/>
      <Tabela pais={pais}/>
    </div>
  );
}

export default Paginainicial;