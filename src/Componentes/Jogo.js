import Letras from "./Letras"
import palavras from "./palavras"
import React from 'react'
import styled from 'styled-components';
import { Animated } from "react-animated-css";
export default function Jogo(props) {
    const [a, setA] = React.useState(false)
    const [b, setb] = React.useState(false)
    return (

        <div className="jogo">
            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={true}>
                <img data-test="game-image" className="imagem" src={`assets/forca${props.erros}.png`} />
            </Animated>

            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={true}>
                <div data-test='word' data-answer={props.palavraescolhida.join('')} className="traços" style={{ display: props.displayTracos }}>
                    {props.palavraescolhida.map(p =>

                        <>
                            <div className="letraforca" >
                                
                                    <h1 style={props.letraclicada.includes(p) || props.erros === 6 || props.chutecerto ? { display: props.displayletraforca } : { display: 'none' }} className={props.cor}

                                    >{p}</h1>
                                

                                <h2 style={props.letraclicada.includes(p) || props.erros === 6 || props.chutecerto ? { display: 'none' } : { display: 'block' }}>{'__'}</h2>
                            </div>
                        </>)
                    }
                </div>
            </Animated>



            <div className="divbotao">
                <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={!a}>
                    <Botão a={a} disabled={props.habilitariniciarjogo} className="botao1" data-test="choose-word" onClick={() => {
                        setA(true)
                        props.setHabilitado(false)
                        props.setLetraClicada('.')
                        props.setDisplayTracos('flex')
                        props.setLetraInicial('letrainicial letrainiciada')
                        if (props.erros === 6) {
                            setA(true)
                        }
                    }
                    }
                    >{!a ? 'INICIAR JOGO' : 'REINICIAR JOGO'}
                    </Botão>
                </Animated>


                <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={a}>
                    <button
                        onClick={() => window.location.reload(true)}
                        className="botao2" style={{ display: props.buttonreiniciar }}>REINICIAR JOGO
                    </button>
                </Animated>

            </div>
        </div>
    )
}

const Botão = styled.button`
display:${props => props.a ? 'none' : 'flex'}
`






















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