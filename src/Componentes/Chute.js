
export default function Chute(props) {
    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
            placeholder="Digite o seu palpite..."
                disabled={props.habilitado}
                value={props.chute}
                onChange={(event) => {

                    props.setChute(event.target.value)
                }
                } data-teste="guess-input"></input>
            <button
                disabled={props.habilitado}
                onClick={() => {
                    props.setButtonReiniciar('block')
                    props.setDisplayLetraForca('block')
                    props.setHabilitarIniciarJogo(true)
                    if (props.chute.toLowerCase() === props.palavraescolhida.join('')) {

                        props.setChuteCerto(true)
                        props.setHabilitado(true)
                        props.setCor('verde')


                    }
                    else {

                        props.setErros(6)
                        props.setHabilitado(true)
                        props.setCor('vermelho')


                    }
                }} data-teste="guess-button">Chutar!</button>
        </div>
    )
}