import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PrivacyPolicyTextBlockComponentSlice} PrivacyPolicyTextBlockComponentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivacyPolicyTextBlockComponentSlice>} PrivacyPolicyTextBlockComponentProps
 * @param { PrivacyPolicyTextBlockComponentProps }
 */
export default function PrivacyPolicyTextBlockComponent({ slice }){
  return(
    <div className='privacy_Text_Block'>
        {
          slice.items.map((data, i) => {
            return(
              <div key={i} className='privacy_Text_Block_Container'>
                <div className='privacy_Sub_Title Sub_Title_Text_Block helMed'>
                  <p>
                    <PrismicRichText field={data.title} />
                  </p>
                </div>
                <div className='privacy_Sub_Description helReg'>
                  <p>
                    <PrismicRichText field={data.description} />
                  </p>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}