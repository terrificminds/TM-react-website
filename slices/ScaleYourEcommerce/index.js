import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Title from '../../components/Title/title'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../components/RichText/richText'
import Button from '../../components/Button/button'
import EyeBrow from '../../components/EyeBrow/eyebrow'
import MiniLogoShowcase from '../../components/MiniLogoShowcase/miniLogoShowcase'
import ButtonDarkArrow from '../../components/Button/ButtonDarkArrow'


/**
 * @typedef {import("@prismicio/client").Content.ScaleYourEcommerceSlice} ScaleYourEcommerceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScaleYourEcommerceSlice>} ScaleYourEcommerceProps
 * @param { ScaleYourEcommerceProps }
 */
export default function ScaleYourEcommerce({slice, context}) {



  let arrObj = [{
    src: '/prtnrsYopo.svg',
    context
  },
  {
    src: '/prtnrsScandi.svg',
    context
  },
  {
    src: '/prtnrsSerchSprng.svg',
    context
  },
  {
    src: '/prtnrsUNBXD.svg',
    context
  },
  {
    src: '/prtnrsWebScale.svg',
    context
  },
  {
    src: '/prtnrsOkendo.svg',
    context
  },
  {
    src: '/prtnrsDelve.svg',
    context
  },
  {
    src: '/prtnrsGr4vy.svg',
    context
  },
]





  return(
    
     <section className='sclEcom'>
       <div className='sclEcomContainer'>
         <Title titleA='Scale Your e-commerce' titleB='Bigger and Better' />
         <div className='sclEcomShowcase'>
           {
             slice.items.map((data,i) => {
               return(
                 <div className='sclEcomItemContainer' key={i}>
                   <div className='sclEcomLogo'>
                     <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'contain'}} field={data.logo} alt={data.logo.alt} />
                   </div>
                   <div className='sclEcomItemDescription helReg'>
                     <RichText field={data.description} />
                   </div>
                   <ButtonDarkArrow href={`/ecommerce/${data.cta_link.uid}`} className='btn bgNilBtn helMed' text='Know More' />                
                 </div>
               )
             })
           }
         </div>
          <div style={{display: context == "homepage" ? 'none':''}} className='sclEcomBtnContainer'>
          <Button className='btn darkBtn helReg' href="/ecommerce" svgClassName='svg-arrow-light' fill="#FFF" text='Explore All' />
          </div>
         <div className=''>
           <EyeBrow className='eyeText helMed'  text='Other Partners'/>
           <div className='logoShowcase'>
             {
               arrObj.map((obj,i) => {
                 return(
                   <MiniLogoShowcase context={context} obj={obj} key={i} />
                 )
               })
             }
             {
               arrObj.map((obj,i) => {
                 return(
                   <div className='lMob' key={i}>
                   <MiniLogoShowcase context={context} obj={obj} key={i} />
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