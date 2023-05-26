

export default function ButtonB({text, className, onClick, style}) {
    return(
        <button onClick={onClick} className={className} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <p>{text}</p>
        </button>
    )
}