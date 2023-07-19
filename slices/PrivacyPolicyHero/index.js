import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PrivacyPolicyHeroSlice} PrivacyPolicyHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivacyPolicyHeroSlice>} PrivacyPolicyHeroProps
 * @param { PrivacyPolicyHeroProps }
 */
export default function PrivacyPolicyHero({ slice }){
  return(
    <>
    <div className='privacy_Hero'> 
      <div className='privacy_Hero_Container'>
        <div className='privacy_Hero_Title helMed'>
          <p>
            <PrismicRichText field={slice.primary.title} />
          </p>
        </div>
        <div className='privacy_Hero_Description helReg'>
          <p>
            <PrismicRichText field={slice.primary.description} />
          </p>
        </div>
      </div>
    </div>
    </>
  )
}