import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.PartnersHeroSlice} PartnersHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnersHeroSlice>} PartnersHeroProps
 * @param { PartnersHeroProps }
 */
export default function PartnersHero({ slice }){

  let Title = <PrismicRichText field={slice.primary.title} />

  let ColoredText = "100% Certified";
  let Subtitle = "ADOBE COMMERCE BRONZE SOLUTION PARTNER"

  return(
    <>
    <section className='partnHero'>
      <div className='partnHero_Container'>
        <div className='partnHero_Title helMed'>
          <p>
            { Title }
          </p>
        </div>
        <div className='partnHero_Subtitle helReg'>
          <p>
            <span className='TMorange helMed'>{ ColoredText }</span>&nbsp;{ Subtitle }
          </p>
        </div>
        <div className='partnHero_LogoContainer'>
          {
            slice.items.map((data, i) => {
              return(
                <div className='partnHero_Logo' key={i}>
                  <PrismicNextImage field={data.logo} alt={data.logo.alt} />
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