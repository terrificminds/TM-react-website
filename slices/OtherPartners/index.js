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

  let arrObj = [{
    src: '/prtnrsYopo.svg',
  },
  {
    src: '/prtnrsScandi.svg',
  },
  {
    src: '/prtnrsSerchSprng.svg',
  },
  {
    src: '/prtnrsUNBXD.svg',
  },
  {
    src: '/prtnrsWebScale.svg',
  },
  {
    src: '/prtnrsOkendo.svg',
  },
  {
    src: '/prtnrsDelve.svg',
  },
  {
    src: '/prtnrsGr4vy.svg',
  },
]
  return(
    <>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2em 0 2em 0'}}>
      <EyeBrow 
          className='helMed'
        text='Other Partners' />
      <div className='logoShowcase'>
        {/* {
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
          } */}

{
          arrObj.map((obj, i) => {
            return(
              <MiniLogoShowcase obj={obj} key={i} />
            )
          })
        }
        {
            arrObj.map((obj,i) => {
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