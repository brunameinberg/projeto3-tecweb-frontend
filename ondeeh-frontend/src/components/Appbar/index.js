import React from "react";
import "./index.css";
import ReactDOM, { Link } from 'react-router-dom';


export default function Appbar() {

  const comoJoga = () => {
    alert("Olá, seja bem-vinda/o! \n\n Ao entrar na página ou recarrega-la, um país é sorteado, assim, você deve tentar adivinha-lo! \n\n Para isso, digite o nome do país no campo de texto e clique em 'ir'. \n\n Caso o país digitado tenha alguma característica (moeda, língua, continente) semelhante ao país sorteado aparecerá na tabela abaixo. Verde caso os países possuam essa característica em comum, vermelho se não. \n\n Caso contrário, você receberá uma mensagem de erro. \n\n Para jogar novamente, basta recarregar a página. \n\n Boa sorte!");
  }

  return (

    <div className="appbar">
    
    <button onClick={()=>comoJoga()} type="submit">
    <img src="/interrogacao.png" className="icone" />
    </button>


    <h1>Onde é?</h1>

    <Link to="../Login/">
    <button type="submit">
    <img src="/perfil.png" className="icone" />
    </button>
    </Link>
    
  </div>

    );
  }
