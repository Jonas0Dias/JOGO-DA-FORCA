import Chute from './Componentes/Chute.js';
import Jogo from './Componentes/Jogo.js'
import Letras from './Componentes/Letras.js';
import React from 'react'
import palavras from "./Componentes/palavras.js"
import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js';
import { Animated } from 'react-animated-css';
let palavraescolhida;
const randomElement = palavras[Math.floor(Math.random() * palavras.length)];
palavraescolhida = randomElement.split('')

function App() {
  const [letrainicial, setLetraInicial] = React.useState('letrainicial')
  const [erros, setErros] = React.useState(0)
  const [displayTracos, setDisplayTracos] = React.useState('none')
  const [displayletraforca, setDisplayLetraForca] = React.useState('block')
  const [letraclicada, setLetraClicada] = React.useState([])
  const [habilitado, setHabilitado] = React.useState(true)
  const [letrascertas, setLetrasCertas] = React.useState([])
  const [cor, setCor] = React.useState('black')
  const [chute, setChute] = React.useState('')
  const [chutecerto, setChuteCerto] = React.useState(false)
  const [buttonreiniciar, setButtonReiniciar] = React.useState('none')
  const [habilitariniciarjogo, setHabilitarIniciarJogo] = React.useState(false)
  return (
    <>
      <Header></Header>
      <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={true}>
        <Jogo letra={letrainicial} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} letrascertas={letrascertas} setLetrasCertas={setLetrasCertas} cor={cor} setCor={setCor} chute={chute} setChute={setChute} chutecerto={chutecerto} setChuteCerto={setChuteCerto} buttonreiniciar={buttonreiniciar} setButtonReiniciar={setButtonReiniciar} habilitariniciarjogo={habilitariniciarjogo} setHabilitarIniciarJogo={setHabilitarIniciarJogo} />
        <Letras letra={letrainicial} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} letrascertas={letrascertas} setLetrasCertas={setLetrasCertas} cor={cor} setCor={setCor} chute={chute} setChute={setChute} chutecerto={chutecerto} setChuteCerto={setChuteCerto} buttonreiniciar={buttonreiniciar} setButtonReiniciar={setButtonReiniciar} habilitariniciarjogo={habilitariniciarjogo} setHabilitarIniciarJogo={setHabilitarIniciarJogo} />
        <Chute chute={chute} setChute={setChute} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} letrascertas={letrascertas} setLetrasCertas={setLetrasCertas} cor={cor} setCor={setCor} chutecerto={chutecerto} setChuteCerto={setChuteCerto} buttonreiniciar={buttonreiniciar} setButtonReiniciar={setButtonReiniciar} habilitariniciarjogo={habilitariniciarjogo} setHabilitarIniciarJogo={setHabilitarIniciarJogo} />
        
      </Animated>
      <Footer erros={erros}></Footer>

    </>
  );
}

export default App;
