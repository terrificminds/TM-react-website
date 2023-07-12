import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../components/RichText/richText'

import Spline from '@splinetool/react-spline';


/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
export default function Hero({slice}) {

  return(
    <>
    <main className='hero'>
      <div className='heroContentWrapper'>
        <div className='heroContentA'>
          <div style={{width:'100%'}}>
            <div className='heroTitle helMed'>
              <h1 className='heroPrimaryTitle'>
                <PrismicRichText field={slice.primary.title} />
                {/* <RichText className='heroPrimaryTitle' 
                  field={slice.primary.title} /> */}
              </h1>
            </div>
            <div className='heroDescript' style={{display:'flex'}}>
              <RichText className='descriptText helMed TMorange' 
                field={slice.primary.highlight_description} />
              &nbsp;
              <RichText className='descriptText dark helReg'
                field={slice.primary.description} />
            </div>  
            <div className='heroSmallLogos' style={{width:'100%'}}>
              <div className='heroSmallLogoWrapper'>
                {
                  slice.items.map((data, i) => {
                    return(
                      <div className='heroSmallLogoContainer' key={i}>
                        <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'contain'}} 
                          field={data.hero_small_logo_showcase} alt={data.hero_small_logo_showcase.alt} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className='heroContentB'>
            <div className='heroTitle hTMob helMed' style={{}}>
              <h1>
                <RichText className='heroPrimaryTitle' field={slice.primary.title} />
              </h1>
            </div>
            <div className='heroLogoShowcaseContainer'>
              {/* <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'contain'}} 
                field={slice.primary.hero_showcase_logo} alt={slice.primary.hero_showcase_logo.alt} /> */}
              <Spline scene='https://prod.spline.design/AQfnrzMgkN0HJGTZ/scene.splinecode' style={{display:'block', objectFit:'cover'}} />
            </div>
        </div>
      </div>
      

      
    </main>    
    </>
  )
}

    
