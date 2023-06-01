import React, { useEffect, useState, useRef } from "react";
import "./index.css";

export default function Perfil(){

    function vaiJogar(){
        window.location.replace('/');
    }
    const comoJoga = () => {
        alert("Olá, seja bem-vinda/o! \n\n Ao entrar na página ou recarrega-la, um país é sorteado, assim, você deve tentar adivinha-lo! \n\n Para isso, digite o nome do país no campo de texto e clique em 'ir'. \n\n Caso o país digitado tenha alguma característica (moeda, língua, continente, território) semelhante ao país sorteado aparecerá na tabela abaixo. Verde caso os países possuam essa característica em comum, vermelho se não. No caso do território, casso o do país sorteado seja menor, aparecerá uma seta para baixo e, caso maior, uma seta para cima. \n\n Caso contrário, você receberá uma mensagem de erro. \n\n Para jogar novamente, basta recarregar a página. \n\n Boa sorte!");
      }
    const dicionario2 = localStorage.getItem("pontuacao");
    const pontuacao = JSON.parse(dicionario2);
    const dicionario = localStorage.getItem("usuario");
    const user = JSON.parse(dicionario);

    return (
        <div className="perfil">
        <div className="appbar">
            <button onClick={()=>comoJoga()} type="submit">
                <img src="/interrogacao.png" className="icone" />
            </button>
            <img src="/perfil2.png" className="icone" />
           
        </div >
        <div className="body">
            <h2 className="espaco">Olá {user}!</h2>
            <h1>Perfil</h1>
            <button className="botaojogar" onClick={vaiJogar}>
            <h2>Jogar</h2>
            </button>
        </div>
        <div className="pontos">
            <h2 className= "pontuacao">Pontuação</h2>
            <div className="retangulo"> 
            <p className= "pontuacoes"> Como funciona a pontuação?</p>
            <p className= "pontuacoes"> Todo jogo você inicia com 10 pontos e cada tentativa errada, você perde um ponto</p>
            <p className= "pontuacoes"> Se você acertar, você terá acesso quantos pontos fez</p>
            <p className="pontuacoes"> Caso você acerte de primeira, você terá ganho 10 pontos, caso acerte na segunda vez, voce terá 9 pontos e assim por diante</p>
            <p className="pontuacoes"> Boa Sorte!</p>
            <p className="pontuacoes"> No último jogo, você fez: {pontuacao} pontos!</p>
            </div>
        </div>
        </div>
         
    );
}