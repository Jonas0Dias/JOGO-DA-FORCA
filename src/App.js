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
  const [displayletraforca, setDisplayLetraForca] = React.useState('block')
  const [letraclicada, setLetraClicada] = React.useState([])
  const [habilitado, setHabilitado] = React.useState(true)
  const [letrascertas, setLetrasCertas] = React.useState([])
  const [cor, setCor] = React.useState('black')
  const [chute, setChute] = React.useState('')
  const [chutecerto, setChuteCerto] = React.useState(false)
  return (
    <>
      <Jogo letra={letrainicial} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} letrascertas={letrascertas} setLetrasCertas={setLetrasCertas} cor={cor} setCor={setCor} chute={chute} setChute={setChute} chutecerto={chutecerto} setChuteCerto={setChuteCerto} />
      <div className='reiniciarjogo' style={{display:'none'}}>
        <div>Deseja Jogar novamente?</div>
        <div>
          <button>SIM</button>
          <button>NÃO</button>
        </div>
      </div>
      <Letras letra={letrainicial} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} letrascertas={letrascertas} setLetrasCertas={setLetrasCertas} cor={cor} setCor={setCor} chute={chute} setChute={setChute} chutecerto={chutecerto} setChuteCerto={setChuteCerto} />
      <Chute chute={chute} setChute={setChute} setLetraInicial={setLetraInicial} palavraescolhida={palavraescolhida} erros={erros} setErros={setErros} displayTracos={displayTracos} setDisplayTracos={setDisplayTracos} displayletraforca={displayletraforca} setDisplayLetraForca={setDisplayLetraForca} letraclicada={letraclicada} setLetraClicada={setLetraClicada} habilitado={habilitado} setHabilitado={setHabilitado} letrascertas={letrascertas} setLetrasCertas={setLetrasCertas} cor={cor} setCor={setCor} chutecerto={chutecerto} setChuteCerto={setChuteCerto} />
    </>
  );
}

export default App;
