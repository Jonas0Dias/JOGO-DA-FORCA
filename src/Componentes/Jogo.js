import Letras from "./Letras"
import palavras from "./palavras"
import React from 'react'
export default function Jogo(props) {
    const [erros, setErros] = React.useState(0)
    const [displayTracos, setDisplayTracos] = React.useState('none')
    let palavraescolhida;
    const randomElement = palavras[Math.floor(Math.random() * palavras.length)];
    palavraescolhida = randomElement.split('')
    console.log(palavraescolhida)
    console.log(props)
    // console.log(setLetraInicial)
    return (

        <div className="jogo">
            <img className="imagem" src={`assets/forca${erros}.png`} />
            <button onClick={() => {
                setDisplayTracos('block')
                props.setLetraInicial('letrainicial letrainiciada')
            }} >Escolher Palavra</button>
            <div className="traços" style={{ display: displayTracos }}>
                {palavraescolhida.map(p => <>__ </>)}
            </div>
        </div>
    )
}
























// function shuffleArray(arr) {
//     // Loop em todos os elementos
// for (let i = arr.length - 1; i > 0; i--) {
//         // Escolhendo elemento aleatório
//     const j = Math.floor(Math.random() * (i + 1));
//     // Reposicionando elemento
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }
// // Retornando array com aleatoriedade
// return arr;
// }