import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Title from '../../components/Title/title'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../components/RichText/richText'
import Button from '../../components/Button/button'
import EyeBrow from '../../components/EyeBrow/eyebrow'
import MiniLogoShowcase from '../../components/MiniLogoShowcase/miniLogoShowcase'


/**
 * @typedef {import("@prismicio/client").Content.ScaleYourEcommerceSlice} ScaleYourEcommerceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScaleYourEcommerceSlice>} ScaleYourEcommerceProps
 * @param { ScaleYourEcommerceProps }
 */
export default function ScaleYourEcommerce({slice}) {

  let arrObj = [{
    src: '/prtnrsYopo.svg'
  },
  {
    src: '/prtnrsScandi.svg'
  },
  {
    src: '/prtnrsSerchSprng.svg'
  },
  {
    src: '/prtnrsUNBXD.svg'
  },
  {
    src: '/prtnrsWebScale.svg'
  },
  {
    src: '/prtnrsOkendo.svg'
  },
  {
    src: '/prtnrsDelve.svg'
  },
  {
    src: '/prtnrsGr4vy.svg'
  },
]



  return(
    
     <section className='sclEcom'>
       <div className='sclEcomContainer'>
         <Title titleA='Scale Your e-commerce' titleB='Bigger and Better' />
         <div className='sclEcomShowcase'>
           {
             slice.items.map((data,i) => {
              console.log("linkME DADDY", data.cta_link)
               return(
                 <div className='sclEcomItemContainer' key={i}>
                   <div className='sclEcomLogo'>
                     <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'contain'}} field={data.logo} alt={data.logo.alt} />
                   </div>
                   <div className='sclEcomItemDescription helReg'>
                     <RichText field={data.description} />
                   </div>
                   <Button href={`${data.cta_link.uid}`} className='btn bgNilBtn helMed' text='Know More' />                    
                 </div>
               )
             })
           }
         </div>
         <div className='sclEcomBtnContainer'><Button className='btn darkBtn helReg' text='Explore All' /></div>
         <div className=''>
           <EyeBrow className='eyeText helMed'  text='Other Partners'/>
           <div className='logoShowcase'>
             {
               arrObj.map((obj,i) => {
                 return(
                   <MiniLogoShowcase obj={obj} key={i} />
                 )
               })
             }
             {
               arrObj.map((obj,i) => {
                 return(
                   <div className='lMob' key={i}>
                   <MiniLogoShowcase obj={obj} key={i} />
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