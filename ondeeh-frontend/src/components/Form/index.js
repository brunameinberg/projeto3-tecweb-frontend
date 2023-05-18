import React, { useState }  from "react";
import "./index.css";
import axios from "axios";
import Tabela from "../Tabela";

export default function Form(props) {
  const {atualizaPais} = props;
        const [pais, setPais] = useState('');
        const handleChange = (event) => {
          setPais(event.target.value);
        };
        const salvarPais = (event) => {
            event.preventDefault();
            // props.carregaPaises();
            setPais("");
        }


  return (
    <form className="form-card" onSubmit={salvarPais}>
      <input className="form-card-title" type="text"  name="pais"  onChange={(e)=>setPais(e.target.value)} placeholder="Digite o nome do país" />
      <button className="btn" onClick={()=>atualizaPais(pais)} type="submit">ir</button>
    </form>
  );

}
