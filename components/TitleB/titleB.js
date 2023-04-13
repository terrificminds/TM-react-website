

export default function TitleB({title, textA, textB}) {
    return(
        <div className="center" style={{flexDirection:'column', border:'1px red solid'}}>
            <div className="titleB helMed center"><p style={{color:'#000'}}>{title}</p></div>
            <div className="descriptB helReg" style={{}}>
                <p style={{color:'#3F3F3F', lineHeight:'180%'}}>{textA} <br />{textB}</p>
            </div>
        </div>
    )
}