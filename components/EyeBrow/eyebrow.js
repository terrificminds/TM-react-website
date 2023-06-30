

export default function EyeBrow({text, className}) {
    return(
        <div className="ebContainer">
            <div className={className} style={{textTransform:'uppercase', color:'grey'}}>
            <p>{text}</p>
            </div>
        </div>
    )
}