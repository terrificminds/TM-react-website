/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleC from '../../components/TitleC/TitleC'
import Tab from '../../components/StoryTab/tabs';
import TabContent from '../../components/StoryTab/tabContent';

/**
 * @typedef {import("@prismicio/client").Content.SuccessStoriesSlice} SuccessStoriesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SuccessStoriesSlice>} SuccessStoriesProps
 * @param { SuccessStoriesProps }
 */
export default function SuccessStories({slice}){

  // let arrObj = [
  //   {
  //     tabSrc:'tabORTHO.svg',
  //     title:'Lean UX and easy navigation for a next-gen clear aligner’s website',
  //     description:'OrthoFX was looking for a partner agency to help realign itself to promote their doctor-driven clear aligner experience. By working to expand their Style-guide to fit the WCAG standards for accessibility, the new website is much easier to navigate and also beautifully encapsulates the founders’ vision and company ethos.',
  //     src: 'kitten2.jpg',
  //   },
  //   {
  //     tabSrc:'tabOJAR.svg',
  //     title:'Omani perfume brand’s custom designed Shopify website to sell its fusion of fragrances',
  //     description: 'Lorem ipsum dolor sit amet consectetur. Malesuada lobortis vitae aliquet dui nec congue interdum. In id sed sit eleifend integer morbi. Molestie scelerisque sem eget facilisi nam dui non fringilla quam. Erat nec feugiat mattis eget nunc viverra purus. Nullam velit quis viverra cursus mauris odio euismod sed. Sit duis nulla in nullam.',
  //     src: 'tabImgB.svg',
  //   },
  //   {
  //     tabSrc:'tabFOCO.svg',
  //     title: 'Lorem ipsum dolor sit amet consectetur. Commodo tincidunt.',
  //     description: 'Lorem ipsum dolor sit amet consectetur. Non lobortis sapien mattis justo. Molestie tincidunt sagittis maecenas id sociis nibh laoreet. Vulputate odio at accumsan sit sit nec tellus. Id in sed purus mauris nulla elementum. Purus bibendum ac morbi faucibus. Pellentesque ultricies nibh neque placerat. Bibendum aliquet aliquam et potenti.',
  //     src: 'tabImgC.svg',
  //   },
  //   {
  //     tabSrc:'tabMONKEY.svg',
  //     title: 'Lorem ipsum dolor sit amet consectetur. Commodo tincidunt.',
  //     description:'Lorem ipsum dolor sit amet consectetur. Non lobortis sapien mattis justo. Molestie tincidunt sagittis maecenas id sociis nibh laoreet. Vulputate odio at accumsan sit sit nec tellus. Id in sed purus mauris nulla elementum. Purus bibendum ac morbi faucibus. Pellentesque ultricies nibh neque placerat. Bibendum aliquet aliquam et potenti.',
  //     src:'tabImgA.svg'
  //   },
  //   {
  //     tabSrc:'tabSAINTS.svg',
  //     title: 'Lorem ipsum dolor sit amet consectetur. Commodo tincidunt.',
  //     description:'Lorem ipsum dolor sit amet consectetur. Non lobortis sapien mattis justo. Molestie tincidunt sagittis maecenas id sociis nibh laoreet. Vulputate odio at accumsan sit sit nec tellus. Id in sed purus mauris nulla elementum. Purus bibendum ac morbi faucibus. Pellentesque ultricies nibh neque placerat. Bibendum aliquet aliquam et potenti.',
  //     src:'tabImgC.svg'
  //   }
  // ]

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    console.log("i",i)
    setToggleState(i);
  }

  return(
    <section className='stor' style={{background:'#FFF'}}>
      {/* <pre>{JSON.stringify(slice,null,2)}</pre>*/}
      <div className='storContainer'>
        <TitleC style={{color:'#000', fontFamily:'helMed'}} title='Latest Success Stories' text='View all works' className='btn darkBtn helReg' />
        <div className='storB' style={{color:'#0E0E0E'}}>
          <div className='tabContainer'>
            <div className='blocTabs' style={{display:'flex', borderBottom:'#EC6835'}}>
            {
              slice.items.map((obj, i) => {
                return(
                      <Tab key={i} className={
                        toggleState === i ? 'tab active' : 'tab'
                      }  obj={obj} onClick={() => toggleTab(i)} />
                )
              })
            }
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
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}