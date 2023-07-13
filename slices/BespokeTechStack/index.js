import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleB from '../../components/TitleB/titleB';
import TitleE from '../../components/TitleComponent/TitleE';

/**
 * @typedef {import("@prismicio/client").Content.BespokeTechStackSlice} BespokeTechStackSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BespokeTechStackSlice>} BespokeTechStackProps
 * @param { BespokeTechStackProps }
 */
export default function BespokeTechStack({slice}){

  const [ techTabActive, setTechTabActive ] = useState(0);

  const [ mobTabActive, setMobTabActive ] = useState(0);




  let techTab = [
    {
      index: "01",
      tabTitle: <PrismicRichText field={slice.primary.tab_a} />
    },
    {
      index: "02",
      tabTitle: <PrismicRichText field={slice.primary.tab_b} />
    },
    {
      index: "03",
      tabTitle: <PrismicRichText field={slice.primary.tab_c} />
    },
    {
      index: "04",
      tabTitle: <PrismicRichText field={slice.primary.tab_d} />
    },
    {
      index: "05",
      tabTitle: <PrismicRichText field={slice.primary.tab_e} />
    }
  ]

  let techDescription = [
    {
      techDescript: <PrismicRichText field={slice.primary.tab_a_description} />,
      tags: [{tag:'React'}, {tag: 'Next.js'}, {tag:'Laravel'}, {tag:'Node.js'}, {tag:'Express.js'}, {tag:'Elementor'}, {tag:'Tailwind CSS'}, {tag:'Ruby on Rails'}, {tag:'Spring Boot'}]
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_b_description} />,
      tags: [{tag:'Github'}, {tag: 'Pandas'}, {tag:'Tensorflow'}, {tag:'SciPy'}, {tag:'YOLO'}, {tag:'OpenCV'}, {tag:'Matplotlib'}]
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_c_description} />,
      tags: [{tag:'Swift'}, {tag: 'SwiftUI'}, {tag:'Flutter'}, {tag:'Kotlin'}, {tag:'Java'}, {tag:'JetPackCompose'}, {tag:'Unity'}]
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_d_description} />,
      tags: [{tag:'Selenium with Java'}, {tag: 'Cypress'}, {tag:'Maven'}, {tag:'TestNG'}, {tag:'Apache Jenkins'}, {tag:'Apache Jmeter'}, {tag:'Postman'}, {tag:'SoapUI'}, {tag:'Lambdatest'}, {tag:'Bitbucket'}]
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_e_description} />,
      tags: [{tag:'HTML'}, {tag: 'CSS'}, {tag:'React'}, {tag:'Node Js'}, {tag:'Angular Js'}, {tag:'jQuery'}, {tag:'Github'}]
    },
  ]

  let techMobData = [
    {
      index: "01",
      tabTitle: <PrismicRichText field={slice.primary.tab_a} />,
      techDescript: <PrismicRichText field={slice.primary.tab_a_description} />,
      tags: [{tag:'HTML'}, {tag: 'CSS'}, {tag:'React'}, {tag:'Node Js'}, {tag:'Angular Js'}, {tag:'jQuery'}, {tag:'Github'}]
    },
    {
      index: "02",
      tabTitle: <PrismicRichText field={slice.primary.tab_b} />,
      techDescript: <PrismicRichText field={slice.primary.tab_b_description} />,
      tags: [{tag:'HTML'}, {tag: 'CSS'}, {tag:'React'}, {tag:'Node Js'}, {tag:'Angular Js'}, {tag:'jQuery'}, {tag:'Github'}]
    },
    {
      index: "03",
      tabTitle: <PrismicRichText field={slice.primary.tab_c} />,
      techDescript: <PrismicRichText field={slice.primary.tab_c_description} />,
      tags: [{tag:'HTML'}, {tag: 'CSS'}, {tag:'React'}, {tag:'Node Js'}, {tag:'Angular Js'}, {tag:'jQuery'}, {tag:'Github'}]
    },
    {
      index: "04",
      tabTitle: <PrismicRichText field={slice.primary.tab_d} />,
      techDescript: <PrismicRichText field={slice.primary.tab_d_description} />,
      tags: [{tag:'HTML'}, {tag: 'CSS'}, {tag:'React'}, {tag:'Node Js'}, {tag:'Angular Js'}, {tag:'jQuery'}, {tag:'Github'}]
    },
    {
      index: "05",
      tabTitle: <PrismicRichText field={slice.primary.tab_e} />,
      techDescript: <PrismicRichText field={slice.primary.tab_e_description} />,
      tags: [{tag:'HTML'}, {tag: 'CSS'}, {tag:'React'}, {tag:'Node Js'}, {tag:'Angular Js'}, {tag:'jQuery'}, {tag:'Github'}]
    },
  ]

  return(
    <section className='bspkTech'>
      <div className='bspkTech_Container'>
        {/* <div className='title helMed' 
          style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
          <h3>
            <PrismicRichText field={slice.primary.title} />
          </h3>
        </div> */}
        <TitleE title={ <PrismicRichText field={slice.primary.title} /> } />
        {/* Desktop */}
        <div className='bspkTech_Interaction_Container bspkTech_Desktop' style={{}}>
          <div className='bspkTech_Tab_Container'>
            {
              techTab.map((data, i) => {
                return(
                  <div onClick={() => setTechTabActive(i)} className='bspkTech_Tab helMed' key={i}>
                    <p style={{display:'flex', color: techTabActive == i ? '#0E0E0E':'#CBCBCB' }}>
                      <sup className='bspkTech_Index'>
                      {data.index}
                      </sup>
                      {data.tabTitle}
                    </p>
                  </div>
                )
              })
            }
          </div>
          <div className='bspkTech_Tab_Content_Container'>
            {
              techDescription.map((data, i) => {
                return(
                  <div className='bspkTech_Tab_Content_Inner_Container helReg' style={{opacity: techTabActive == i ? '1':'0'}} key={i}>
                    <div className='bspkTech_Tab_Description'>
                      <p>
                        {
                          data.techDescript
                        }
                      </p>
                    </div>
                      <div className='bspkTech_Tab_Tags_Container'>
                       {
                          data.tags.map((myTags, i) => {
                            return(
                              <div className='bspkTech_Tab_Tag' key={i}>
                                <p>
                                  {
                                    myTags.tag
                                  }
                                </p>
                              </div>
                            )
                          })
                       }
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* mobile */}
        <div className='bspkTech_Interaction_Container bspkTech_Mobile'>
            {
              techMobData.map((data, i) => {
                return(
                  <div onClick={() => setMobTabActive(i)} className='bspkTech_Tab helMed' key={i}>
                    <p style={{display:'flex', color: mobTabActive == i ? '#0E0E0E':'#CBCBCB' }}>
                      <sup className='bspkTech_Index'>
                      {data.index}
                      </sup>
                      {data.tabTitle}
                    </p>
                    {/* --- */}
                    <div className='bspkTech_Tab_Content_Inner_Container helReg' style={{height: mobTabActive == i ? 'auto':'0', overflow:'hidden', padding: mobTabActive == i ? '2rem 0 0 0':'0'}}  key={i}>
                      <div className='bspkTech_Tab_Description'>
                        <p>
                          {
                            data.techDescript
                          }
                        </p>
                      </div>
                      <div className='bspkTech_Tab_Tags_Container'>
                       {
                          data.tags.map((myTags, i) => {
                            return(
                              <div className='bspkTech_Tab_Tag' key={i}>
                                <p>
                                  {
                                    myTags.tag
                                  }
                                </p>
                              </div>
                            )
                          })
                       }
                      </div>
                    </div>
                    {/* --- */}
                  </div>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}