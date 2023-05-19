import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.CarrersHeroSlice} CarrersHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrersHeroSlice>} CarrersHeroProps
 * @param { CarrersHeroProps }
 */
export default function CarrersHero({ slice }){

  // data
  let Title = "We're a bunch of"
  let A = "Hive of makers"
  let B = "Thinkers"
  let C = "Designers"
  let D = "Code Monks"
  let Description = "We’re looking for amazing individuals who are passionate, driven to succeed, and enjoy collaborating."

  return(
    <>
    <section className='carrHero'>
      <div className="carrHero_Container">
        <div className="aboutHero_ForgingContainer"> 
          <div className="aboutHero_ForgingTitle">
              <div className="ForgingMain_Title helMed">
                  <p>
                      {Title}
                  </p>
              </div>
              <div className="Forging_KeyframeTitle">
                  <div className="carrHeroComponent helMed">
                      <div className="Forging_AnimTitle carrTextA AnimTitleA"><p>{A}</p></div>
                      <div className="Forging_AnimTitle carrTextB AnimTitleB"><p>{B}</p></div>
                      <div className="Forging_AnimTitle carrTextC AnimTitleC"><p>{C}</p></div>
                      <div className="Forging_AnimTitle carrTextD AnimTitleC"><p>{D}</p></div>
                  </div>
              </div>
              <div className="Forging_Description carrHeroDesc helReg">
                  <p>
                      {Description}
                  </p>
              </div>
            </div>
        </div>
      </div>
      <div className='carrHero_Carousel'>
        <div className='carrHero_CarouselContainer'>
          {
            slice.items.map((data, i) => {
              return(
                <div className='carrHero_CarouselItem' key={i}>
                  <PrismicNextImage field={data.image} alt={data.image.alt} />
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