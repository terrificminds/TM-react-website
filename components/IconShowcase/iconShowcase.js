/* eslint-disable @next/next/no-img-element */


export default function IconShowcase({obj}) {
    return(
        <div className="iconBox">
            <div className='iconWrap'>
                <div className="icon"><img style={{height:'60%', width:'60%', objectFit:'contain'}} src={obj.src} alt="icon"/></div>
                <div className="iconText helReg" style={{color:'#0E0E0E'}}><p>{obj.text}</p></div>
            </div>
        </div>    
    )
}