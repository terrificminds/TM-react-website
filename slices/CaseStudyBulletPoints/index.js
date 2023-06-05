import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../components/RichText/richText'

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyBulletPointsSlice} CaseStudyBulletPointsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyBulletPointsSlice>} CaseStudyBulletPointsProps
 * @param { CaseStudyBulletPointsProps }
 */
export default function CaseStudyBulletPoints({slice}){
  return(
    <section className='bPoints'>
      <div className='bPointsContainer'>
        <div className='bPointsBg'>
          <PrismicNextImage 
          style={{height:'100%', width:'100%', objectFit:'cover'}}
          field={slice.primary.image} />
        </div>
        <div className='bgPointsContentContainer' style={{background:'#FFF'}}>
          <div className='bgPointsContent'>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div className='bgPointText helReg'>
                <RichText field={slice.primary.text} />
              </div>
              <div className='bgPointContainer'>
                {
                  slice.items.map((data, i) => {
                    return(
                      <div className='bgPoint helReg' key={i}>
                        <li style={{display:'flex', listStyle:''}}>
                          <RichText style={{}} field={data.bullet_point} />
                        </li>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}