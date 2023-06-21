/* eslint-disable @next/next/no-img-element */
import Title from '../../components/Title/title'
import React, { useState, useRef, useEffect, use } from 'react'


/**
 * @typedef {import("@prismicio/client").Content.NewsLetterSlice} NewsLetterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsLetterSlice>} NewsLetterProps
 * @param { NewsLetterProps }
 */
export default function NewsLetter() {

  const AnimateRef = useRef();
  const AnimBGRef = useRef();

  const TextRef = useRef();

  console.log(TextRef,"TEXTTT")

  let DUMMYTEXT = "July 2019"
  
  useEffect(() => {

    let letterContainer = document.querySelector('.thingMove');
    let background = document.querySelector('.interAction');
    let interval = 8000;

    setInterval(() => {
      AnimateRef.current.style.transform="translate(0%,0%)"
      AnimBGRef.current.style.background = "#6814EC"
      setTimeout(() => {
        AnimateRef.current.style.transform="translate(0%,-30%)"
        AnimBGRef.current.style.background = "#00B0D6"

      }, 3000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -26%)"
      }, 3350)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -56%)"
        AnimBGRef.current.style.background = "#FFA40A"
      },6000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -53%)"
      }, 6350)
    }, interval)



  }, [])


  let data = [
    {
      imgA:' slideA1.svg',
      imgB: 'slideA2.svg',
    },
    {
      imgA:' slideB1.svg',
      imgB: 'slideB2.svg',
    },
    {
      imgA:' slideC1.svg',
      imgB: 'slideC2.svg',
    },
    {
      imgA:' slideB1.svg',
      imgB: 'slideB2.svg',
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
                  <h2>Join our NewsLetter</h2>
                </div>
                <div className='nLDescription helReg'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Libero eget convallis et non tellus eget. Cursus aenean dignissim enim 
                  </p>
                </div>
                {/* Mail comes here */}
                <div className='newsLetterInput'>
                  <input className='helReg' type='email' placeholder='Enter your mail' />
                  <button className='btn darkBtn bgBtn helReg'>Subscribe</button>
                </div>
              </div>
            </div>
            <div ref={AnimBGRef} className='interaction' style={{}}>

              <div className='interactionContent_Container' style={{color:'#FFF'}}>
                <div ref={TextRef} className='interactionTitle helBold'>
                  <h3 >{ DUMMYTEXT }</h3>
                </div>
                <div className='interaction_CTA helReg'>
                  <p>Download</p>
                </div>
              </div>

              <div className='interaction_Container'>
                <div ref={AnimateRef} className='interaction_Move' style={{width:'fit-content', position:'relative', transition:'all 0.3s ease'}}>
                  {
                    data.map((data, i) => {
                      return(
                        <div key={i} className='newsLetter_Item_Container'>{/* space these divs */}
                          <div className='newsLetter_Item'><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.imgA} alt='alt' /></div>
                          <div className='newsLetter_Item'><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.imgB} alt='alt' /></div>
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