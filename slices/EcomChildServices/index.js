import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Icon from '../../components/ServicesIcon/ecomChildIcon'
import TitleB from '../../components/TitleB/titleB';
import RichTitle from '../../components/EcomChildTitleComponent/richTitle';

/**
 * @typedef {import("@prismicio/client").Content.EcomChildServicesSlice} EcomChildServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildServicesSlice>} EcomChildServicesProps
 * @param { EcomChildServicesProps }
 */
export default function EcomChildServices({slice}){

  let iconColor = `${slice.primary.icon_color_hex[0].text}`;

  let titleComponent = <RichTitle title={`${slice.primary.title[0].text}`} description={`${slice.primary.description[0].text}`} />

  let bgColor = `${slice.primary.bg_color[0].text}`


  return(
    <section className='ecomChildSrvc' style={{background: bgColor}}>
      <div className='ecomChildSrvcContainer'>
        <div className='ecomChildSrvcContentA'>
          {titleComponent}
        </div>
        <div className='ecomChildSrvcPointsContainer'>
          <div className='ecomChildSrvcPointsContent'>
            {
              slice.items.map((data, i) => {
                return(
                  <div className='ecomChildSrvcPoints' key={i}>
                    <div style={{display:'flex', alignItems:'center'}}>
                      <div className='ecomChildSrvcIcon'>
                        <Icon 
                        style={{height:'80%', width:'80%', objectFit:'contain'}} 
                        fill={iconColor} />
                      </div>
                      <div className='ecomChildSrvcDescript helMed'>
                        <p style={{color:'#0E0E0E'}}>
                          {`${data.services_description[0].text}`}
                        </p>
                      </div>
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