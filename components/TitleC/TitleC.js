import Button from "../Button/button";


export default function TitleC({title, text, className, style, href, svgClassName, fill}) {
    return(
        <div className='eyeBrow'>
           <div className='eyeBrowText' style={style}><h3>{title}</h3></div>
           <div className='btnDesk'><Button href={href} text={text} className={className} svgClassName={svgClassName} fill={fill}  /></div>
        </div>
    )
}