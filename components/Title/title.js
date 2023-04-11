

export default function Title({titleA, titleB, styleA, styleB}) {
    return(
        <div className='title helMed' style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
          <div style={styleA}><p>{titleA}</p></div><div style={styleB}><p>{titleB}</p></div>
        </div>
    )
}