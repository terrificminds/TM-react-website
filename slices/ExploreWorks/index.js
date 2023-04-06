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
    backgroundColor: 'pink'
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
    backgroundColor: 'green'
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
    backgroundImage: 'url(/worksImgA.svg)',
  }
  ]
  
  return(
    <>
    <section className='eWorks'>
      <div className='eWorksWrapper' style={{border:'1px red solid'}}>
        <div className='eWorksEyeBrow' style={{border:'1px yellow solid'}}>
          <div className='eWorksEyeBrowText helReg'><p>Explore Our Works</p></div>
          <div><Button className='btn explrBtn helReg' text='Explore All' /></div>
        </div>
        <div className='eWorksShowcase'>
          <div className='eWorksShowcaseContainer'>
            {
              arrobj.map((obj, index) => {
                return(
                  <WorksShowcaseItem style={{backgroundImage:obj.backgroundImage}} obj={obj} key={index}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
    </>
  )
}