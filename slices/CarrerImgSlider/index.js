/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
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

  const [ active, setActive ] = useState(false)
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // data
  let title = `${slice.primary.title[0].text}`;
  let Terrific = `${slice.primary.colored_title_text[0].text}`;
  let Subtitle = <PrismicRichText field={slice.primary.subtitle} />

  // Cloudinary Video
  let CloudObj = [
    {
      id:1,
      src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1688376978/Pappan_final_out_1_jwozvv.mp4',
      poster: '/Carrers/Poster/PapanPoster.png'
    },
    {
      id:2,
      src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1688376889/Terrific_Mind_1_yv76sz.mp4',
      poster: '/Carrers/Poster/TMPoster.png'
    },
    {
      id:3,
      src:'https://res.cloudinary.com/dbjkkttw8/video/upload/v1688376831/Womens_day_2022_1_jlhbrf.mp4',
      poster: '/Carrers/Poster/WomensDayPoster.png'
    }
  ]

  const swipNextRef = useRef()


  // let length = swipNextRef.current.children[0];

  // console.log(length,"testiafkasndjasbabtytytt")



  const SwipNext = ({children}) => {

    
   

    const testHook = () => {
      // swipNextRef.current.swiper.slideTo(i + 1) 
      // console.log(swipNextRef.current.swiper.activeIndex, "TESTTINGGG")
      
      let i = 0;

      var length = `${swipNextRef.current.attributes.length}`;

      

      swipNextRef.current.swiper.slideTo(i)
    

    }
    


    return(
      <div className='swiper-next' onMouseOver={testHook} style={{position:'absolute', right:'0', top:'0', height:'100%', width:'30%', zIndex:'900', background:'rgba(0,0,0,0.6)'}}>{children}</div>
    )
  }

  const VideoRef = useRef()

  const FullScreen = (videoId) => {

    const videoElement = document.getElementById(videoId);


    if (videoElement) {
      setFullscreenVideo(videoId);
      videoElement.play();

      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }
    }

  }



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
      <div className='carrImgSlid_ImgSlidContainer' style={{position:'relative'}}>
        <Swiper ref={swipNextRef} style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', padding:'0 0 4em 0', "--swiper-pagination-color": "#FFFF",
        "--swiper-pagination-bullet-width": "12px", "--swiper-pagination-bullet-border-radius" : "0", "--swiper-pagination-bullet-size" : "3px",
        "--swiper-pagination-bullet-inactive-color" : '#FFF'
          }} spaceBetween={0}
                  speed={1200} // speed for easing [SwiperJs]
                  modules={[Pagination]}
                  pagination={{clickable: true}}
                  // initialSlide={1}
                  slidesPerView={1.4}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>
          {
            CloudObj.map((data, i) => {
              return(
                <SwiperSlide style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'40em' }} key={i}>
                    <div onClick={() => FullScreen(data.id)} className='carrImgSlid_Img'>
                      {/* <PrismicNextImage field={data.image} alt={data.image.alt} /> */}
                      <video className='videoOverlay' id={data.id} ref={VideoRef} loop="true"  playsInline="true" poster={ data.poster } style={{ height:'100%', width: '100%', objectFit:'cover' }}>
                        <source src={data.src}  type="video/mp4" />
                      </video>
                      {/* PlaybtnCustom */}
                      <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', height:'100%', width:'100%', background:'rgba(0,0,0,0.02)'}}>
                        <div style={{position:'relative', height:'100%', width:'100%'}}>
                        <div className='PlayBtn'>
                        <div className='PlayBtn_Svg_Container'>
                          <img src='/Carrers/VectorPlay.svg' alt='' />
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
    </section>
    </>
  )
}