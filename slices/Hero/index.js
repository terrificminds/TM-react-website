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
    {/* <pre>{JSON.stringify(slice,null,2)}</pre> */}
    <main className='hero'>
      <div className='heroContentWrapper'>
        <div className='heroContentA'>
          <div style={{width:'100%'}}>
            <div className='heroTitle helMed'>
              <RichText className='heroPrimaryTitle' field={slice.primary.title} />
            </div>
            <div className='heroDescript' style={{display:'flex'}}>
              <RichText className='descriptTextA helMed' style={{color:'#FE6131'}} 
                field={slice.primary.highlight_description} />
              &nbsp;
              <RichText className='descriptTextB helReg' field={slice.primary.description} />
            </div>  
            <div className='heroSmallLogos' style={{width:'100%'}}>
              <div className='heroSmallLogoWrapper' style={{}}>
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
              <RichText className='heroPrimaryTitle' field={slice.primary.title} />
            </div>
            <div className='heroLogoShowcaseContainer' style={{}}>
              {/* <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'contain'}} 
                field={slice.primary.hero_showcase_logo} alt={slice.primary.hero_showcase_logo.alt} /> */}
              <Spline scene='https://prod.spline.design/AQfnrzMgkN0HJGTZ/scene.splinecode' style={{display:'block', objectFit:'cover'}} />
            </div>
        </div>
      </div>
      

      
    </main>
    {/* <pre>{JSON.stringify(slice,null,2)}</pre> */}
    
    </>
  )
}

    
