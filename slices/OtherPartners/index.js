import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import MiniLogoShowcase from '../../components/MiniLogoShowcase/miniLogoShowcase'
import EyeBrow from '../../components/EyeBrow/eyebrow'

/**
 * @typedef {import("@prismicio/client").Content.OtherPartnersSlice} OtherPartnersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OtherPartnersSlice>} OtherPartnersProps
 * @param { OtherPartnersProps }
 */
export default function OtherPartners({ slice }){
  return(
    <>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2em 0 2em 0'}}>
      <EyeBrow 
          className='helMed'
        text='Other Partners' />
      <div className='logoShowcaseV2'>
        {
          slice.items.map((obj, i) => {
            return(
              <MiniLogoShowcase obj={obj} key={i} />
            )
          })
        }
        {
            slice.items.map((obj,i) => {
              return(
                <div className='lMob' key={i}>
                <MiniLogoShowcase obj={obj} key={i} />
                </div>
              )
            })
          }
      </div>
    </div>
    </>
  )
}