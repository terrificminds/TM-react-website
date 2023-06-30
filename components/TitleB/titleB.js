

export default function TitleB({title, textA, textB, textC}) {
    return(
        <div className="center" style={{flexDirection:'column'}}>
            <div className="titleB helMed center"><h3 style={{color:'#000'}}>{title}</h3></div>
            <div className="descriptB helReg" style={{}}>
                <p style={{color:'#3F3F3F', lineHeight:'180%'}}>{textA} {textB}<br/> {textC}</p>
            </div>
        </div>
    )
}