import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.BeingTerrificSlice} BeingTerrificSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeingTerrificSlice>} BeingTerrificProps
 * @param { BeingTerrificProps }
 */
export default function BeingTerrific({slice}){

  let titleLineA = <PrismicRichText field={slice.primary.title_line_a} />
  let titleLineB = <PrismicRichText field={slice.primary.title_line_b} />

  let colorText = <PrismicRichText field={slice.primary.colored_text} />

  return(
    <section className='BeingTerrific'>
      <div className='BeingTerrific_Container'>
        <div className='BeingTerrfic_TitleContainer'>
          <div className='BeingTerrific_Title helMed'>   
            <p>
              { titleLineA }<span style={{display:'flex'}}>{ titleLineB }&nbsp;<span className='TMorange'>{ colorText }</span></span>
            </p>
          </div>
        </div>
        <div className='BeingTerrific_Showcase'>
            <div className='BeingTerrific_ShowcaseContainer'>
              {
                slice.items.map((data, i) => {

                  let title = <PrismicRichText field={data.title} />
                  let description = <PrismicRichText field={data.description} />

                  return(
                    <div className='BeingTerrfic_ShowcaseItem helReg' key={i}>
                      <div className='BeingTerrific_ShowcaseLogo'>
                      <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                      </div>
                      <div className='BeingTerrific_ShowcaseTitle'>
                        <p>
                          { title }
                        </p>
                      </div>
                      <div className='BeingTerrific_ShowcaseDescription'>
                        <p>
                          { description }
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    </section>
  )
}