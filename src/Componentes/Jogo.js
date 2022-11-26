import Letras from "./Letras"
import palavras from "./palavras"
import React from 'react'
export default function Jogo(props) {
    return (

        <div className="jogo">
            <img data-test="game-image" className="imagem" src={`assets/forca${props.erros}.png`} />
            <button disabled={props.habilitariniciarjogo} className="botao1" data-test="choose-word" onClick={() => {
                props.setHabilitado(false)
                props.setLetraClicada('.')
                props.setDisplayTracos('flex')
                props.setLetraInicial('letrainicial letrainiciada')
                                    }
                            } 
            >INICIAR JOGO</button>
            <button
            onClick={()=> window.location.reload(true)} 
            className="botao2" style={{display:props.buttonreiniciar}}>REINICIAR JOGO</button>
            <div data-test='word' data-answer = {props.palavraescolhida.join('')} className="traços" style={{ display: props.displayTracos }}>
                {props.palavraescolhida.map(p => 
                   
                    <>
                        <div className="letraforca" >
                            <h1 style={props.letraclicada.includes(p) ||props.erros===6 || props.chutecerto ? {display:props.displayletraforca} : {display:'none'}} className={props.cor} 
                                
                            >{p}</h1>
                            <h2 style={props.letraclicada.includes(p) ||props.erros===6 ||props.chutecerto ? {display:'none'} : {display:'block'}}>{'__'}</h2>
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