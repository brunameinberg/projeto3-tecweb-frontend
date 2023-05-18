import Form from "./components/Form";
import Appbar from "./components/Appbar";
import Tabela from "./components/Tabela";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Rotas from "./Rotas";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paginainicial from "./Paginainicial.js";
import Login from './components/Login';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Paginainicial/>} />
            <Route path="/Login" element={<Login/>} />
        </Routes>
        </BrowserRouter>
  );
}
export default App;