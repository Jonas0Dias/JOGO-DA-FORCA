import Chute from './Componentes/Chute.js';
import Jogo from './Componentes/Jogo.js'
import Letras from './Componentes/Letras.js';
import React from 'react'


function App() {
  const [letrainicial, setLetraInicial] = React.useState('letrainicial')
  return (
    <>
    <Jogo letra={letrainicial} setLetraInicial={setLetraInicial} />
    <Letras letra={letrainicial}/>
    <Chute/>
    </>
  );
}

export default App;
