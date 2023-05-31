/* eslint-disable @next/next/no-img-element */

import { PrismicNextImage } from "@prismicio/next";


export default function MiniLogoShowcase({obj}) {

    return(
            <div className='miniLogoItem' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              {/* <PrismicNextImage style={{display: obj.context ==="homepage" ? 'none':'',height:'100%', width:'100%', objectFit:'cover'}} field={obj.logo} alt="img" /> */}
              {/* <img style={{display: obj.context === "homepage" ? 'block': obj.context === "ecommercepage" ? 'block': obj.context === "partners" ? 'block': null}} src={obj.src} alt="img" /> */}
              <img src={obj.src} alt="img" />
            </div>
    )
}