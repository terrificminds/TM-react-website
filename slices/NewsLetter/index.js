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

  // useEffect(() => {
   
  //    moveRef.current.style.transform = 'translate(-100%, -40%)  rotate(-30deg)';
  //    setTimeout(() => {
  //      moveRef.current.style.transform = 'translate(-96%, -39%)  rotate(-30deg)';
  //    }, 2001)
  //    setTimeout(() => {
  //      moveRef.current.style.transform = 'translate(-99%, -39%)  rotate(-30deg)';
  //    }, 3002) 

  // }, [])

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
    }
  ]

  return(
    <section className='newsL' style={{background:'#FFF'}}>
      <div className='newsLContainer'>
         <Title titleA='Terrific Times' />
         <div style={{display:'flex', margin:'2rem 0'}}>
            <div className='newsLetter'>
              <div>
                <div className='nLTitle helMed'><h2>Join our NewsLetter</h2></div>
                <div className='nLDescription helReg'><p>Lorem ipsum dolor sit amet consectetur. Libero eget convallis et non tellus eget. Cursus aenean dignissim enim </p></div>
                {/* Mail comes here */}
                <div className='newsLetterInput'>
                  <input className='helReg' type='email' placeholder='Enter your mail' />
                  <button className='btn darkBtn bgBtn helReg'>Subscribe</button>
                </div>
              </div>
            </div>
            <div className='interAction' style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'flex-start', width:'60%', overflow:'hidden', padding:'8rem 0',zIndex:'20000', background:'#6814EC'}}>

              <div style={{color:'#FFF', padding:'2rem'}}>
                <div className='interActionTitle helBold'><h3>July 2022</h3></div>
                <div className='helReg' style={{fontSize:'1rem', padding:'1rem 0'}}><p>Download</p></div>
              </div>

              <div className='thingMove' ref={moveRef} style={{transform:'translate(140%, -6.5%) rotate(-30deg)', transition: 'all 2s ease', position:'absolute', top:'0', left:'50%'}}>
                <div style={{width:'fit-content'}}>

                  {
                    data.map((data, i) => {
                      return(
                        <div  key={i} className='moveThing' style={{margin:'0 0 10rem 0', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', transition:'all 2s ease'}}>{/* space these divs */}
                          <div style={{width:'11rem', height:'46.7rem', border:'1px black solid'}}><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.imgA} alt='alt' /></div>
                          <div style={{width:'11rem', height:'46.7rem', transform:'translate(20px, 105px)'}}><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.imgB} alt='alt' /></div>
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