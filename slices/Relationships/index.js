import React from 'react'
import { PrismicImage, PrismicRichText } from '@prismicio/react'
import EyeBrow from '../../components/EyeBrow/eyebrow'
import IconShowcase from '../../components/IconShowcase/iconShowcase'

/**
 * @typedef {import("@prismicio/client").Content.RelationshipsSlice} RelationshipsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RelationshipsSlice>} RelationshipsProps
 * @param { RelationshipsProps }
 */
export default function Relationships({slice}) {

  let dataObj = [{
      src: '/iconRetail.svg',
      text: 'Retail & Consumer Products'
    },
    {
      src: '/iconMarketPlace.svg',
      text:'Market place/ Retail'
    },
    {
      src: '/iconEntertainment.svg',
      text:'Entertainment'
    },
    {
      src: '/iconIndustries.svg',
      text:'Industries/Department Stores'
    },
    {
      src: '/iconHealthCare.svg',
      text:'Health Care'
    },
    {
      src: '/iconLifeStyle.svg',
      text:'Life Style'
    },
    {
      src: '/iconHomeImprovement.svg',
      text:'Home Improvement'
    },
    {
      src:'/trialicon.svg',
      text:'Trial'
    }
  ]

  return(
    <section className='relShipSection' style={{background:'#FFF'}}>
      <div className='relShip'>
        <div className='relShipWrapper'>
          <EyeBrow className='helMed' text='Lasting Releationships with' />
          <div className='relShipLogoShowcase'>
            {
              slice.items.map((data,i) => {
                return(
                  <div className='relShipLogoItem' key={i}>
                      <PrismicImage style={{height:'100%', width:'100%', objectFit:'contain'}} field={data.relationships_logo_showcase} alt={data.relationships_logo_showcase.alt} />
                  </div>
                )
              })
            }
          </div>  
        </div>
        <div className='relShipIconContainer'>
            <EyeBrow className='helMed' text='Our Retail Domain Expertise' />
            <div className='bar'>
             {
              dataObj.map((obj,i) => {
                return(
                  <IconShowcase obj={obj} key={i} />
                )
              })
             }
            </div>
        </div>
      </div>
    </section>
  )
}