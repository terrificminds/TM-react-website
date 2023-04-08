/* eslint-disable @next/next/no-img-element */


export default function MiniLogoShowcase({obj}) {
    return(
            <div className='miniLogoItem' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img style={{height:'100%', width:'100%', objectFit:'cover'}} src={obj.src} alt="img" />
            </div>
    )
}