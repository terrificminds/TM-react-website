/* eslint-disable @next/next/no-img-element */

export default function WorksShowcaseItem({ style, obj, href}) {
    return(
        <div className='eWorksShowcaseItem' style={style}>
            <div style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div className="worksCountComponent">
                    <div className="worksIcon" style={{padding:'1rem 0 0 0'}}><img src={obj.src} alt={obj.alt}/></div>
                    <div className="worksCountText">
                        <div className="worksCount helBold">{obj.count}</div>
                        <div className="worksSuccess helReg">Successful Projects</div>
                    </div>
                </div>
                <div className="eWorksItemText aN1">
                    <div className="eWorksTitle helReg"><p>{obj.title}</p></div>
                    <div className="eWorksDescript helReg"><p>{obj.description}</p></div>
                    <div className="eWorksTagContainer">
                        <div className="eWorksTag helReg"><p>{obj.tagA}</p></div>
                        <div className="eWorksTag helReg"><p>{obj.tagB}</p></div>
                    </div>
                    <div className="hTagContainer">
                        <div className="hTag helReg"><p>{obj.textB}</p></div>
                        <div><a className="hCTA helReg" href={obj.href}>See More <span><img src="/ctaArrowWhite.svg" alt="arrow" /></span></a></div>
                    </div>
                </div>
            </div>    
        </div>
    )
}