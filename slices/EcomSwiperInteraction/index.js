/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';

/**
 * @typedef {import("@prismicio/client").Content.EcomSwiperInteractionSlice} EcomSwiperInteractionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomSwiperInteractionSlice>} EcomSwiperInteractionProps
 * @param { EcomSwiperInteractionProps }
 */
export default function EcomSwiperInteraction({slice}){

  const [toggleState, setToggleState] = useState(0);


  const activeTab = (i) => {

      if(i==0) {
        swiperRef.current.swiper.slideTo(0, 800)
      } else if(i == 1) {
        swiperRef.current.swiper.slideTo(1, 800)
      } else if (i == 2) {
        swiperRef.current.swiper.slideTo(2, 800)
      } 

    setToggleState(i)
  }

  let title = "We partner great design and development with exceptional quality control that goes beyond "
  let colorText = "the four edges of a screen"

  // Swiper Interaction Animation

  const swiperRef = useRef();

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
        {/* swiper-interaction[Desktop] */}
        <div className='ecomSwip_SwipContainer ecomSwip_SwipContainer_Desktop'> 
          <div className='ecomSwip_SwipIndex_Container'>
            {
              slice.items.map((data, i) => {
                return(
                  <div onClick={() =>  activeTab(i)} 
                    className='ecomSwip_SwipIndex_Item' style={{color:'#000', cursor:'pointer'}} key={i}>
                    <div className='ecomSwip_SwipIndex helMed' >
                      <p style={{color: toggleState == i ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.02)'}}>
                        <PrismicRichText field={data.index} />
                      </p>
                      <div 
                        className='ecomSwip_SwipIndex_Title helMed' 
                        style={{color: toggleState == i ? '#000':'rgba(0, 0, 0, 0.25)'}}>
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
          <div style={{width:'80%', height:'100%'}}>
            <div className='ecomSwip_Height_Div'>
              <Swiper 
                slidesPerView={1} 
                // spaceBetween={500}
                ref={swiperRef}
                direction="vertical" 
                onSlideChange={(i) => console.log('slide change',i.activeIndex)}
                onSwiper={(i) => console.log(i, "hiiii")}
                style={{ height:'100%'}}>
                {
                  slice.items.map((data, i) => {
                    return(
                      <SwiperSlide style={{cursor:'grab', display:'flex', alignItems:'center', justifyContent:'center'}} key={i}>
                          <div className='ecomSwip_SwipContent_Item_Container' 
                            style={{height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}
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
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>

        {/* mobile-interaction */}
        <div className='ecomSwip_SwipContainer ecomSwip_SwipContainer_Mobile'>
          <div className='ecomSwip_SwipIndex_Container'>
            {
              slice.items.map((data, i) => {
                return(
                  <div key={i}>
                  <div onClick={() =>  setToggleState(i)} 
                    className='ecomSwip_SwipIndex_Item' style={{color:'#000', cursor:'pointer'}} key={i}>
                    <div className='ecomSwip_SwipIndex helMed' >
                      <p style={{color: toggleState == i ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.02)', position:'relative', width:'fit-content'}}>
                        <PrismicRichText field={data.index} />
                        <div className='ecomSwip_SwipIndex_Title helMed' style={{color: toggleState == i ? '#000':'rgba(0, 0, 0, 0.25)'}}>
                        <p>
                          <PrismicRichText field={data.index_title} />
                        </p>
                      </div>
                      </p>
                      
                    </div>
                    
                  </div>
                  {/*  */}
                  <div className='ecomSwip_SwipContent_Item_Container' 
                            style={{height: toggleState == i ? 'fit-content':'0', width:'100%', overflow:'hidden', transition:'all 0.3s ease'}}
                                    key={i}>
                            <div className='ecomSwip_SwipContent_Item' >
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
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
    </>
  )
}