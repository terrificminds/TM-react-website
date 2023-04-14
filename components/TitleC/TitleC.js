import Button from "../Button/button";


export default function TitleC({title, text, className, style}) {
    return(
        <div className='eyeBrow'>
           <div className='eyeBrowText' style={style}><p>{title}</p></div>
           <div className='btnDesk'><Button text={text} className={className} /></div>
        </div>
    )
}