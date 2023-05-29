import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.EcomChildStatsSlice} EcomChildStatsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildStatsSlice>} EcomChildStatsProps
 * @param { EcomChildStatsProps }
 */
export default function EcomChildStats({slice}){

  return(
    <section className='ecomChildStats'>
      <div className='ecomChildStatsContainer'> 
        <div className='ecomChildStatsItemContainer'>
          {
            slice.items.map((data, i) => {
              return(
                <div className='ecomChildStatsItem' key={i}>
                  <div className='ecomChildStatsNumber'>
                    <p className='helBold' style={{color:'#6D342A'}}>
                    {`${data.stats_number[0].text}`}
                    </p>
                  </div>
                  <div className='ecomChildStatsDescript'>
                    <p className='helReg' style={{color:'#C5ACA4'}}>
                    {`${data.stats_description[0].text}`}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}