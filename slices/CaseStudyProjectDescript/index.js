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
    <section className='csPrjDescript' style={{background: bg }}>
      <div className='csPrjDescriptContainer'>
        <div className='csPrjDescriptTextWrapper'>
          <div className='helReg'>
            <RichText 
            style={{color: color}}
            field={slice.primary.description} />
          </div>
        </div>
      </div>
    </section>
  )
}