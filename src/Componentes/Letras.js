import React from 'react'
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // let novaletraclicada=[...props.letraclicada]
    let j=0
    return (
        <div className="letras">
            {
                alfabeto.map(l => 
                    <button
                    disabled={props.habilitado}
                    key={l.toUpperCase()} 
                    className={`letra${props.letraclicada.length==0 || props.letraclicada.includes(l) ? 'inicial' : 'iniciada'}`} 
                    onClick={() => {
                       
                        if (!props.letraclicada.includes(l)){        
                            const novoletraclicada=[...props.letraclicada,l]      
                            props.setLetraClicada([...props.letraclicada,l])                          
                           
                        }
                        if(props.palavraescolhida.includes(l)){ 
                            const novoletrascertas=[...props.letrascertas,l]
                            props.setLetrasCertas(novoletrascertas)
                            console.log(novoletrascertas)
                            for (let i=0; i<props.palavraescolhida.length;i++){
                                if (novoletrascertas.includes(props.palavraescolhida[i])){
                                    j=j+1
                                }
                            }
                        
                                  
                        }
                        if (j===props.palavraescolhida.length){
                            alert('vc venceu')
                            props.setHabilitado(true)
                            props.setCor('verde')

                        }


                        if(!props.palavraescolhida.includes(l)){
                            const novoerros=props.erros+1
                            props.setErros(novoerros)
                            if(novoerros===6){
                                alert('cabo o jogo, tu perdeu')
                                props.setHabilitado(true)
                                props.setCor('vermelho')
                                props.setDisplayLetraForca('block')
                                console.log(props.displayletraforca)
                            }
    
                        }

                        
                                    }
                            }
                   
                 >{l.toUpperCase()}</button>)
            }
        </div>
    )
}


