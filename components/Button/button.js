/* eslint-disable @next/next/no-img-element */


export default function Button({text, className, styleText, style}) {
    return(
        <button className={className} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <p style={styleText}>{text}</p><span style={{marginLeft:'.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}><img src="/ctaArrowWhite.svg" alt="arrow" /></span>
        </button>
    )
}