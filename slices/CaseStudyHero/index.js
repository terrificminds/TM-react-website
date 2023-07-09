import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../components/RichText/richText'

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyHeroSlice} CaseStudyHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyHeroSlice>} CaseStudyHeroProps
 * @param { CaseStudyHeroProps }
 */
export default function CaseStudyHero({slice}) {

  console.log("SLICE ME", slice)

  return(
    <section className='caseStudyHero'>
      <div className='caseStudyHeroContainer' style={{zIndex:'-100'}}>
        <PrismicNextImage
        style={{height:'100%', width:'100%', objectFit:'cover', zIndex:'-100', position:'absolute', top:'0', left:'0'}}
        field={slice.primary.project_image} />
        <div className='caseStudyHeroContent-container'>
          <div className='csh-title' style={{textTransform:'uppercase'}}>
            <div className='helReg' style={{color:'#dbdbdb'}}>
              <RichText 
              field={slice.primary.project_category} />
            </div>
            &nbsp;<div>-</div>&nbsp;
            <div className='helMed'>
              <RichText 
              field={slice.primary.project_title} />
            </div>
          </div>
          <div className='csh-description helReg'>
            <RichText
            field={slice.primary.project_big_title} />
          </div>
        </div>
      </div>
    </section>
  )
}