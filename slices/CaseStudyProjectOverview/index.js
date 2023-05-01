/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import RichText from '../../components/RichText/richText'

/**
 * @typedef {import("@prismicio/client").Content.CaseStudyProjectOverviewSlice} CaseStudyProjectOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyProjectOverviewSlice>} CaseStudyProjectOverviewProps
 * @param { CaseStudyProjectOverviewProps }
 */
export default function CaseStudyProjectOverview({slice}){
  return(
    <section className='prjOverview'>
      <div className='prjOverviewContainer'>

        {/* CONTENT A */}

        <div className='prjA'>
          <div className='prjAContainer'>
            <div className='prjAContent'>

              <div className='prjTagContainer'>
                <div className='prjTagTitle helBold'>
                  <p>Services</p>
                </div>
                {
                  slice.items.map((data, i) => {
                    return(
                      <div className='prjTags helMed' 
                      style = {{display: data.services_tag[0].text == "" ? 'none':''}} 
                      key={i}>
                        <RichText 
                        field = {data.services_tag} 
                        />
                      </div>
                    )
                  })
                }
              </div>

              <div className='prjTagContainer'>
                <div className='prjTagTitle helBold '>
                  <p>Technology</p>
                </div>
                {
                  slice.items.map((data, i) => {
                    console.log("PINOY", data)
                    return(
                      <div className='prjTags helMed' 
                      style = {{display: data.technology_tag[0].text == "" ? 'none':''}}
                      key={i}>
                        <RichText 
                        field = {data.technology_tag} 
                        />
                      </div>
                    )
                  })
                }
              </div>

              <div className='prjTagContainer'>
                <div className='prjTagTitle helBold'>
                  <p>Launch</p>
                </div>
                <div className='prjTags helMed' style = {{display: slice.primary.launch_tag[0].text == "" ? 'none':''}} >
                  <RichText 
                  field = {slice.primary.launch_tag} 
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* CONTENT B */}
        <div className='prjB' style={{background:'#0f0f0f'}}>
          <div className='prjBContainer'>
            <div className='prjBContent'>
              <div className='prjDescript helReg'>
                <RichText
                field = {slice.primary.project_overview_description} 
                />
              </div>
              <div className='prjCTA helReg'>
                <PrismicLink 
                target='blank'  
                field = {slice.primary.cta_link} >
                  <div style={{display:'flex', alignItems:'center'}}> 
                    <div className='prjCTAText'>
                      <p>View Website</p>
                    </div>
                    <div 
                    style={{height:'0.8rem', width:'0.8rem', marginLeft:'0.6rem', 
                          display:'flex', alignItems:'center', 
                          justifyContent:'center'}}>
                      <img
                      style={{height:'100%', width:'100%' ,objectFit:'contain'}} 
                      src='/ctaArrowWhite.svg' alt='' />
                    </div>
                  </div>
                </PrismicLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}