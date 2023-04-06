

export default function EyeBrow({text, className}) {
    return(
        <div className="ebContainer">
            <div className={className} style={{textTransform:'uppercase', color:'#0E0E0E'}}>
            <p>{text}</p>
            </div>
        </div>
    )
}