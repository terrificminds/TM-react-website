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

  return(
    <section className='gdExp' style={{background:'#FFF'}}>
      <div className='gdExpContainer'>
        <Title 
          titleA='Great digital experiences are powered'  
          titleB='by great technology' />
          <div className='gdExpShowcase'>
            {
              slice.items.map((data, i) => {
                return(
                  <div className='gdExpItem' key={i}>
                    <div className='gdExpItemA'>
                      <div className='gdExpItemLogo'>
                        <PrismicNextImage field={data.logo} />
                      </div>
                    </div>
                    <div className='gdExpItemB'>
                      <div className='gdExpItemDescription'>
                        <div className='gdExpDescription helReg' style={{color:'#000'}}>
                          <RichText field={data.description} />
                        </div>
                        <Button 
                          className='btn bgNilBtn helMed'
                          text={<RichText field={data.cta_text} />} />
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>
          <EyeBrow 
              className='helMed'
            text='Other Partners' />
          <div className='logoShowcase'>
            {
              arrObj.map((obj, i) => {
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
    </section>
  )
}