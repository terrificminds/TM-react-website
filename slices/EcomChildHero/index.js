/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ImageComponent from '../../components/ImageComponent/image'

/**
 * @typedef {import("@prismicio/client").Content.EcomChildHeroSlice} EcomChildHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildHeroSlice>} EcomChildHeroProps
 * @param { EcomChildHeroProps }
 */
export default function EcomChildHero({slice, context}) {


  let logo = `${slice.primary.ecom_child_hero_logo.url}`;
  let logoAlt = `${slice.primary.ecom_child_hero_logo.alt}`;
  let title = `${slice.primary.ecom_child_hero_title[0].text}`;
  
  let imageA = `${slice.primary.image_a.url}`;
  let imageAAlt= `${slice.primary.image_a.alt}`;

  let imageB = `${slice.primary.image_b.url}`;
  let imageBAlt= `${slice.primary.image_b.alt}`;

  let imageC = `${slice.primary.image_c.url}`;
  let imageCAlt= `${slice.primary.image_c.alt}`;



  let color = '#0E0E0E';

  let imageOne = <ImageComponent className='ecomChildImg imgA'
                style={{height:'100%', width:'100%', objectFit:'contain'}} 
                src={imageA} alt={imageAAlt} />;
  let imageTwo = <ImageComponent className='ecomChildImg' 
                style={{height:'100%', width:'100%', objectFit:'contain'}}
                src={imageB} alt={imageBAlt} />;

  let imageThree = <ImageComponent className='ecomChildImg imgC' 
                  style={{height:'100%', width:'100%', objectFit:'contain'}}
                  src={imageC} alt={imageCAlt} />;

  let bgColor = `${slice.primary.bg_color[0].text}` 



  return(
    <section className='ecomChild' style={{background: bgColor}}>
      <div className='ecomChildContainer'>
        <div className='ecomChildContent'>
          <div className='ecomChildHeroLogo'>
            <img 
            style={{height:'100%', width:'100%', objectFit:'contain'}} 
            src={logo} 
            alt={logoAlt} />
          </div>
          <div className='ecomChildHeroTitle helMed'>
            <div style={{color:'#0E0E0E'}}>
              {
                context === "magento" ? 
                <p>
                  Build Robust, flexible and scalable e-commerce webstores through <span className='TMorange'>Adobe Magento</span>
                </p>
                :
                context === "shopify" ? 
                <p>
                  Establish yourself on a digital space with the <span style={{color:"#5E8E3E"}}>Shopify</span> Webstore.
                </p>
                :
                context === "vtex" ?
                <p>
                  Build Headless <span style={{color:'#FF3366'}}>VTEX</span> e-commerce stores
                </p>
                :
                context === "bigcommerce" ?
                <p>
                  Build scalable SaaS based e-commerce through <span style={{color:"#0D52FF"}}>Bigcommerce</span>
                </p>
                : null
              }
              {/* <p style={{color: color}}>
                {title} <span style={{color: HighlightColor}}>{ HighlightedText }</span>
              </p> */}
            </div>
          </div>
        </div>

        <div className='ecomChildImgContainer'>
          {imageOne}
          {imageTwo}
          {imageThree}
        </div>

      </div>
    </section>
  )
}