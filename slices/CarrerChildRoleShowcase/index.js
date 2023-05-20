import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.CarrerChildRoleShowcaseSlice} CarrerChildRoleShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrerChildRoleShowcaseSlice>} CarrerChildRoleShowcaseProps
 * @param { CarrerChildRoleShowcaseProps }
 */
export default function CarrerChildRoleShowcase({ slice }){


  let Title = <PrismicRichText field={slice.primary.role_title} />

  return(
    <>
    <section id='footerInvert' className='carrRolShowcase'>
      <div className='carrRolShowcase_Container'>
        <div className='carrRolShowcase_Title helBold'>
          <p> 
            { Title } 
          </p>
        </div>
        <div className='carrRolShowcase_InfoContainer'>
          {
            slice.items.map((data, i) => {

              let tagTitle = <PrismicRichText field={data.info_tags} />

              return(
                <div className='carrRolShowcase_InfoTag' key={i}>
                  <div className='carrRolShowcase_tagIcon'>
                    <PrismicNextImage field={data.info_tags_icon} />
                  </div>
                  <div className='carrRolShowcase_tagTitle helMed'>
                    <p>
                      { tagTitle }
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}