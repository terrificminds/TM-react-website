import React from 'react'
import Button from '../../components/Button/button'
import WorksShowcaseItem from '../../components/eWorksShowcaseItem/eWorksShowcaseItem'

/**
 * @typedef {import("@prismicio/client").Content.ExploreWorksSlice} ExploreWorksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExploreWorksSlice>} ExploreWorksProps
 * @param { ExploreWorksProps }
 */
export default function ExploreWorks({slice}) {

  let arrobj = [{
    title: 'Monkey Sports',
    description: 'Lorem ipsum dolor sit amet',
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
    description: 'Lorem ipsum dolor sit amet',
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
    description: 'Lorem ipsum dolor sit amet',
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
    <></>
    //  <section className='eWorks'>
    //    <div className='eWorksWrapper'>
    //      <div className='eWorksEyeBrow'>
    //        <div className='eWorksEyeBrowText helReg'><p>Explore Our Works</p></div>
    //        <div className='btnDesk'><Button className='btn lightBtn helReg' text='Explore All' /></div>
    //      </div>
    //      <div className='eWorksShowcase'>
    //        <div className='eWorksShowcaseContainer snapsInline'>
    //          {
    //            arrobj.map((obj, index) => {
    //              return(
    //                <WorksShowcaseItem style={{background:obj.background, cursor:'pointer'}} obj={obj} key={index}/>
    //              )
    //            })
    //          }
    //        </div>
    //      </div>
    //      <div className='center btnMob' style={{padding:'2rem 0'}}><Button className='btn lightBtn helReg' text='Explore All' /></div>
    //    </div>
    //  </section>
  )
}