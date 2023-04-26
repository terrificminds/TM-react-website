

export default function ButtonB({text, className, style}) {
    return(
        <button className={className} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <p>{text}</p>
        </button>
    )
}