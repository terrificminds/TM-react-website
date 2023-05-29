/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.EcomSwiperInteractionSlice} EcomSwiperInteractionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomSwiperInteractionSlice>} EcomSwiperInteractionProps
 * @param { EcomSwiperInteractionProps }
 */
export default function EcomSwiperInteraction({slice}){

  const [toggleState, setToggleState] = useState(0);

  const activeTab = (i) => {

    setToggleState(i)
  }

  let title = "We partner great design and development with exceptional quality control that goes beyond "
  let colorText = "the four edges of a screen"

  // Swiper Interaction Animation

  return(
    <>
    <section className='ecomSwip'>
      <div className='ecomSwip_Container'>
        <div className='ecomSwip_Title_Container'>
          <div className='ecomSwip_Title helMed'>
            <p>
              { title }<br /><span className='TMorange'>{ colorText }</span>
            </p>
          </div>
        </div>

        {/* swiper-interaction */}
        <div className='ecomSwip_SwipContainer'>
          <div style={{display:'flex'}}>
            {/* A */}
            <div className='ecomSwip_SwipIndex_Container'>
              {
                slice.items.map((data, i) => {
                  return(
                    <div onClick={() => activeTab(i)} className='ecomSwip_SwipIndex_Item' style={{color:'#000', cursor:'pointer'}} key={i}>
                      <div className='ecomSwip_SwipIndex helMed' >
                        <p style={{color: toggleState == i ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.02)'}}>
                          <PrismicRichText field={data.index} />
                        </p>
                        <div className='ecomSwip_SwipIndex_Title helMed' style={{color: toggleState == i ? '#000':'rgba(0, 0, 0, 0.25)'}}>
                          <p>
                            <PrismicRichText field={data.index_title} />
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* B */}
            <div className='ecomSwip_SwipContent_Container'>
              {
                slice.items.map((data, i) => {
                  return(
                    <div className='ecomSwip_SwipContent_Item_Container' 
                      style={{transform: toggleState == 0 ? `translateY(0%)`: 
                                         toggleState == 1 ? `translateY(-129%)` :
                                         toggleState == 2 ? `translateY(-255.5%)`: null, 
                              transition:'all 1s ease'}} 
                              key={i}>
                      <div className='ecomSwip_SwipContent_Item'>
                        <div className='ecomSwip_SwipContent_Img_Container'>
                          <div className='ecomSwip_SwipContent_Img'>
                            <PrismicNextImage field={data.image} alt={data.image.alt} />
                          </div>
                        </div>
                        <div className='ecomSwip_SwipContent_Text_MainContainer'>
                          {/* A */}
                          <div className='ecomSwip_SwipContent_TextContainer' style={{color:'#000'}}>
                            <div className='ecomSwip_SwipContent_Subtitle helMed'>
                              <p>
                                <PrismicRichText field={data.subtitle_a} />
                              </p>
                            </div>
                            <div className='ecomSwip_SwipContent_Description helReg'>
                              <p>
                                <PrismicRichText field={data.description_a} />
                              </p>
                            </div>
                          </div>
                          {/* B */}
                          <div className='ecomSwip_SwipContent_TextContainer'  style={{color:'#000'}}>
                            <div className='ecomSwip_SwipContent_Subtitle helMed'>
                              <p>
                                <PrismicRichText field={data.subtitle_b} />
                              </p>
                            </div>
                            <div className='ecomSwip_SwipContent_Description helReg'>
                              <p>
                                <PrismicRichText field={data.description_b} />
                              </p>
                            </div>
                          </div>
                          {/* C */}
                          <div className='ecomSwip_SwipContent_TextContainer' style={{color:'#000'}}>
                            <div className='ecomSwip_SwipContent_Subtitle helMed'>
                              <p>
                                <PrismicRichText field={data.subtitle_c} />
                              </p>
                            </div>
                            <div className='ecomSwip_SwipContent_Description helReg'>
                              <p>
                                <PrismicRichText field={data.description_c}  />
                              </p>
                            </div>
                          </div>
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