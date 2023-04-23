/* eslint-disable @next/next/no-img-element */

import { PrismicNextImage } from "@prismicio/next";


export default function Tab({className, onClick, obj}) {
    return(
        <div 
            className={className}
            onClick={onClick}>
            <div className='tabImgContainer'>
                <PrismicNextImage style={{height:'100%', width:"100%", objectFit:'contain'}} field={obj.tab_title}  alt='TAB'/>
            </div>
        </div>
    )
}