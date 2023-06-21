/* eslint-disable @next/next/no-img-element */
import Title from '../../components/Title/title'
import React, { useState, useRef, useEffect, use } from 'react'


/**
 * @typedef {import("@prismicio/client").Content.NewsLetterSlice} NewsLetterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsLetterSlice>} NewsLetterProps
 * @param { NewsLetterProps }
 */
export default function NewsLetter() {

  const moveRef = useRef(null);

  
  useEffect(() => {

    // const moveThing = moveRef.current;
    // const moveThingChild = moveThing.children;
    // const moveThingChildArray = Array.from(moveThingChild);

    // let index = 0;
    // let moveThingChildArrayLength = moveThingChildArray.length;

    // const interval = setInterval(() => {
    //   index++;
    //   moveThingChildArray.style.transform = 'translate(0, -6.5%) rotate(-30deg)';
    //   moveThingChildArray.style.transition = 'all 2s ease';
    //   moveThingChildArray.style.zIndex = '10000';
    //   moveThingChildArray.style.opacity = '1';

    //   if(index == moveThingChildArrayLength - 1){
    //     index = -1;
    //   }

    //   moveThingChildArray.style.transform = 'translate(140%, -6.5%) rotate(-30deg)';
    //   moveThingChildArray.style.transition = 'all 2s ease';
    //   moveThingChildArray.style.zIndex = '10000';
    //   moveThingChildArray.style.opacity = '0';

    // }, 5000);

    // return () => clearInterval(interval);

    const letterContainer = document.querySelector('.thingMove')
    const background = document.querySelector('.interAction');

    // setInterval(() => {
    //   letterContainer.style.transform = 'translate(140%, -6.5%) rotate(-30deg)';
    //   background.style.background = '#6814EC';

    //   setTimeout(() => {
    //     background.style.background = 'red';
    //     letterContainer.style.transform = 'translate(140%, 12vh) rotate(-30deg)';
    //   },1500)
      
    // }, 4000)

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
            <div className='interaction'>

              <div className='interactionContent_Container' style={{color:'#FFF'}}>
                <div className='interactionTitle helBold'>
                  <h3>July 2022</h3>
                </div>
                <div className='interaction_CTA helReg'>
                  <p>Download</p>
                </div>
              </div>

              <div className='interaction_Container' ref={moveRef}>
                <div style={{width:'fit-content', position:'relative', transform:'translate(0%,0%)', transition:'all 0.3s ease'}}>
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