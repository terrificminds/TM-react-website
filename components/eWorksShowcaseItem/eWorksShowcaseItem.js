/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function WorksShowcaseItem({ style, obj, fill, href }) {
    return(
        <a href={obj.href} className='eWorksShowcaseItem' style={style}>
            <div style={{position:'absolute', top:'0', left:'0', height:'100%', width:'100%', zIndex:''}}>
                <Image height={300*2} width={300*2} src={obj.background} alt="image" style={{height:'100%', width:'100%', objectFit:'cover'}} />
            </div>
            <div style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div className="worksCountComponent">
                    <div className="worksIcon">
                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={obj.src} alt={obj.alt}/>
                    </div>
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
                        <div>
                            <a className="hCTA helReg" href={obj.href}>
                                See More &nbsp;
                                <span >
                                    {/* <img src="/ctaArrowWhite.svg" alt="arrow" /> */}
                                    <svg className="worksArrow" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.008 0.5L5.68 1.87L8.464 4.636H0V6.572H8.448L5.68 9.322L7.008 10.672L12 5.595L7.008 0.501V0.5Z" fill={fill}/>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </a>
    )
}