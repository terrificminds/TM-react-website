/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleC from '../../components/TitleC/TitleC'
import Tab from '../../components/StoryTab/tabs';
import TabContent from '../../components/StoryTab/tabContent';
import Button from '../../components/Button/button';

/**
 * @typedef {import("@prismicio/client").Content.SuccessStoriesSlice} SuccessStoriesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SuccessStoriesSlice>} SuccessStoriesProps
 * @param { SuccessStoriesProps }
 */
export default function SuccessStories({slice}){

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    console.log("i",i)

    setToggleState(i);
  }


  return(
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
            <div className='contentTab' style={{}}>
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
            {/* <Button className='storBtnMob' /> */}
          </div>
        </div>
      </div>
    </section>
  )
}