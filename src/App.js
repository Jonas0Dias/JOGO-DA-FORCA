import Chute from './Componentes/Chute.js';
import Jogo from './Componentes/Jogo.js'
import Letras from './Componentes/Letras.js';
import React from 'react'
import palavras from "./Componentes/palavras.js"
let palavraescolhida;
const randomElement = palavras[Math.floor(Math.random() * palavras.length)];
palavraescolhida = randomElement.split('')

function App() {
  const [letrainicial, setLetraInicial] = React.useState('letrainicial')
  const [erros, setErros] = React.useState(0)
  const [displayTracos, setDisplayTracos] = React.useState('none')
  const [displayletraforca, setDisplayLetraForca] = React.useState('none')
  const [letraclicada, setLetraClicada] = React.useState([])
  const [habilitado,setHabilitado] = React.useState(true)
  return (
    <>
      <Jogo letra={letrainicial} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} />
      <Letras letra={letrainicial} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} />
      <Chute />
    </>
  );
}

export default App;
