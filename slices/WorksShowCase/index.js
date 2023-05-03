import React, { useState } from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import RichText from '../../components/RichText/richText'
import ButtonB from '../../components/ButtonB[noArrow]/buttonB'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import Button from '../../components/Button/button'
import WorksShowCaseV2A from '../../components/worksShowCaseV2/ShowCaseA/worksShowCaseV2A'
//  import WorksShowCaseV2B from '../../components/worksShowCaseV2/ShowCaseB/worksShowCasepllopop

/**
 * @typedef {import("@prismicio/client").Content.WorksShowCaseSlice} WorksShowCaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksShowCaseSlice>} WorksShowCaseProps
 * @param { WorksShowCaseProps }
 */
export default function WorksShowCase({slice}) {


  const [index, setIndex] = useState(0);

  let tab = [
    {
      tab: 'All Projects'
    },
    {
      tab: 'Ecommerce'
    },
    {
      tab: 'Design'
    },
    {
      tab: 'Bespoke'
    }
  ]

  return(
    <section className='worksShowCase'>
      <div className='worksShowCaseContainer'>
        <div className='worksShowCaseContentContainer'>
          {/* <div className='worksTabContainer'>
            {
              tab.map((obj, i) => {
                return(
                  <ButtonB className='worksTab btn helReg'
                    key={i}
                    text={obj.tab} />
                )
              })
            }
          </div> */}
          <div className='worksShowCaseContent'>
            <div className='worksShowcaseItemContainer'>
              {
                slice.items.map((data, i) => {
                  return(
                    <PrismicLink className='worksShowcaseItem' key={i}
                      style={{width: ((i+1) % 3) == 0 ? '100%':'49%'}} 
                      field={data.cta_link}>
                        <div className='worksCaseItem worksCaseItemA'>
                          <PrismicNextImage 
                          style={{height:'100%', width:'100%', 
                          objectFit:'cover', zIndex:'-10000'}} 
                          field={data.image} alt={data.image.alt} />
                          <div className='worksShowCaseOverlayItem'>
                            <div style={{display:'flex', zIndex:'1000'}}>
                              <RichText className='imgATag helReg' 
                              style={{display: data.tag_a[0].text ? '':'none'}} 
                              field={data.tag_a} />
                              <RichText className='imgATag helReg' 
                              style={{display: data.tag_b[0].text ? '':'none'}} 
                              field={data.tag_b} />
                              <RichText className='imgATag helReg' 
                              style={{display: data.tag_c[0].text ? '':'none'}} 
                              field={data.tag_c} />
                            </div>

                            <div className='itemReveal'>
                              <div className='helMed' style={{padding:'0.5rem 0'}}>
                                <RichText field={data.title} />
                              </div>
                              <div className='helReg' style={{padding:'0.5rem 0'}}>
                                <RichText field={data.description} />
                              </div>
                              <div className='helReg' style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.5rem 0'}}>
                                <RichText  field={data.tag_category} />
                                <div style={{display:'flex', alignItems:'center'}}>
                                  <Link style={{display:'flex', alignItems:'center'}} href={{}}>
                                    <Button styleText={{color:'#FFF'}} className='btn bgNilBtn' text='See More' />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PrismicLink>
                    )
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}