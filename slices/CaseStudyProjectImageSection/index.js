import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../components/RichText/richText'

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyProjectImageSectionSlice} CaseStudyProjectImageSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyProjectImageSectionSlice>} CaseStudyProjectImageSectionProps
 * @param { CaseStudyProjectImageSectionProps }
 */
export default function CaseStudyProjectImageSection({slice}) {


  return(
    <section>
      <div>
        <PrismicNextImage 
        style={{height:'100%', width:'100%', objectFit:'cover'}}
        field={slice.primary.image_a} 
        alt={slice.primary.image_a.alt} 
        />
      </div>
      <div>
        <PrismicNextImage 
        style={{height:'100%', width:'100%', objectFit:'cover'}}
        field={slice.primary.image_b}
         alt={slice.primary.image_b.alt}
         />
      </div>
    </section>
  )
}

//6a6766
