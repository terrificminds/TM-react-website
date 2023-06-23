/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Title from '../../components/Title/title'
import DesignItem from '../../components/DesignItem/designItem'
import Button from '../../components/Button/button'
import DesignAccordion from '../../components/DesignAccordion/DesignAccordion'

/**
 * @typedef {import("@prismicio/client").Content.DesignShowcaseSlice} DesignShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DesignShowcaseSlice>} DesignShowcaseProps
 * @param { DesignShowcaseProps }
 */
export default function DesignShowcase() {

  let arrObj = [{
    title: 'Web Design',
    listItem: ['Landing', 'Brochure Site', 'Corporate Website', 'Ecommerce', 'Web 3.0'],
    background: 'linear-gradient(90deg, #FF7438 -5.5%, #FFA40A 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    // src: '/testA.gif'
    src:'/Landing/Web Design.mp4'
  },
  {
    title: 'Branding',
    listItem: ['Branding', 'Brochure Site', 'Corporate Design', 'Ecommerce', 'Web 3.0'],
    background: 'linear-gradient(90deg, #8642F8 -5.5%, #B436F3 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src: '/testB.gif'
  },
  {
    title: 'UI/UX Design',
    listItem: ['UI/UX Design', 'Brochure Site', 'Corporate Website', 'Ecommerce', 'Web 3.0'],
    background: 'linear-gradient(90deg, #00EDB0 -5.5%, #00B0D6 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src: '/testC.gif'
  },
  {
    title: 'Motion Design',
    listItem: ['Motion Design', 'Brochure Site', 'Corporate Website', 'Ecommerce', 'Web 3.0'],
    background: 'linear-gradient(90deg, #FF636E -5.5%, #FD6030 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src: '/testD.gif'
  },
]

  return(
     <section className='dShwCse'>
       <div className='dShwCseContainer'>
           <div className='dShwCseTitle' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2rem 0'}}>
             <Title styleA={{color:'#FFF'}} 
                    titleA='Good design is at the heart of' 
                    styleB={{color:'#FFF'}}  
                    titleB='everything we do' 
              />
             <div className='glow'><img style={{height:'100%', width:'100%', objectFit:'cover'}} src='/glowything.svg' alt='' /></div>
           </div>
           <div className='sectionB'>
            <div className='dsgnWrap'>
              {
                arrObj.map((obj, i) => {
                  return(
                    <DesignItem 
                    style={{background:obj.background, backgroundClip: obj.backgroundClip, 
                            textFillColor: obj.textFillColor, WebkitTextFillColor: obj.webKitTextFillColor, 
                            WebkitBackgroundClip: obj.webKitBackgroundClip }} obj={obj} key={i} 
                  />
                    )
                })
              }
            </div>
            <div className='dsgnWrapB'>
              {
              arrObj.map((obj, i) => {
                return(
                  <div key={i}>
                    <DesignAccordion  obj={obj} i={i}
                      style={{background:obj.background, backgroundClip: obj.backgroundClip, 
                        textFillColor: obj.textFillColor, WebkitTextFillColor: obj.webKitTextFillColor, 
                        WebkitBackgroundClip: obj.webKitBackgroundClip }} 
                      />
                  </div>
                )
              })
              }
            </div>
             <div className='center' style={{padding:'3rem 0 2rem 0'}}>
               <Button className='btn lightBtn helReg' text='View All Services' />
             </div>
           </div>
       </div>
     </section>
  )
}