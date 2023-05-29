import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichTitle from '../../components/EcomChildTitleComponent/richTitle'
import ImageComponent from '../../components/ImageComponent/image'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.EcomChildExpertsSlice} EcomChildExpertsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildExpertsSlice>} EcomChildExpertsProps
 * @param { EcomChildExpertsProps }
 */
export default function EcomChildExperts({slice}){

  let titleComponent = <RichTitle title={`${slice.primary.title[0].text}`} description={`${slice.primary.description[0].text}`} />


  
  return(
    <section className='ecomChildExp' style={{background:'#FFFF'}}>
      <div className='ecomChildExpContainer'>
        <div>
          {titleComponent}
        </div>
        {/* <div className='ecomChildExpLogoOuterContainer'>   */}
          
        {/* </div> */}
      </div>
      <div className='ecomChildExpLogoContainer'>
            {
              slice.items.map((data, i) => {
                return(
                  <div className='ecomChildExpoLogoItem' key={i}>
                    {/* <ImageComponent className='ecomChilExpLogo' src={data.logos.url} alt={data.logos.alt} /> */}
                    <PrismicNextImage field={data.logos} alt={data.logos.alt} />
                  </div>
                )
              })
            }
          </div>
    </section>
  )
}