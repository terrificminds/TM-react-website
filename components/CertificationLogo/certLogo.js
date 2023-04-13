/* eslint-disable @next/next/no-img-element */

export default function CertLogo({obj}) {
    return(
        <div className="certItem">
            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={obj.src} alt='logo' />
        </div>
    )
}