import React, {useRef} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Paginainicial from "./Paginainicial.js";
import Login from './components/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact component={<Paginainicial/>} />
            <Route path="/Login" component={<Login/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default Rotas;