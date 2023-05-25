import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import axios from "axios";

export default function Vitoria(props){

    function vaiJogar(){
        window.location.replace('/');
    }

    const paises = {
        'Afeganistão': 'AF',
        'África do Sul': 'ZA',
        'Albânia': 'AL',
        'Alemanha': 'DE',
        'Andorra': 'AD',
        'Angola': 'AO',
        'Antígua e Barbuda': 'AG',
        'Arábia Saudita': 'SA',
        'Argélia': 'DZ',
        'Argentina': 'AR',
        'Armênia': 'AM',
        'Austrália': 'AU',
        'Áustria': 'AT',
        'Azerbaijão': 'AZ',
        'Bahamas': 'BS',
        'Bahrein': 'BH',
        'Bangladesh': 'BD',
        'Barbados': 'BB',
        'Belarus (Bielorrússia)': 'BY',
        'Bélgica': 'BE',
        'Belize': 'BZ',
        'Benin': 'BJ',
        'Butão': 'BT',
        'Bolívia': 'BO',
        'Bósnia e Herzegovina': 'BA',
        'Botsuana': 'BW',
        'Brasil': 'BR',
        'Brunei': 'BN',
        'Bulgária': 'BG',
        'Burkina Faso': 'BF',
        'Burundi': 'BI',
        'Cabo Verde': 'CV',
        'Camboja': 'KH',
        'Camarões': 'CM',
        'Canadá': 'CA',
        'Catar': 'QA',
        'Cazaquistão': 'KZ',
        'Chade': 'TD',
        'Chile': 'CL',
        'China': 'CN',
        'Chipre': 'CY',
        'Colômbia': 'CO',
        'Comores': 'KM',
        'Congo-Brazzaville': 'CG',
        'Congo-Kinshasa': 'CD',
        'Coreia do Norte': 'KP',
        'Coreia do Sul': 'KR',
        'Costa do Marfim': 'CI',
        'Costa Rica': 'CR',
        'Croácia': 'HR',
        'Cuba': 'CU',
        'Dinamarca': 'DK',
        'Djibuti': 'DJ',
        'Dominica': 'DM',
        'Egito': 'EG',
        'El Salvador': 'SV',
        'Emirados Árabes Unidos': 'AE',
        'Equador': 'EC',
        'Eritreia': 'ER',
        'Eslováquia': 'SK',
        'Eslovênia': 'SI',
        'Espanha': 'ES',
        'Estados Unidos': 'US',
        'Estônia': 'EE',
        'Eswatini': 'SZ',
        'Etiópia': 'ET',
        'Fiji': 'FJ',
        'Filipinas': 'PH',
        'Finlândia': 'FI',
        'França': 'FR',
        'Gabão': 'GA',
        'Gâmbia': 'GM',
        'Gana': 'GH',
        'Geórgia': 'GE',
        'Granada': 'GD',
        'Grécia': 'GR',
        'Guatemala': 'GT',
        'Guiana': 'GY',
        'Guiné': 'GN',
        'Guiné Equatorial': 'GQ',
        'Guiné-Bissau': 'GW',
        'Haiti': 'HT',
        'Honduras': 'HN',
        'Hungria': 'HU',
        'Iêmen': 'YE',
        'Ilhas Marshall': 'MH',
        'Ilhas Salomão': 'SB',
        'Índia': 'IN',
        'Indonésia': 'ID',
        'Irã': 'IR',
        'Iraque': 'IQ',
        'Irlanda': 'IE',
        'Islândia': 'IS',
        'Israel': 'IL',
        'Itália': 'IT',
        'Jamaica': 'JM',
        'Japão': 'JP',
        'Jordânia': 'JO',
        'Kiribati': 'KI',
        'Kosovo': 'XK',
        'Kuwait': 'KW',
        'Laos': 'LA',
        'Lesoto': 'LS',
        'Letônia': 'LV',
        'Líbano': 'LB',
        'Libéria': 'LR',
        'Líbia': 'LY',
        'Liechtenstein': 'LI',
        'Lituânia': 'LT',
        'Luxemburgo': 'LU',
        'Macedônia do Norte': 'MK',
        'Madagascar': 'MG',
        'Malásia': 'MY',
        'Malaui': 'MW',
        'Maldivas': 'MV',
        'Mali': 'ML',
        'Malta': 'MT',
        'Marrocos': 'MA',
        'Maurício': 'MU',
        'Mauritânia': 'MR',
        'México': 'MX',
        'Micronésia': 'FM',
        'Moçambique': 'MZ',
        'Moldávia': 'MD',
        'Mônaco': 'MC',
        'Mongólia': 'MN',
        'Montenegro': 'ME',
        'Myanmar (Birmânia)': 'MM',
        'Namíbia': 'NA',
        'Nauru': 'NR',
        'Nepal': 'NP',
        'Nicarágua': 'NI',
        'Níger': 'NE',
        'Nigéria': 'NG',
        'Noruega': 'NO',
        'Nova Zelândia': 'NZ',
        'Omã': 'OM',
        'Países Baixos (Holanda)': 'NL',
        'Palau': 'PW',
        'Panamá': 'PA',
        'Papua Nova Guiné': 'PG',
        'Paquistão': 'PK',
        'Paraguai': 'PY',
        'Peru': 'PE',
        'Polônia': 'PL',
        'Portugal': 'PT',
        'Quênia': 'KE',
        'Quirguistão': 'KG',
        'Reino Unido': 'GB',
        'República Centro-Africana': 'CF',
        'República Dominicana': 'DO',
        'República Tcheca': 'CZ',
        'Romênia': 'RO',
        'Rússia': 'RU',
        'Ruanda': 'RW',
        'Saara Ocidental': 'EH',
        'Saint Kitts e Nevis': 'KN',
        'Saint Vincent e Granadinas': 'VC',
        'Saint-Barthélemy': 'BL',
        'Saint-Martin': 'MF',
        'Samoa': 'WS',
        'San Marino': 'SM',
        'Santa Lúcia': 'LC',
        'São Cristóvão e Nevis': 'KN',
        'São Tomé e Príncipe': 'ST',
        'Senegal': 'SN',
        'Serra Leoa': 'SL',
        'Sérvia': 'RS',
        'Seychelles': 'SC',
        'Singapura': 'SG',
        'Síria': 'SY',
        'Somália': 'SO',
        'Sri Lanka': 'LK',
        'Suazilândia': 'SZ',
        'Sudão': 'SD',
        'Sudão do Sul': 'SS',
        'Suécia': 'SE',
        'Suíça': 'CH',
        'Suriname': 'SR',
        'Tailândia': 'TH',
        'Taiwan': 'TW',
        'Tajiquistão': 'TJ',
        'Tanzânia': 'TZ',
        'Timor-Leste (Timor Oriental)': 'TL',
        'Togo': 'TG',
        'Tonga': 'TO',
        'Trinidad e Tobago': 'TT',
        'Tunísia': 'TN',
        'Turcomenistão': 'TM',
        'Turquia': 'TR',
        'Tuvalu': 'TV',
        'Ucrânia': 'UA',
        'Uganda': 'UG',
        'Uruguai': 'UY',
        'Uzbequistão': 'UZ',
        'Vanuatu': 'VU',
        'Vaticano': 'VA',
        'Venezuela': 'VE',
        'Vietnã': 'VN',
        'Zâmbia': 'ZM',
        'Zimbábue': 'ZW'
      };

    

    const [descricaodopais, setDescricaodopais] = useState("");
    const [capitaldopais, setCapitaldopais] = useState("");

    useEffect(() => {
      console.log('entrei aqui');
      pegadadosPaisdavitoria();

    }, []);

    const dicionario = localStorage.getItem("pais");
    const pais = JSON.parse(dicionario);
    

    let UFpaisdigitado = paises[pais];
    console.log(`UFpaisdigitado ${UFpaisdigitado}`);

    const pegadadosPaisdavitoria = () => {
      console.log(`UFpaisdigitado ${UFpaisdigitado}aaaaaaaaaaaaaaaaaaa`);
      axios
        .get("https://servicodados.ibge.gov.br/api/v1/paises/" + UFpaisdigitado)
        .then((response) => {
          console.log(response.data[0])
          setCapitaldopais(response.data[0].governo.capital.nome);
          setDescricaodopais(response.data[0].historico);
 
        })
    }
    


    return (
      <div>
        <div className="up">
          <div className="header">
            <h1 className="titulo">Onde é?</h1>
            <button className="botaojogar" onClick={vaiJogar}>
              <h2>Jogar de novo</h2>
            </button>
          </div>
          <h1 className="titulo">Parabéns! Você acertou!</h1>
        </div>
        <div>
          <h1 className="titulo">O país é {pais}</h1>
          <h2 className="titulo">A capital é {capitaldopais}</h2>
        </div>
        <div className="centraliza">
          <h1 >Saiba mais sobre {pais}: </h1>
          <div className="descricao">
            <h2 >{descricaodopais}</h2>
          </div>
        </div>
        
      </div>
    
      );
}