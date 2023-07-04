import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Title from '../../components/Title/title'
import { PrismicNextImage } from '@prismicio/next'
import Button from '../../components/Button/button'
import RichText from '../../components/RichText/richText'
import MiniLogoShowcase from '../../components/MiniLogoShowcase/miniLogoShowcase'
import EyeBrow from '../../components/EyeBrow/eyebrow'

/**
 * @typedef {import("@prismicio/client").Content.GreatDigitalExperienceSlice} GreatDigitalExperienceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GreatDigitalExperienceSlice>} GreatDigitalExperienceProps
 * @param { GreatDigitalExperienceProps }
 */
export default function GreatDigitalExperience({slice}) {
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

//  let title = 'Great digital experiences are powered by great technology'
 let title = <PrismicRichText field={slice.primary.title} />

  let bg =  `${slice.primary.bg_color[0].text}`


  return(
    <section className='gdExp' style={{background: bg}}>
      <div className='gdExpContainer'>
        <div className='gdExpTitleContainer'> 
          <div className='gdExpTitle helMed'>
            <h3>
              {title}
            </h3>
          </div>
        </div>
          <div className='gdExpShowcase'>
            {
              slice.items.map((data, i) => {
                return(
                  <div className='gdExpItem' key={i}>
                    <div className='gdExpItemA'>
                      <div className='gdExpItemLogo'>
                        <PrismicNextImage 
                        style={{height:'100%', width:'100%', objectFit:'contain'}} 
                        field={data.logo} />
                      </div>
                    </div>
                    <div className='gdExpItemB'>
                      <div className='gdExpItemDescription'>
                        <div className='gdExpDescription helReg' style={{color:'#000'}}>
                          <RichText field={data.description} />
                        </div>
                        <Button 
                          className='btn bgNilBtn helMed'
                          text={`${data.cta_text[0].text}`} />
                      </div>
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