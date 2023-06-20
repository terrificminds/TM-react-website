import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.BespokeTechStackSlice} BespokeTechStackSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BespokeTechStackSlice>} BespokeTechStackProps
 * @param { BespokeTechStackProps }
 */
export default function BespokeTechStack({slice}){
  return(
    <section className='bspkTech'>
      <div className='bspkTech_Container'>
        <div className='title helMed' style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
          <p>
            <PrismicRichText field={slice.primary.title} />
          </p>
        </div>
      </div>
    </section>
  )
}