import Form from "./components/Form";
import Appbar from "./components/Appbar";
import Tabela from "./components/Tabela";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paginainicial from "./Paginainicial.js";
import Login from './components/Login';
import Perfil from './components/Perfil';
import Vitoria from './components/Vitoria';
import Cadastro from './components/Cadastro';


const App = () => {



  return (
    <BrowserRouter className = "app">
        <Routes>
            
            <Route path="" element={<Paginainicial/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Perfil" element={<Perfil/>} />
            <Route path="/Vitoria" element={<Vitoria/>} />
            <Route path="/Cadastro" element={<Cadastro/>} />
        </Routes>
        </BrowserRouter>
  );
}
export default App;