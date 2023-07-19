import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PrivacyPolicyBulletPointsSlice} PrivacyPolicyBulletPointsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivacyPolicyBulletPointsSlice>} PrivacyPolicyBulletPointsProps
 * @param { PrivacyPolicyBulletPointsProps }
 */
export default function PrivacyPolicyBulletPoints({ slice }){
  return(
    <div className='privacy_Points'>
      <div className='privacy_Sub_Title helMed'>
        <p>
          <PrismicRichText field={slice.primary.title} />
        </p>
      </div>
      {
        slice.items.map((data, i) => {
          return(
            <div key={i} className='privacy_Sub_Description_Container helReg'>
              <div className='privacy_Sub_Description'>
                <p>
                  <PrismicRichText field={data.description} />  
                </p>
              </div>
              <div className='privacy_Sub_Description Sub_Description_Points'>
                <p>
                  <PrismicRichText field={data.description_points} />
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}