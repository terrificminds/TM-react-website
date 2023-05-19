import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination';


/**
 * @typedef {import("@prismicio/client").Content.CarrerImgSliderSlice} CarrerImgSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrerImgSliderSlice>} CarrerImgSliderProps
 * @param { CarrerImgSliderProps }
 */
export default function CarrerImgSlider({ slice }){

  // data
  let title = `${slice.primary.title[0].text}`;
  let Terrific = `${slice.primary.colored_title_text[0].text}`;
  let Subtitle = <PrismicRichText field={slice.primary.subtitle} />

  return(
    <>
    <section className='carrImgSlid'>
      <div className='carrImgSlid_Container'>
        <div className='carrImgSlid_TitleContainer'>
          <div className='carrImgSlid_Title helMed'>
            <p>
              { title }&nbsp;<span className='TMorange'>{ Terrific }</span>
            </p>
          </div>
          <div className='carrImgSlid_Subtitle helReg'>
            <p>
              { Subtitle }
            </p>
          </div>
        </div>
        {/* imgSlider */}
      </div>
      <div className='carrImgSlid_ImgSlidContainer'>
        <Swiper style={{cursor:'grab',scrollSnapType:'x mandatory',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',scrollPadding:'0 24px', padding:'0 0 4em 0', "--swiper-pagination-color": "#FFFF",
        "--swiper-pagination-bullet-width": "12px", "--swiper-pagination-bullet-border-radius" : "0", "--swiper-pagination-bullet-size" : "3px",
        "--swiper-pagination-bullet-inactive-color" : '#FFF'
          }} spaceBetween={40}
                  speed={1200} // speed for easing [SwiperJs]
                  modules={[Pagination]}
                  pagination={{clickable: true}}
                  initialSlide={2}
                  slidesPerView={1.9}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>
          {
            slice.items.map((data, i) => {
              return(
                <SwiperSlide style={{display:'flex', alignItems:'center', justifyContent:'center'}} key={i}>
                    <div className='carrImgSlid_Img'>
                      <PrismicNextImage field={data.image} alt={data.image.alt} />
                    </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
    </>
  )
}