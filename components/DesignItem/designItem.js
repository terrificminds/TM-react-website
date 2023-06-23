/* eslint-disable @next/next/no-img-element */


export default function DesignItem({obj, style}) {
    return(
        <div className='dsgnItem' style={{border:'1px rgba(255,255,255,0.2) solid'}}>
            <div className='dsgnItemTitle helMed' style={style}>
                <p className="center">{obj.title}
                <span className="arrContB"><img style={{height:'40%', width:'40%', objectFit:'cover'}} src="/whiteArrow.svg" alt="" /></span></p>
            </div>
            <div style={{position:'absolute', bottom:'0', height:'30%', width:'100%'}}><video style={{height:'100%', width:'100%', objectFit:'cover'}} src={obj.src} alt="video" /></div>
            <div className='itemList'>
            <ul className='helReg' style={{marginBottom:'4.4rem'}}>
                <li>{obj.listItem[0]}</li>
                <li>{obj.listItem[1]}</li>
                <li>{obj.listItem[2]}</li>
                <li>{obj.listItem[3]}</li>
                <li>{obj.listItem[4]}</li>
            </ul>
            </div>
        </div>
    )
}