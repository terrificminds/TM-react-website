/* eslint-disable @next/next/no-img-element */

import { PrismicNextImage } from "@prismicio/next";


export default function Tab({className, onClick, obj}) {
    return(
        <div 
            className={className}
            onClick={onClick}>
            <div className='tabImgContainer'>
                <PrismicNextImage  field={obj.tab_title}  alt='TAB'/>
            </div>
        </div>
    )
}