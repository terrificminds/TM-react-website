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
        <div>
          <div className='worksTabContainer' style={{display:'flex'}}>
            {
              tab.map((obj, i) => {
                return(
                  <ButtonB className='worksTab btn helReg'
                    key={i}
                    text={obj.tab} />
                )
              })
            }
          </div>
          <div className='worksShowCaseContent'>
            <div style={{}}>
              <div>
                <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', margin:'1rem 0', width:'100%'}}>
                {
                  slice.items.map((data, i) => {
                      console.log("hello", data)
                    return(
                      <PrismicLink onClick={() => console.log(i, "index")} key={i}
                        style={{width: ((i+1) % 3) == 0 ? '100%':'49%', margin: '0 0 1rem 0'}} 
                        field={data.cta_link}>
                            <div className='worksCaseItem worksCaseItemA'>
                            <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover', zIndex:'-10000'}} field={data.image} alt="logo" />
                            <div style={{padding:'2rem', position:'absolute', top:'0', left:'0', right:'0', bottom:'0', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                <div style={{display:'flex', zIndex:'1000'}}>
                                {/* <RichText className='imgATag helReg' style={{display: data.img_a_tag_a[0].text ? '':'none'}} field={data.img_a_tag_a} />
                                <RichText className='imgATag helReg' style={{display: data.img_a_tag_b[0].text ? '':'none'}} field={data.img_a_tag_b} />
                                <RichText className='imgATag helReg' style={{display: data.img_a_tag_c[0].text ? '':'none'}} field={data.img_a_tag_c} /> */}

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
                                <div className='itemReveal' style={{}}>
                                <div className='helMed' style={{padding:'0.5rem 0'}}><RichText field={data.title} /></div>
                                <div className='helReg' style={{padding:'0.5rem 0'}}><RichText field={data.description} /></div>
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
                      {/* <div>
                        <WorksShowCaseV2C href={'/works/home'} data={data} />
                      </div> */}
                    </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}