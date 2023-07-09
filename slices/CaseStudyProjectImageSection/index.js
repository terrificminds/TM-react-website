import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyProjectImageSectionSlice} CaseStudyProjectImageSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyProjectImageSectionSlice>} CaseStudyProjectImageSectionProps
 * @param { CaseStudyProjectImageSectionProps }
 */
export default function CaseStudyProjectImageSection({slice}) {


  return(
    <section>
      <div style={{height:'62vw'}}>
        <PrismicNextImage 
        style={{height:'100%', width:'100%', objectFit:'cover'}}
        field={slice.primary.image_a} 
        alt={slice.primary.image_a.alt} 
        />
      </div>
      <div style={{height:'62vw'}}>
        <PrismicNextImage 
        style={{height:'100%', width:'100%', objectFit:'cover'}}
        field={slice.primary.image_b}
         alt={slice.primary.image_b.alt}
         />
      </div>
    </section>
  )
}
