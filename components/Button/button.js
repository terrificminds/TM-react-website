/* eslint-disable @next/next/no-img-element */


export default function Button({text, className, style}) {
    return(
        <button className={className} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <p>{text}</p><span style={{marginLeft:'.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}><img src="/ctaArrow.svg" alt="arrow" /></span>
        </button>
    )
}