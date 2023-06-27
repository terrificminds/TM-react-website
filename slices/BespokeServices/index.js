import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleB from '../../components/TitleB/titleB'
import BespokeLogo from '../../components/BespokeLogo/bespokeLogo'
import Button from '../../components/Button/button'

/**
 * @typedef {import("@prismicio/client").Content.BespokeServicesSlice} BespokeServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BespokeServicesSlice>} BespokeServicesProps
 * @param { BespokeServicesProps }
 */
export default function BespokeServices() {

  let arrobjA = [
    {
      src:'/react.svg',
      logoText:'React',
      background: 'linear-gradient(45deg, #E8FAFF 0%, rgba(243, 252, 255, 0.7) 100%)'
    },
    {
      src:'/nodeJS.svg',
      logoText:'Node JS',
      background: 'linear-gradient(45deg, #DBFFDB 0%, rgba(238, 255, 238, 0.985937) 0.01%, rgba(238, 255, 238, 0.7) 100%)'
    },
    {
      src:'/AI.svg',
      logoText:'AI & ML',
      background: 'linear-gradient(45deg, #F7F2FF 0%, rgba(247, 241, 255, 0.7) 100%)'
    }
  ]

  let arrobjB = [
    {
      src:'/carbonToolKit.svg',
      logoText:'QA & Testing',
      background: 'linear-gradient(45deg, #EEF3FF 0%, rgba(238, 243, 255, 0.7) 100%)'
    },
    {
      src:'/mobility.svg',
      logoText:'Mobility',
      background: 'linear-gradient(45deg, #FFEAEB 0%, rgba(255, 234, 235, 0.37) 100%)'
    },
    {
      src:'/devOps.svg',
      logoText:'DevOps',
      background: 'linear-gradient(45deg, #CFFFE5 0%, rgba(207, 255, 229, 0.31) 100%)'
    }
  ]


  return(
    <section className='bspkSrvc' style={{background:'#FFFFFF'}}>
      <div className='bspkSrvcContainer'>
        <TitleB title='Our Bespoke Services' 
                textA='At Terrific Minds, we are passionate about our 
                      technology and we take pride in our bespoke and 
                      upcoming projects.'
                textB= 'We work with global entities providing services around AI and Machine Learning, Android and IOS programming.'
        />
        <div className='bspkSrvcLogoContainer' style={{}}>
          <div className='bspkItemContainer'>
            <div className='bspkItemA'>
              {
                  arrobjA.map((obj,i) => {
                    return(
                        <BespokeLogo style={{background:obj.background}} obj={obj} key={i} />
                    )
                  })
                }
              </div>
            <div className='bspkItemB'>
              {
                arrobjB.map((obj,i) => {
                  return(
                      <BespokeLogo style={{background:obj.background}} obj={obj} key={i} />
                  )
                })
              }
            </div>
          </div>
          <div style={{padding:'2rem 0'}}>
            <Button className='btn darkBtn' fill="#FFF" text='Explore All' />
          </div>
        </div>
      </div>
    </section>
  )
}