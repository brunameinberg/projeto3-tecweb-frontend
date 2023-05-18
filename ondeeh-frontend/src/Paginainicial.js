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
      
    }

  return (
    <div className="App">
      <Appbar />
      <Form atualizaPais={atualizaPais}/>
      <Tabela pais={pais}/>
    </div>
  );
}

export default Paginainicial;