/* eslint-disable @next/next/no-img-element */
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
  ]

  let marqObj = [{
    src: '/relShip_chennaiSK.svg'
  },
  {
    src: '/relShip_deck.svg'
  },
  {
    src: '/relShip_fillMeBottle.svg'
  },
  {
    src: '/relShip_foco.svg'
  },
  {
    src: '/relShip_globalFootCare.svg'
  },
  {
    src: '/relShip_ipanema.svg'
  },
  {
    src: '/relShip_kSwiss.svg'
  },
  {
    src: '/relShip_monkeySport.svg'
  }
]

  return(
     <section className='relShipSection' style={{background:'#FFF'}}>
       <div className='relShip'>
         <div className='relShipWrapper'>
           <EyeBrow className='eyeText helMed' text='Lasting Releationships with' />
           <div className='relShipLogoShowcase'>
             {
               slice.items.map((data,i) => {
                 return(
                   <div className='relShipLogoItem' key={i}>
                       <PrismicImage field={data.relationships_logo_showcase} alt={data.relationships_logo_showcase.alt} />
                   </div>
                 )
               })
             }
             {
             marqObj.map((data, i) => {
               return(
                 <div className='marqueeItem' key={i}>
                   <img src={data.src} alt='logo' />
                 </div>
               )
             })
           }
           {
             marqObj.map((data, i) => {
               return(
                 <div className='marqueeItem' key={i}>
                   <img src={data.src} alt='logo' />
                 </div>
               )
             })
           }
           </div>
         </div>
         <div className='relShipIconContainer'>
             <EyeBrow className='eyeText helMed' text='Our Retail Domain Expertise' />
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