import React from 'react'
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // let novaletraclicada=[...props.letraclicada]
    return (
        <div className="letras">
            {
                alfabeto.map(l => 
                    <button 
                    key={l.toUpperCase()} 
                    className={`letra${props.letraclicada.length==0 || props.letraclicada.includes(l) ? 'inicial' : 'iniciada'}`} 
                    onClick={() => {
                        if (!props.letraclicada.includes(l)){
                            props.setLetraClicada([...props.letraclicada,l])
                            console.log(props.letraclicada)
                        }
                                    }
                            }
                   
                 >{l.toUpperCase()}</button>)
            }
        </div>
    )
}
