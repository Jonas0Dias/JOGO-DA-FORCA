export default function Footer(props){
    return(
        <div className="footer">
            <p>{`Erros: ${props.erros}`}</p>
        </div>
    )
}