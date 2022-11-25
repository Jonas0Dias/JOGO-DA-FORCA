import Letras from "./Letras"
import palavras from "./palavras"
import React from 'react'
export default function Jogo(props) {
    return (

        <div className="jogo">
            <img className="imagem" src={`assets/forca${props.erros}.png`} />
            <button onClick={() => {
                props.setLetraClicada('~')
                props.setDisplayTracos('flex')
                props.setLetraInicial('letrainicial letrainiciada')
                                    }
                            } 
            >Escolher Palavra</button>
            <div className="traços" style={{ display: props.displayTracos }}>
                {props.palavraescolhida.map(p =>
                    <>
                        <div className="letraforca" >
                            <h1 style={{ display: props.displayletraforca }}>{p}</h1>
                            <h2 >{'__'}</h2>
                        </div>
                    </>)
                }
                  
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