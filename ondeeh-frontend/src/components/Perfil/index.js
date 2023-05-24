import React, { useEffect, useState, useRef } from "react";
import "./index.css";

export default function Perfil(){

    function vaiJogar(){
        window.location.replace('/');
    }
    const comoJoga = () => {
        alert("Olá, seja bem-vinda/o! \n\n Ao entrar na página ou recarrega-la, um país é sorteado, assim, você deve tentar adivinha-lo! \n\n Para isso, digite o nome do país no campo de texto e clique em 'ir'. \n\n Caso o país digitado tenha alguma característica (moeda, língua, continente, território) semelhante ao país sorteado aparecerá na tabela abaixo. Verde caso os países possuam essa característica em comum, vermelho se não. No caso do território, casso o do país sorteado seja menor, aparecerá uma seta para baixo e, caso maior, uma seta para cima. \n\n Caso contrário, você receberá uma mensagem de erro. \n\n Para jogar novamente, basta recarregar a página. \n\n Boa sorte!");
      }
    return (
        <div className="perfil">
        <div className="appbar">
            <button onClick={()=>comoJoga()} type="submit">
                <img src="/interrogacao.png" className="icone" />
            </button>
            <img src="/perfil2.png" className="icone" />
           
        </div >
        <div className="body">
            <h2 className="espaco">__________________</h2>
            <h1>Perfil</h1>
            <button className="botaojogar" onClick={vaiJogar}>
            <h2>Jogar</h2>
            </button>
        </div>
        <div className="pontos">
            <h2 className= "pontuacao">Pontuação</h2>
            <div className="retangulo"> 
            <p className= "pontuacoes"> hmmm pontua</p>
            <p className= "pontuacoes"> zero pontos</p>
            </div>
        </div>
        </div>
         
    );
}