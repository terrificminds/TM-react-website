

export default function Title({titleA, titleB}) {
    return(
        <div className='title helMed' style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
          <div><p>{titleA}</p></div><div><p>{titleB}</p></div>
        </div>
    )
}