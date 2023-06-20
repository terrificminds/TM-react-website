import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import { PrismicNextImage } from '@prismicio/next'
import TitleComponent from '../../components/TitleComponent/titleComponent'

/**
 * @typedef {import("@prismicio/client").Content.BeingTerrificSlice} BeingTerrificSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeingTerrificSlice>} BeingTerrificProps
 * @param { BeingTerrificProps }
 */
export default function BeingTerrific({slice, context}){

  console.log(context,"CONTEXT")

  return(
    <section className='BeingTerrific'>
      <div className='BeingTerrific_Container'>
        <div className='BeingTerrfic_TitleContainer'>
          {
            context === "bespoke-page" ?
            <TitleComponent 
              title="Platform & Technology"
              description="Terrific Minds offers a broad range of e-commerce web development services with added expertise in design, testing, migration, support and maintenance using Shopify and Magento." />
            :
            <div className='BeingTerrific_Title helMed'>   
            {
              context === "about_page" ? 
              <p>
                At Terrific Minds <br/> We are about <span className='TMorange'>Being Terrific</span>
              </p>
              : 
              <p>
                At Terrific Minds <br/>You are about <span className='TMorange'>Being Terrific</span>
              </p>
            }
          </div>
          }
        </div>
        <div className='BeingTerrific_Showcase'>
            <div className='BeingTerrific_ShowcaseContainer'>
              {
                slice.items.map((data, i) => {

                  let title = <PrismicRichText field={data.title} />
                  let description = <PrismicRichText field={data.description} />

                  return(
                    <div className={context === "bespoke-page" ? 'BeingTerrfic_ShowcaseItem bespokePage helReg' : 'BeingTerrfic_ShowcaseItem helReg'} key={i}>
                      {
                        context === "bespoke-page" ? 
                          <>
                            <div>
                              <div className='BeingTerrific_ShowcaseLogo bespokeLogoVariant'>
                                <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                              </div>
                            </div>

                            <div>
                            <div className='BeingTerrific_ShowcaseLogo bespokeLogoVariantMob'>
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
                          </>
                        :
                        (
                        <>
                          <div className='BeingTerrific_ShowcaseLogo'>
                            <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                          </div>
                          <div className='BeingTerrific_ShowcaseTitle'>
                              <p>
                                {title}
                              </p>
                          </div><div className='BeingTerrific_ShowcaseDescription'>
                            <p>
                              {description}
                            </p>
                          </div>
                        </>)
                      }
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