/* eslint-disable @next/next/no-img-element */

import { PrismicNextImage } from "@prismicio/next";


export default function MiniLogoShowcase({obj}) {
    return(
            <div className='miniLogoItem' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover'}} field={obj.logo} alt="img" />
            </div>
    )
}