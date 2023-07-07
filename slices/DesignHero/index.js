/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.DesignHeroSlice} DesignHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DesignHeroSlice>} DesignHeroProps
 * @param { DesignHeroProps }
 */
export default function DesignHero({ slice }){

  let Title = 'We design for'
  let description = 'Every pixel, every interaction, and every detail is thoughtfully crafted to ensure a seamless and delightful user experience. We meticulously analyze user behavior, conduct usability tests, and employ data-driven strategies to enhance user engagement, increase conversions, and maximize your return on investment.'
  let A = 'Startups'
  let B = 'Mid Size'
  let C = 'Enterprise'

  let subText = "We believe that exceptional user experience is the key to unlocking the full potential of your brand. Our User Centered Design approach is rooted in meticulous research, seamless functionality, creative and aesthetic visualization. We dive deep into understanding your business goals, audience preferences, and market trends to craft bespoke solutions that resonate with your users."



  return(
    <>
    <main className='desgnHero'>
      <div className='desgnHero_Container'>
        <div className="aboutHero_ForgingContainer"> 
          <div className="aboutHero_ForgingTitle">
              <div className="ForgingMain_Title helMed">
                  <p>
                    {Title}
                  </p>
              </div>
              <div className="Forging_KeyframeTitle">
                  <div className="Forging_KeyframeContainer helMed">
                      <div className="Forging_AnimTitle designTextA AnimTitleA"><p>{A}</p></div>
                      <div className="Forging_AnimTitle designTextB AnimTitleB"><p>{B}</p></div>
                      <div className="Forging_AnimTitle designTextC AnimTitleC"><p>{C}</p></div>
                  </div>
              </div>
              <div className="Forging_Description desgnDesc helReg">
                <p>
                  {description}
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className='desgnHero_ImageContainer'>
        <div className='desgnHero_Image'>
          <PrismicNextImage field={slice.primary.image} alt={slice.primary.image.alt} />
        </div>
      </div>
      <div className='desgnHero_DescriptContainer'>
        <div className='desgnhero_Descript'>
          <div className='desgnHero_DescriptMainText helMed'>
            <p>
              <span className='TMorange'>Good design</span><br /> is at the heart of everything we do
            </p>
          </div>
          <div className='desgnHero_DescriptSubtext helReg'>
            <p>
              { subText }
            </p>
          </div>
        </div>
        <div className='desgnHero_TMFace'>
          <div className='desgnHero_TMFaceImage'>
            <img src='/Design/tmMask.svg' alt='img' />
          </div>
        </div>
      </div>
    </main>
    </>
  )
}