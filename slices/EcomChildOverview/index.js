import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ImageComponent from '../../components/ImageComponent/image'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.EcomChildOverviewSlice} EcomChildOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildOverviewSlice>} EcomChildOverviewProps
 * @param { EcomChildOverviewProps }
 */
export default function EcomChildOverview({slice}) {


  let ovTitle = `${slice.primary.overview_title[0].text}`
  let ovDescription = `${slice.primary.overview_description[0].text}`

  let black = '#000000';
  let blackB = '#0E0E0E';


  return(
    <section className='ecomChildOv'>
      <div className='ecomChildOvContainer'>

        <div className='ecomChildOvContent'>
          <div className='ecomChildOvContentA'>

            <div className='ecomChilOvTextContainer'>
              <div className='ovTitle helMed'>
                <p style={{color:black}}>
                  {ovTitle}
                </p>
              </div>
              <div className='ovDescription helReg'> 
                <p style={{color: black}}>
                  {ovDescription}
                </p>
              </div>
            </div>

          </div>
          <div className='ecomChildOvContentB'>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
              {
                slice.items.map((data, i) => {

                    console.log("helo", data)

                  return(
                    <div className='ovSubContentContainer' key={i}>
                      <div className='ovSubLogoContainer'>
                        <div className='ovSubLogo' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <PrismicNextImage style={{height:'50%', width:'50%', objectFit:'contain'}}
                          field={data.overview_icon} 
                          alt={data.overview_icon.alt} 
                          />
                        </div>
                      </div>
                      <div className='ovSubTextContainer helReg' style={{color: blackB}}>
                        <div className='ovSubTitle'>{`${data.overview_subtitle[0].text}`}</div>
                        <div className='ovSubDescription'>{`${data.overview_sub_description[0].text}`}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}