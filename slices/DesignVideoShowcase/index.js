import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.DesignVideoShowcaseSlice} DesignVideoShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DesignVideoShowcaseSlice>} DesignVideoShowcaseProps
 * @param { DesignVideoShowcaseProps }
 */
export default function DesignVideoShowcase(){
  return(
    <>
    <section className='dsgnVidShwCse' style={{background:'#000'}}>
    <video 
        autoPlay="true" muted="true" disableRemotePlayback loop="true" 
        height="100%" playsInline="true" width="100%" style={{height:'100%', width:'100%', objectFit:'cover'}}>
            <source src="/Design/desgnVid.mp4" disableRemotePlayback type="video/mp4" />
    </video>
    </section>
    </>
  )
}