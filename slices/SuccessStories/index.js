/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleC from '../../components/TitleC/TitleC'
import Tab from '../../components/StoryTab/tabs';
import TabContent from '../../components/StoryTab/tabContent';
import Button from '../../components/Button/button';
import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';

/**
 * @typedef {import("@prismicio/client").Content.SuccessStoriesSlice} SuccessStoriesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SuccessStoriesSlice>} SuccessStoriesProps
 * @param { SuccessStoriesProps }
 */
export default function SuccessStories({slice}){

  const [toggleState, setToggleState] = useState(0);
  const slideRef = useRef();

  const toggleTab = (i) => {

    if(i === 0)  {
      slideRef.current.swiper.slideTo(0, 500)
    } else if(i === 1) {
      slideRef.current.swiper.slideTo(0, 500)
    } else if (i === 2) {
      slideRef.current.swiper.slideTo(1, 500)
    } else if (i === 3) {
      slideRef.current.swiper.slideTo(2, 500)
    } else if(i === 4) {
      slideRef.current.swiper.slideTo(3, 500)
    }

    setToggleState(i);
  }


  return(
    // <></>
     <section className='stor' style={{background:'#FFF'}}>
       <div className='storContainer'>
         <TitleC style={{color:'#000', fontFamily:'helMed'}} 
           title='Latest Success Stories' text='View all works' className='btn darkBtn helReg' />
         <div className='storB' style={{color:'#0E0E0E'}}>
           <div className='tabContainer'>
             <div className='blocTabs' style={{borderBottom:'#EC6835', padding:'1rem 0'}}>
              {
                slice.items.map((obj, i) => {
                  return(
                    <Tab  
                    key={i} className={
                      toggleState === i ? 'tab active' : 'tab'
                    }  obj={obj} onClick={() => toggleTab(i)} />
                  )
                })
              }
             </div>
             {/* swiper */}
             {/* <div style={{borderBottom:'#EC6835', padding:'1rem 0'}}> */}
              {/* <Swiper slidesPerView={1} className='blocTabs mobTabs'>
                {
                  slice.items.map((obj, i) => {
                    return(
                      <SwiperSlide key={i}>
                        <Tab  
                          key={i} className={
                          toggleState === i ? 'tab active' : 'tab'
                        }  obj={obj} onClick={() => toggleTab(i)} />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper> */}
             {/* </div> */}
             <div className='blocTabs mobTabs'>
                <Swiper ref={slideRef} onSlideChange={(i) => console.log('slide change',i.activeIndex)} slidesPerView={2.4}>
                  {
                    slice.items.map((obj, i) => {
                      return(
                        <SwiperSlide key={i}>
                          <Tab  
                          key={i} className={
                          toggleState === i ? 'tab active' : 'tab'
                        }  obj={obj} onClick={() => toggleTab(i)} />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
             </div>
             <div className='contentTab'>
               {
                 slice.items.map((obj, i) => {
                   return(
                     <TabContent key={i} className={
                       toggleState === i ? 'content show' : ' content'
                     } obj={obj} />
                   )
                 })
               }
               <Button className='storBtnMob btn darkBtn helReg' text='View all works' />
             </div>
           </div>
         </div>
       </div>
     </section>
  )
}