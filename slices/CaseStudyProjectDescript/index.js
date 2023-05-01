import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichText from '../../components/RichText/richText'

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyProjectDescriptSlice} CaseStudyProjectDescriptSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyProjectDescriptSlice>} CaseStudyProjectDescriptProps
 * @param { CaseStudyProjectDescriptProps }
 */
export default function CaseStudyProjectDescript({slice}){

  let bg = `${slice.primary.background_color[0].text}`
  let color = `${slice.primary.text_color[0].text}`
  

  return(
    <section className='csPrjDescript' style={{background: bg , padding:'10rem 2rem 10rem 2rem'}}>
      <div className='csPrjDescriptContainer' style={{padding:'2rem 4rem'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div className='helReg' style={{width:'34.6%', lineHeight:'150%'}}>
            <RichText 
            style={{color: color}}
            field={slice.primary.description} />
          </div>
        </div>
      </div>
    </section>
  )
}