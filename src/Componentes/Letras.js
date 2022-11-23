import React from 'react'
export default function Letras(props) {
    console.log(props)
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="letras">
            {
                alfabeto.map(l => <button key={l.toUpperCase()} className={props.letra}>{l.toUpperCase()}</button>)
            }
        </div>
    )
}
