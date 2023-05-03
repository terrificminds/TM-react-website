/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleComponent from '../../components/TitleComponent/titleComponent'

/**
 * @typedef {import("@prismicio/client").Content.WorksHeroSlice} WorksHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksHeroSlice>} WorksHeroProps
 * @param { WorksHeroProps }
 */
export default function WorksHero({slice}) {

  let arrObj = [
    {
      src:'/Works/magento.svg',
      number:'40+',
    },
    {
      src:'/Works/shopify.svg',
      number:'30+',
    },
    {
      src:'/Works/uxDark.svg',
      number:'40+',
    }
  ]

  let title = 'Work that humanizes technology, fulfills ambitions and brings dreams to life.';
  let description = 'Lorem ipsum dolor sit amet consectetur. Nibh sagittis faucibus eget nisl nisi quam massa agittis at bibendum s';

  let Title = <TitleComponent title={title} description={description} /> ;
  
  return(
    <main className='worksHero'>
      <div className='worksContainer'>
        <div className='worksA' style={{color:'#1A1A1A'}}>
          {Title}
        </div>
        <div className='worksB'>
          <div className='worksBItems'>
            {
              arrObj.map((data, i) => {
                return(
                  <div className='worksBItem' key={i}>
                    <div className='worksBLogo' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <img
                        style={{height:'100%', width:'100%', objectFit:'contain'}} 
                        src={data.src} alt='logo' />
                    </div>
                    <div className='worksBTextContainer'>
                      <div><p className='worksBNumber helBold'>{data.number}</p></div>
                      <div className='worksBText'><p className='helReg'>Successful Projects</p></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}