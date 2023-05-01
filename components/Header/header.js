/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ButtonB from "../ButtonB[noArrow]/buttonB";


export default function Header() {
    return(
        <>
        <nav className="header" style={{background:'#FFFF'}}>
            <div className="headerContainer">
                <div className="headerLeft">
                    <div className="headerLogo">
                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/headerLogo.svg" alt="logo" />
                    </div>
                    <Link href={'/'}>
                        <div className="headerTitle helBold">
                            <p>TERRIFIC MINDS</p>
                        </div>
                    </Link>
                </div>
                <div className="headerMid">
                    <div>
                        <ul className="headerList helReg">
                            <li className="headerListItem">Products</li>
                            <li style={{display:'flex', alignItems:'center'}} className="headerListItem">Technology 
                                <div
                                    style={{margin:'0.2rem 0 0 0.5rem', height:'0.5rem', width:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img 
                                    style={{height:'100%', width:'100%', objectFit:'contain'}} 
                                    src="/headerArrow.svg" alt="arrow" />
                                </div>
                            </li>
                            <li className="headerListItem">Design</li>
                            <Link href={'/works'}>
                                <li className="headerListItem">Works</li>
                            </Link>
                            <li style={{display:'flex', alignItems:'center'}} className="headerListItem">Company 
                                <div
                                    style={{margin:'0.2rem 0 0 0.5rem', height:'0.5rem', width:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img 
                                    style={{height:'100%', width:'100%', objectFit:'contain'}} 
                                    src="/headerArrow.svg" alt="arrow" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="headerRight">
                    <ButtonB className='btn darkBtn' text='Get in touch' />
                </div>
            </div>
        </nav>  
        </>
    )
}