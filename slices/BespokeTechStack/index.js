import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.BespokeTechStackSlice} BespokeTechStackSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BespokeTechStackSlice>} BespokeTechStackProps
 * @param { BespokeTechStackProps }
 */
export default function BespokeTechStack({slice}){

  const [ techTabActive, setTechTabActive ] = useState(0);


  console.log(slice,  "HIIO")


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
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_b_description} />
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_c_description} />
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_d_description} />
    },
    {
      techDescript: <PrismicRichText field={slice.primary.tab_e_description} />
    },
  ]

  return(
    <section className='bspkTech'>
      <div className='bspkTech_Container'>
        <div className='title helMed' 
          style={{color:'#0E0E0E',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
          <p>
            <PrismicRichText field={slice.primary.title} />
          </p>
        </div>

        <div className='bspkTech_Interaction_Container'>
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
                  <div className='bspkTech_Tab_Content_Inner_Container helReg' style={{color:'red'}} key={i}>
                      
                    <p>
                      {
                        data.techDescript
                      }
                    </p>
                      <p>
                        {data.tagg}
                      </p>
                  </div>
                )
              })
            }
            {/* <div className='bspkTech_Tab_Tag_Container'>
              {
                slice.items.map((data, i) => {
                  return(
                    <div className='bspkTech_Tab_Tag helReg' key={i}>
                      <p>
                        <PrismicRichText field={data.tags} />
                      </p>
                    </div>
                  )
                })
              }
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}