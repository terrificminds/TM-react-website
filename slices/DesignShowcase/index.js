/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
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
    title: 'Research',
    listItem: ['User Research', 'Heuristics Analysis', 'Competitor analysis', 'User journey mapping', 'Information architecture'],
    background: 'linear-gradient(90deg, #FF7438 -5.5%, #FFA40A 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1687928900/Web_Design_lwxn4q.mp4'
  },
  {
    title: 'Design',
    listItem: ['eCommerce Storefront Design', 'Web/Mobile Product UX ', 'Design Systems', 'Corporate/Brand website design', 'Data Visualization'],
    background: 'linear-gradient(90deg, #8642F8 -5.5%, #B436F3 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1687928789/Branding_lm9yzu.mp4'
  },
  {
    title: 'Marketing',
    listItem: ['Brand Identity Design', 'AI-enhanced Visual design Solutions', 'Social Media Marketing Collaterals', 'Brand Merchandise designs', 'Pitch deck designs'],
    background: 'linear-gradient(90deg, #00EDB0 -5.5%, #00B0D6 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1687928845/Ui-Ux_Design_rtjoqy.mp4'
  },
  {
    title: 'Production / XR',
    listItem: ['Animation and Motion Design', 'Real-time Unreal Engine 3D', 'AR/VR - Interactive Production', 'Broadcast/Video Production', 'Digital/Social content Production'],
    background: 'linear-gradient(90deg, #FF636E -5.5%, #FD6030 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
    src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1687928824/Motion_Graphics_b92hqc.mp4'
  },
]

const [ selected, setSelected ] = useState(false)

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
                    <DesignAccordion onClick={() => setSelected(i)} selected={selected}  obj={obj} i={i}
                      style={{background:obj.background, backgroundClip: obj.backgroundClip, 
                        textFillColor: obj.textFillColor, WebkitTextFillColor: obj.webKitTextFillColor, 
                        WebkitBackgroundClip: obj.webKitBackgroundClip }} 
                      />
                  </div>
                )
              })
              }
            </div>
             <div className='center' style={{padding:'4.5rem 0 2rem 0'}}>
               <Button 
                href="/design"
                className='btn lightBtn helReg' 
                svgClassName="svg-arrow-light" 
                text='View All Services' 
              />
             </div>
           </div>
       </div>
     </section>
  )
}