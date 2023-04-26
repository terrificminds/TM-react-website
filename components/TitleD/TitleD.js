

export default function TitleD({titleA, textA, className, classNameB}) {
    return(
        <div style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <div className='title helMed' style={{width:'40%', textAlign:'center'}}><p className={className}>{titleA}</p></div>
            <div className="descriptB helReg" style={{width:'30%'}}><p className={classNameB}>{textA}</p></div>
        </div>
    )
}