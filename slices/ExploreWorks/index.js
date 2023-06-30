import React from 'react'
import Button from '../../components/Button/button'
import WorksShowcaseItem from '../../components/eWorksShowcaseItem/eWorksShowcaseItem'
import TitleC from '../../components/TitleC/TitleC'

/**
 * @typedef {import("@prismicio/client").Content.ExploreWorksSlice} ExploreWorksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExploreWorksSlice>} ExploreWorksProps
 * @param { ExploreWorksProps }
 */
export default function ExploreWorks({slice}) {

  let arrobj = [{
    title: 'Monkey Sports',
    description: 'We developed crucial APIs for integrating ERP and other custom systems, facilitated the migration from Magento 1 Enterprise to Adobe Commerce (Magento) 2.0 .',
    tagA: 'Magento 2',
    tagB: 'Design & UX',
    src: '/worksIconA.svg',
    alt: 'worksIconA',
    count: '40+',
    textB: 'Sports & Entertainment',
    background: 'url(/worksImgOne.png) no-repeat center center/cover',
  },
  {
    title: 'VREA Cosmetics',
    description: 'We facilitated the migration and integration of their existing data into Klaviyo, creating custom workflows to enhance their marketing automation platform.',
    tagA: 'Magento 2',
    tagB: 'Design & UX',
    src: '/worksIconB.svg',
    alt: 'worksIconB',
    count: '20+',
    textB: 'Cosmetics',
    background: 'url(/worksImgTwo.png) no-repeat center center/cover'
  },
  {
    title: 'Chennai Super Kings',
    description: 'A powerful fan engagement application for the Chennia Super Kings that brings to life the nature and character of the sports team.',
    tagA: 'Magento 2',
    tagB: 'Design & UX',
    src: '/worksIconC.svg',
    alt: 'worksIconC',
    count: '40+',
    textB: 'Sports & Entertainment',
    background: 'url(/worksImgThree.png) no-repeat center center/cover',
  }
  ]
  
  return(
     <section className='eWorks'>
       <div className='eWorksWrapper'>
         <TitleC style={{fontFamily:'helReg'}} title='Explore Our Works' className='btn lightBtn helReg' href={'/works'} svgClassName='svg-arrow-light' text='Explore All' />
         <div className='eWorksShowcase'>
           <div className='eWorksShowcaseContainer snapsInline'>
             {
               arrobj.map((obj, index) => {
                 return(
                   <WorksShowcaseItem
                    key={index} 
                    style={{background:obj.background, cursor:'pointer'}} 
                    obj={obj} />
                 )
               })
             }
           </div>
         </div>
         <div className='center btnMob' style={{padding:'2rem 0'}}>
          <Button 
            className='btn lightBtn helReg' 
            svgClassName='svg-arrow-light' 
            text='Explore All' />
          </div>
       </div>
     </section>
  )
}