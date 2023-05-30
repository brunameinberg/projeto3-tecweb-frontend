import React, { useEffect, useState } from "react";
import "./index.css";
import Form from "../Form";
import axios from "axios";

export default function Tabela(props) {

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


  // obter uma lista de chaves do objeto
  const chaves = Object.keys(paises);

  // gerar um índice aleatório dentro do intervalo de chaves do objeto
  const indiceAleatorio = Math.floor(Math.random() * chaves.length);

  // usar o índice aleatório para selecionar uma chave aleatória
  const chaveAleatoria = chaves[indiceAleatorio];

  console.log(chaveAleatoria)

  // acessar o valor correspondente à chave aleatória no objeto
  const valorAleatorio = paises[chaveAleatoria];

  console.log(valorAleatorio)

  const [moedaSorteada, setMoedaSorteada] = useState('');
  const [linguaSorteada, setLinguaSorteada] = useState('');
  const [continenteSorteado, setContinenteSorteado] = useState('');
  const [territorioSorteado, setTerritorioSorteado] = useState('');


  const salvarPaissorteado = () => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/paises/" + valorAleatorio)
      .then((response) => {
        console.log('FUI CHAMADO MAIS DE UMA VEZ');
        console.log(response.data[0].area.total);
        setMoedaSorteada(response.data[0]["unidades-monetarias"][0].nome);
        setLinguaSorteada(response.data[0].linguas[0].nome);
        setContinenteSorteado(response.data[0].localizacao.regiao.nome);
        setTerritorioSorteado(response.data[0].area.total);
        localStorage.setItem('pais', JSON.stringify(chaveAleatoria));
        
      })
  }

  useEffect(() => {
    console.log('entrei aqui');
    salvarPaissorteado();
  }, []);

  const [moedaDigitada, setMoedaDigitada] = useState(String);
  const [linguaDigitada, setLinguaDigitada] = useState(String);
  const [continenteDigitado, setContinenteDigitado] = useState(String);
  const [territorioDigitado, setTerritorioDigitado] = useState(parseInt);
  const [dados, setDados] = useState([]);
  const [contador, setContador] = useState(false);
  const [pontuacao, setPontuacao] = useState(10);
  

  let UFpaisdigitado = paises[props.pais];
  //console.log(paises[props.pais]);
  
  console.log(`UFpaisdigitado ${UFpaisdigitado}`);
  const pegadadosPaisdigitado = () => {
    console.log(`UFpaisdigitado ${UFpaisdigitado}aaaaaaaaaaaaaaaaaaa`);
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/paises/" + UFpaisdigitado)
      .then((response) => {
        console.log(response.data[0])
        setMoedaDigitada(response.data[0]["unidades-monetarias"][0].nome);
        setLinguaDigitada(response.data[0].linguas[0].nome);
        setContinenteDigitado(response.data[0].localizacao.regiao.nome);
        setTerritorioDigitado(response.data[0].area.total);
        setContador(true);
      })
  }

  useEffect(() => {
    if (UFpaisdigitado !== undefined){
      pegadadosPaisdigitado();

    }
    
  }, [UFpaisdigitado]);

  console.log(`moeda digitada ${moedaDigitada}`);
  console.log(`moeda sorteada ${moedaSorteada}`);
  console.log(`lingua digitada ${linguaDigitada}`);
  console.log(`lingua sorteada ${linguaSorteada}`);
  console.log(`continente digitado ${continenteDigitado}`);
  console.log(`continente sorteado ${continenteSorteado}`);
  console.log(`território digitado ${territorioDigitado}`);
  console.log(`território sorteado ${territorioSorteado}`);

  const checaMoeda = () => {
    if (moedaDigitada === moedaSorteada) {
      return <img src="/verde.webp" className="icone" />
    } else {
      return <img src="/vermelho.png" className="icone" />
    }
    
  }

  const checaLingua = () => {
    if (linguaDigitada === linguaSorteada) {
      return <img src="/verde.webp" className="icone" />
    } else {
      return <img src="/vermelho.png" className="icone" />
    }
  }

  const checaContinente = () => {
    if (continenteDigitado === continenteSorteado) {
      return <img src="/verde.webp" className="icone" />
    } else {
      return <img src="/vermelho.png" className="icone" />
    }
  }
  const checaTerritório = () => {
    if (territorioDigitado > territorioSorteado) {
      return <img src="/setabaixo.png" className="icone" />
    } else if (territorioDigitado < territorioSorteado) {
      return <img src="/setacima.png" className="icone" />
    }
    else{
      return <img src="/verde.webp" className="icone" />
    }
  }

  const addLinha = () => {
    setDados([...dados,{paistabela:props.pais, moeda:checaMoeda(), 
      lingua: checaLingua(),continente: checaContinente(), territorio: checaTerritório() }])
    checaVitoria();
    setPontuacao(pontuacao-1);
  }

  const dicionario = localStorage.getItem("usuario");
  const usuario = JSON.parse(dicionario);
  console.log(pontuacao);

  function checaVitoria(){
    if (moedaDigitada === moedaSorteada && linguaDigitada === linguaSorteada && continenteDigitado === continenteSorteado && territorioDigitado === territorioSorteado){
      window.location.replace('/Vitoria');
      localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
      
      axios.post({
        method: 'post',
        url: 'http:///127.0.0.1:8000/api/token/api/pontuacao',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: usuario,
          pontuacao: pontuacao
        }
    })
  }}
  useEffect (()=>{
    if (contador==true){
     addLinha();
     setContador(false); 
    }   
  }, [contador]
  )

  return (
    <table>
      <thead>
      <tr>
        <th>País</th>
        <th>
          <img src="/moeda.png" className="icone" />
        </th>
        <th>
          <img src="/fala.png" className="icone" />
        </th>
        <th>
        <img src="/continente.png" className="icone" />
        </th>
        <th>
        <img src="/territorio.png" className="icone" />
        </th>
      </tr>
      </thead>
      <tbody>
        {dados.map((linha,index) => (
          <tr key={index} >
            <td>{linha.paistabela}</td>
            <td>{linha.moeda}</td>
            <td>{linha.lingua}</td>
            <td>{linha.continente}</td>
            <td>{linha.territorio}</td>
          </tr>
        ))}
      </tbody>

    </table>)
}