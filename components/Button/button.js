/* eslint-disable @next/next/no-img-element */

import Link from "next/link";


export default function Button({text, className, styleText, href, onClick, svgClassName, fill, style}) {
    return(
        <Link href={`${href}`}>
            <button onClick={onClick} className={className} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <p style={styleText}>{text}</p>
            <span style={{marginLeft:'.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <svg className={svgClassName} width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.008 0.5L5.68 1.87L8.464 4.636H0V6.572H8.448L5.68 9.322L7.008 10.672L12 5.595L7.008 0.501V0.5Z" fill={fill}/>
                </svg>
            </span>
            </button>
        </Link>
    )
}