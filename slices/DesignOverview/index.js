import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.DesignOverviewSlice} DesignOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DesignOverviewSlice>} DesignOverviewProps
 * @param { DesignOverviewProps }
 */
export default function DesignOverview({slice}){

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    
    setToggleState(i)
  }


  let title = <PrismicRichText field={slice.primary.title} />

  return(
    <>
    <section 
      className={
                toggleState == 0 ? 'dsgnOvw dsgnOvwBgA': 
                toggleState == 1 ? 'dsgnOvw dsgnOvwBgB':
                toggleState == 2 ? 'dsgnOvw dsgnOvwBgC':
                toggleState == 3 ? 'dsgnOvw dsgnOvwBgD':
                null}>
      <div className='dgnOvw_Container'>
        <div className='dsgnOvw_Title helMed'>
          <p>
            { title }
          </p>
        </div>
        <div className='dsgnOvw_Content' 
          style={{display:'flex'}}>
          <div className='dsgnOvw_ContentA'>
            {
              slice.items.map((data, i) => {

                let index = <PrismicRichText field={data.index} />
                let ItemTitle = <PrismicRichText field={data.title} />

                return(
                  <div key={i} className='dsgnOvw_ContentA_Item' 
                      onClick={() => toggleTab(i)}
                      style={{color: toggleState == i ? 'rgba(255, 255, 255, 1)':'rgba(255, 255, 255, 0.4)'}}>
                    <div className='dsgnOvw_ContentA_Item_Text helMed'>
                      <p style={{display:'flex'}}>
                        <sup className='helReg'>{ index }</sup>{ ItemTitle }
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='dsgnOvw_ContentB'>
            <div>
              {
                slice.items.map((data, i) => {

                  let subtitleA = <PrismicRichText field={data.subtitle_a} />
                  let descriptA = <PrismicRichText field={data.description_a} />

                  let subTitleB = <PrismicRichText field={data.subtitle_b} />
                  let descriptB = <PrismicRichText field={data.description_b} />

                  let subTitleC = <PrismicRichText field={data.subtitle_c} />
                  let descriptC = <PrismicRichText field={data.description_c} />


                  return(
                    <div className='dsgnOvw_ContentB_Item helReg' style={{display: toggleState == i ? 'block':'none'}} key={i}>
                      <div className='dsgnOvw_ContentB_ItemA_TextContainer'>
                        <div className='dsgnOvw_ContentB_ItemA_Subtitle'>
                          <p>
                            { subtitleA }
                          </p>
                        </div>
                        <div className='dsgnOvw_ContentB_ItemA_Description'>
                          <p>
                            { descriptA }
                          </p>
                        </div>
                      </div>
                      <div className='dsgnOvw_ContentB_ItemA_TextContainer'>
                        <div className='dsgnOvw_ContentB_ItemA_Subtitle'>
                          <p>
                            { subTitleB }
                          </p>
                        </div>
                        <div className='dsgnOvw_ContentB_ItemA_Description'>
                          <p>
                            { descriptB }
                          </p>
                        </div>
                      </div>
                      <div className='dsgnOvw_ContentB_ItemA_TextContainer'>
                        <div className='dsgnOvw_ContentB_ItemA_Subtitle'>
                          <p>
                            { subTitleC }
                          </p>
                        </div>
                        <div className='dsgnOvw_ContentB_ItemA_Description'>
                          <p>
                            { descriptC }
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}