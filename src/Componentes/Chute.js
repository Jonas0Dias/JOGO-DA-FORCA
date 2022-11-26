
export default function Chute(props) {
    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
                disabled={props.habilitado}
                value={props.chute}
                onChange={(event) => {

                    props.setChute(event.target.value)
                }
                } data-teste="guess-input"></input>
            <button 
            disabled={props.habilitado}
            onClick={() => {
                if (props.chute === props.palavraescolhida.join('')) {
                    props.setChuteCerto(true)
                    props.setHabilitado(true)
                    props.setCor('verde')
                    props.setDisplayLetraForca('block')
                }
                else {
                    props.setErros(6)
                    props.setHabilitado(true)
                    props.setCor('vermelho')
                    props.setDisplayLetraForca('block')
                }
            }} data-teste="guess-button">Chutar!</button>
        </div>
    )
}