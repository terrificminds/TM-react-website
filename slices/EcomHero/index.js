/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Button from '../../components/Button/button'

/**
 * @typedef {import("@prismicio/client").Content.EcomHeroSlice} EcomHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomHeroSlice>} EcomHeroProps
 * @param { EcomHeroProps }
 */
export default function EcomHero({slice}) {
  return(
    <>
    <main className='ecomHero'>
      <div className='ecomHeroContainer'>
        <div className='ecomHeroContentA'>
          <div>
            <h2 className='helMed'>
              Create <span style={{color:'#FE6131'}}>e-commerce</span> 
              websites that understand the customer journey
            </h2>
          </div>
          <div>
            <p>Our ecommerce experts help shape your vision of an online store into a reality.</p>
          </div>
          <Button className='btn darkBtn' text='Get a free store evaluation' />
        </div>
        <div className='ecomHeroContentB'>
          <div className=''>
            <div><img src='/Ecommerce/mockupLaptop.svg' alt='mockupLaptop' /></div>
            <div><img src='/Ecommerce/mockupTabBorder.svg' alt='mockupTab' /></div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}