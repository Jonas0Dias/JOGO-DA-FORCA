
import palavras from "../palavras"
export default function Jogo() {
    let erros = 0
    let palavraescolhida;
    const randomElement = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(randomElement)
    palavraescolhida = randomElement.split('')
    return (
        <div className="jogo">
            <img className="imagem" src={`assets/forca${erros}.png`} />
            <button onClick={() => '' } >Escolher Palavra</button>
            <div className="traços">
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