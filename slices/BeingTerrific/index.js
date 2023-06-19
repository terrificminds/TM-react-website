import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.BeingTerrificSlice} BeingTerrificSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeingTerrificSlice>} BeingTerrificProps
 * @param { BeingTerrificProps }
 */
export default function BeingTerrific({slice, context}){


  return(
    <section className='BeingTerrific'>
      <div className='BeingTerrific_Container'>
        <div className='BeingTerrfic_TitleContainer'>
          <div className='BeingTerrific_Title helMed'>   
            {
              context === "about_page" ? 
              <p>
                At Terrific Minds <br/> We are about <span className='TMorange'>Being Terrific</span>
              </p>
              : 
              <p>
                At Terrific Minds <br/>You are about <span className='TMorange'>Being Terrifc</span>
              </p>
            }
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