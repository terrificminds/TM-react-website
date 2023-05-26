/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Button from '../../components/Button/button'

/**
 * @typedef {import("@prismicio/client").Content.EcomHeroSlice} EcomHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomHeroSlice>} EcomHeroProps
 * @param { EcomHeroProps }
 */
export default function EcomHero({slice}) {

  let description = 'Our ecommerce experts help shape your vision of an online store into a reality.';


  // Mockup animation

  useEffect(() => {

    // MockupA animation


    let MockupAImage = document.querySelectorAll('.mockupImg_A');

    let ImageA = MockupAImage[0];
    let ImageB = MockupAImage[1];
    let ImageC = MockupAImage[2];


    const AnimationA = () => {

      ImageA.style.opacity = '1'
      ImageB.style.opacity = '0'
      ImageC.style.opacity = '0'

      setTimeout(() => {
        ImageA.style.opacity = '0'
        ImageB.style.opacity = '1'
      }, 2000)

      setTimeout(() => {
        ImageB.style.opacity = '0'
        ImageC.style.opacity = '1'
      }, 5000)

    }

    setInterval(AnimationA, 8000);

    
    // MockupB animation
    let MockupBImage = document.querySelectorAll('.mockUp_Img_B');

    let ImageD = MockupBImage[0];
    let ImageE = MockupBImage[1];
    let ImageF = MockupBImage[2];

     const AnimationB = () => {

      ImageD.style.opacity = '1'
      ImageE.style.opacity = '0'
      ImageF.style.opacity = '0'

      setTimeout(() => {
        ImageD.style.opacity = '0'
        ImageE.style.opacity = '1'
      }, 2000)

      setTimeout(() => {
        ImageE.style.opacity = '0'
        ImageF.style.opacity = '1'
      }, 4000)

     }

    setInterval(AnimationB,7000)
  
  })


  return(
    <>
    <main className='ecomHero'>
      <div className='ecomHeroContainer'>
        <div className='ecomHeroContentA'>
          <div className='ecomHeroTitle'>
            <p className='helMed' style={{color:'#1A1A1A'}}>
              Create <span style={{color:'#FE6131'}}>e-commerce </span> 
              websites that understand the customer journey
            </p>
          </div>
          <div className='ecomHeroDescription helReg' style={{color:'#1A1A1A'}}>
            <p>
              {description}
            </p>
          </div>
          <Button className='btn darkBtn helReg' text='Get a free store evaluation' />
        </div>
        <div className='ecomHeroContentB'>
          <div className='ecomHeroShowcaseContainer' style={{position:'relative'}}>

            <div className='mockUpA'>
              <div style={{height:'100%', width:'100%', background:'#1E2226',  transition:'all 0.4s ease', transform:'translateX(0%)', position:'relative'}}>

                <PrismicNextImage className='mockupImg_A' 
                    style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.4rem', position:'absolute', top:'0', left:'0', opacity:'1', transition:'all 1s ease'}} 
                    field={slice.primary.imagea} alt={slice.primary.imagec.alt} />

                <PrismicNextImage className='mockupImg_A'
                  style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.4rem', position:'absolute', top:'0', left:'0', opacity:'0', transition:'all 1s ease'}} 
                  field={slice.primary.imageb} alt={slice.primary.imagea.alt} />
                  
                <PrismicNextImage className='mockupImg_A'
                  style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.4rem', position:'absolute', top:'0', left:'0', opacity:'0', transition:'all 1s ease'}} 
                  field={slice.primary.imagec} alt={slice.primary.imageb.alt} />

              </div>
            </div>

            <div className='mockUpA scaleDown' style={{background:'#1E2226', width:'100%', height:'100%'}}>

              <div className='mockUp_Img_Container'  style={{height:'100%', width:'100%', display:'flex'}}>
                  {/* <div className='mockUp_Img'> */}
                <PrismicNextImage className='mockUp_Img_B'  
                    style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.2rem', position:'absolute', top:'0', left:'0', transition:'all 0.6s ease'}} 
                    field={slice.primary.imagea} alt={slice.primary.imagec.alt} />
                {/* </div> */}

                {/* <div className='mockUp_Img' style={{position:'relative'}}> */}
                  <PrismicNextImage className='mockUp_Img_B' 
                    style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.2rem', position:'absolute', top:'0', left:'0', opacity:'0', transition:'all 0.6s ease'}} 
                    field={slice.primary.imageb} alt={slice.primary.imagea.alt} />
                    
                  <PrismicNextImage className='mockUp_Img_B'
                    style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.2rem', position:'absolute', top:'0', left:'0', opacity:'0', transition:'all 0.6s ease'}} 
                    field={slice.primary.imagec} alt={slice.primary.imageb.alt} />
                {/* </div> */}

                {/* <div className='mockUp_Img' > */}
                  {/* <PrismicNextImage  
                      style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.2rem'}} 
                      field={slice.primary.imagea} alt={slice.primary.imagec.alt} /> */}
                {/* </div> */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
    </>
  )
}