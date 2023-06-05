/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichText from '../../components/RichText/richText';
import Link from 'next/link';

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyNextProjectSlice} CaseStudyNextProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyNextProjectSlice>} CaseStudyNextProjectProps
 * @param { CaseStudyNextProjectProps }
 */
export default function CaseStudyNextProject({slice}) {

  let bgImg = `${slice.primary.next_project_image.url}`

  return(
    <section className='nextPrj' style={{background: `url(${bgImg}) no-repeat center center/cover`}}>
      <div className='nextPrjContainer'>
        <div className='nextPrjContent'>
            <div>
              <div className='nxtPrjNme'>
                <div className='helBold'>
                  <p style={{color:'#dbdbdb'}}>Next Project - </p>
                </div>
                <div className='helBold'>
                  <p style={{color:'#FFF'}}>
                    {`${slice.primary.next_project_name[0].text}`}
                  </p>
                </div>
              </div>
              <div className='nxtPrjOvr helReg'>
                <p>
                  {`${slice.primary.next_project_overview[0].text}`}
                </p>
              </div>
              <div className='nxtPrjCTA helReg'style={{cursor:'pointer'}}>
                <Link style={{display:'flex', alignItems:'center '}} target='blank' href={`${slice.primary.cta_link.url}`}>
                  <div>
                    <p>Read</p>
                  </div>
                  <div>
                    <img style={{marginLeft:'0.4rem'}} src='/ctaArrowWhite.svg' alt='arrow' />
                  </div>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}