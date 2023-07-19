/* eslint-disable @next/next/no-img-element */
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Title from '../../components/Title/title'
import React, { useState, useRef, useEffect, use } from 'react'
import { PrismicNextImage } from '@prismicio/next'


/**
 * @typedef {import("@prismicio/client").Content.NewsLetterSlice} NewsLetterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsLetterSlice>} NewsLetterProps
 * @param { NewsLetterProps }
 */
export default function NewsLetter({slice}) {

  const [ activeBorder, setActiveBorder ] = useState(false)

  const handleBlur = () => {
    setActiveBorder(false)
  }

  const handleFocus = () => {
    setActiveBorder(true)
  }

  const AnimateRef = useRef();
  const AnimBGRef = useRef();

  const TextRef = useRef();


  
  useEffect(() => {

    let interval = 10300;

    let getText = document.querySelectorAll('.interactionTitle');
    let getLink = document.querySelectorAll('.interaction_Link');



    setInterval(() => {
      AnimateRef.current.style.transform="translate(0%,0%)"
      AnimBGRef.current.style.background = "#6814EC"
      
      getText[0].style.opacity = '1'
      getText[1].style.opacity = '0'
      getText[2].style.opacity = '0'
      getText[3].style.opacity = '0'

      getLink[0].style.display = 'block';
      getLink[1].style.display = 'none';
      getLink[2].style.display = 'none';
      getLink[3].style.display = 'none';

      setTimeout(() => {
        AnimateRef.current.style.transform="translate(0%,-30%)"
        AnimBGRef.current.style.background = "#00B0D6"

        getText[0].style.opacity = '0';
        getText[1].style.opacity = '1';
        getText[2].style.opacity = '0';
        getText[3].style.opacity = '0';

        getLink[0].style.display = 'none';
        getLink[1].style.display = 'block';
        getLink[2].style.display = 'none';
        getLink[3].style.display = 'none';

      }, 3000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -26%)"
      }, 3350)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -56%)"
        AnimBGRef.current.style.background = "#FFA40A"

        getText[0].style.opacity = '0';
        getText[1].style.opacity = '0';
        getText[2].style.opacity = '1';
        getText[3].style.opacity = '0';

        getLink[0].style.display = 'none';
        getLink[1].style.display = 'none';
        getLink[2].style.display = 'block';
        getLink[3].style.display = 'none';

      },6000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -53%)"
      }, 6350)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -83%)"
        AnimBGRef.current.style.background = "#6814EC"
        getText[0].style.opacity = '0';
        getText[1].style.opacity = '0';
        getText[2].style.opacity = '0';
        getText[3].style.opacity = '1';

        getLink[0].style.display = 'none';
        getLink[1].style.display = 'none';
        getLink[2].style.display = 'none';
        getLink[3].style.display = 'block';

      }, 9000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -80%)"
      }, 9350)
    }, interval)



  }, [])

  let NewsLetterText = [
    {
      text: <PrismicRichText field={slice.primary.news_letter_img_set_a_month_year} />,
      link: `${slice.primary.news_letter_img_set_a_cta_link.url}` 
    },
    {
      text: <PrismicRichText field={slice.primary.news_letter_img_set_b_month_year} />,
      link: `${slice.primary.news_letter_img_set_b_cta_link.url}`
    },
    {
      text: <PrismicRichText field={slice.primary.news_letter_img_set_c_month_year} />,
      link: `${slice.primary.news_letter_img_set_c_cta_link.url}`
    },
    {
      text: <PrismicRichText field={slice.primary.news_letter_img_set_d_month_year} />,
      link: `${slice.primary.news_letter_img_set_d_cta_link.url}`
    },
  ]

  let NewsLetterImg = [
    {
      ImgLeft: <PrismicNextImage 
                style={{height:'100%', width:'100%', objectFit:'cover'}}
                field={slice.primary.news_letter_img_set_a_left} alt='img' />,

      ImgRight: <PrismicNextImage 
                  style={{height:'100%', width:'100%', objectFit:'cover'}}
                  field={slice.primary.news_letter_img_set_a_right} alt='img' />
    },
    {
      ImgLeft: <PrismicNextImage 
                  style={{height:'100%', width:'100%', objectFit:'cover'}}
                  field={slice.primary.news_letter_img_set_b_left} alt='img' />,

      ImgRight: <PrismicNextImage 
                  style={{height:'100%', width:'100%', objectFit:'cover'}}
                  field={slice.primary.news_letter_img_set_b_right} alt='img' />
    },
    {
      ImgLeft: <PrismicNextImage 
                style={{height:'100%', width:'100%', objectFit:'cover'}}
                field={slice.primary.news_letter_img_set_c_left} alt='img' />,

      ImgRight: <PrismicNextImage 
                  style={{height:'100%', width:'100%', objectFit:'cover'}}
                  field={slice.primary.news_letter_img_set_c_right} alt='img' />
    },
    {
      ImgLeft: <PrismicNextImage 
                style={{height:'100%', width:'100%', objectFit:'cover'}}
                field={slice.primary.news_letter_img_set_d_left} alt='img' />,

      ImgRight: <PrismicNextImage 
                  style={{height:'100%', width:'100%', objectFit:'cover'}}
                  field={slice.primary.news_letter_img_set_d_right} alt='img' />
    },
  ]
 
  

  return(
    <section className='newsL' style={{background:'#FFF'}}>
      <div className='newsLetterContainer'>
         <Title titleA='Terrific Times' />
         <div className='newsLetterWrap'>
            <div className='newsLetter'>
              <div>
                <div className='newsLetterTitle helMed'>
                  <h2>
                    <PrismicRichText field={slice.primary.news_letter_title} />
                  </h2>
                </div>
                <div className='nLDescription helReg'>
                  <p>
                    <PrismicRichText field={slice.primary.news_letter_description} />
                  </p>
                </div>
                {/* Mail comes here */}
                <div onFocus={handleFocus} onBlur={handleBlur} className='newsLetterInput'>
                  <input 
                    style={{border: activeBorder ? '1px #FF5D1D solid':'1px #818181 solid', borderRight:'none'}}
                    className='helReg' 
                    type='email' 
                    placeholder='Enter your mail' />
                  <button className='btn darkBtn bgBtn helReg'>Subscribe</button>
                </div>
              </div>
            </div>
            <div ref={AnimBGRef} className='interaction' style={{}}>

              <div className='interactionContent_Container' style={{color:'#FFF', position:'relative'}}>
                {
                  NewsLetterText.map((data, i) => {

                    console.log(data, "Hi")

                    return(
                      <div style={{position:'absolute'}} key={i}>
                        <div ref={TextRef} style={{opacity: i == 0 ? '1':'0', transition:'all 0.3s ease'}} className='interactionTitle helBold'>
                          <h3 >{data.text}</h3>
                        </div>
                        <PrismicLink style={{display: i == 0 ? 'block':'none'}} href={data.link} className='interaction_Link'>
                          <div className='interaction_CTA helReg'>
                            <p>Download</p>
                          </div>
                        </PrismicLink>
                    </div>
                    )
                  })
                }
              </div>

              <div className='interaction_Container'>
                <div ref={AnimateRef} className='interaction_Move' style={{width:'fit-content', position:'relative', transition:'all 0.3s ease'}}>
                  {
                    NewsLetterImg.map((data, i) => {
                      return(
                        <div key={i} className='newsLetter_Item_Container'>{/* space these divs */}
                          <div className='newsLetter_Item'>
                            { data.ImgLeft }
                          </div>
                          <div className='newsLetter_Item'>
                            { data.ImgRight }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
         </div>
      </div>
    </section>
  )
}