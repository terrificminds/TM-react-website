import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichTitle from '../../components/EcomChildTitleComponent/richTitle'
import ImageComponent from '../../components/ImageComponent/image'

/**
 * @typedef {import("@prismicio/client").Content.EcomChildExpertsSlice} EcomChildExpertsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildExpertsSlice>} EcomChildExpertsProps
 * @param { EcomChildExpertsProps }
 */
export default function EcomChildExperts({slice}){

  console.log("logging", slice)

  let titleComponent = <RichTitle title={`${slice.primary.title[0].text}`} description={`${slice.primary.description[0].text}`} />


  
  return(
    <section className='ecomChildExp' style={{background:'#FFFF'}}>
      <div className='ecomChildExpContainer'>
        <div>
          {titleComponent}
        </div>
        <div className='ecomChildExpLogoContainer'>  
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2rem 0'}}>
            {
              slice.items.map((data, i) => {
                console.log("slice", data)
                return(
                  <div style={{marginInline:'2rem'}} key={i}>
                    <ImageComponent className='ecomChilExpLogo' src={data.logos.url} alt={data.logos.alt} />
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