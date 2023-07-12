

export default function Title({titleA, titleB, styleA, styleB}) {
    return(
        <div className='title helMed' style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
          <div style={styleA}><h3>{titleA}</h3></div><div style={styleB}>
            <h3>{titleB}</h3>
          </div>
        </div>
    )
}