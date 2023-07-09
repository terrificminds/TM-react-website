import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import DesignItem from '../../components/DesignItem/designItem'
import DesignAccordion from '../../components/DesignAccordion/DesignAccordion'
import Button from '../../components/Button/button'
import DesignAccordionV2 from '../../components/DesignAccordion/DesignAccordionV2'


/**
 * @typedef {import("@prismicio/client").Content.DesignOverviewSlice} DesignOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DesignOverviewSlice>} DesignOverviewProps
 * @param { DesignOverviewProps }
 */


export default function DesignOverview({slice}){

  let arrObj = [{
    title: `${slice.items[0].title[0].text}`,
    accordTitleA:`${slice.items[0].subtitle_a[0].text}`,
    accordDescriptA: `${slice.items[0].description_a[0].text}`,
    accordTitleB:`${slice.items[0].subtitle_b[0].text}`,
    accordDescriptB:`${slice.items[0].description_b[0].text}`,
    accordTitleC:`${slice.items[0].subtitle_c[0].text}`,
    accordDescriptC:`${slice.items[0].description_c[0].text}`,
    background: 'linear-gradient(90deg, #FF7438 -5.5%, #FFA40A 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
  },
  {
    title: `${slice.items[1].title[0].text}`,
    accordTitleA:`${slice.items[1].subtitle_a[0].text}`,
    accordDescriptA: `${slice.items[1].description_a[0].text}`,
    accordTitleB:`${slice.items[1].subtitle_b[0].text}`,
    accordDescriptB:`${slice.items[1].description_b[0].text}`,
    accordTitleC:`${slice.items[1].subtitle_c[0].text}`,
    accordDescriptC:`${slice.items[1].description_c[0].text}`,    
    background: 'linear-gradient(90deg, #8642F8 -5.5%, #B436F3 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
  },
  {
    title: `${slice.items[2].title[0].text}`,
    accordTitleA:`${slice.items[2].subtitle_a[0].text}`,
    accordDescriptA: `${slice.items[2].description_a[0].text}`,
    accordTitleB:`${slice.items[2].subtitle_b[0].text}`,
    accordDescriptB:`${slice.items[2].description_b[0].text}`,
    accordTitleC:`${slice.items[2].subtitle_c[0].text}`,
    accordDescriptC:`${slice.items[2].description_c[0].text}`,    
    background: 'linear-gradient(90deg, #00EDB0 -5.5%, #00B0D6 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
  },
  {
    title: `${slice.items[3].title[0].text}`,
    accordTitleA:`${slice.items[3].subtitle_a[0].text}`,
    accordDescriptA: `${slice.items[3].description_a[0].text}`,
    accordTitleB:`${slice.items[3].subtitle_b[0].text}`,
    accordDescriptB:`${slice.items[3].description_b[0].text}`,
    accordTitleC:`${slice.items[3].subtitle_c[0].text}`,
    accordDescriptC:`${slice.items[3].description_c[0].text}`,    
    background: 'linear-gradient(90deg, #FF636E -5.5%, #FD6030 107.25%)',
    backgroundClip: 'text',
    webKitBackgroundClip: 'text',
    textFillColor: 'transparent',
    webKitTextFillColor: 'transparent',
  },
  ]


  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    
    setToggleState(i)
  }


  let title = <PrismicRichText field={slice.primary.title} />

  return(
    <>
    <section className='dsgnOvw' style={{overflow:'hidden'}}>
      <div className='dgnOvw_Container' style={{position:'relative'}}>
        <div className={
          toggleState == 0 ? 'dsgnOvw dsgnOvwBgA': 
          toggleState == 1 ? 'dsgnOvw dsgnOvwBgB':
          toggleState == 2 ? 'dsgnOvw dsgnOvwBgC':
          toggleState == 3 ? 'dsgnOvw dsgnOvwBgD':
          null
        }
        style={{position:'absolute', top:'0', left:'50%', transform:'translateX(-50%)', height:'50%', width:'50%', zIndex:'1'}} />
        <div className='dsgnOvw_Title helMed'>
          <p  style={{zIndex:'100'}}>
            { title }
          </p>
        </div>
        <div className='dsgnOvw_Content' 
          style={{display:'flex'}}>
          <div className='dsgnOvw_ContentA'>
            {
              slice.items.map((data, i) => {

                let index = <PrismicRichText field={data.index} />
                let ItemTitle = <PrismicRichText field={data.title} />

                return(
                  <div key={i} className='dsgnOvw_ContentA_Item' 
                      onClick={() => toggleTab(i)}
                      style={{color: toggleState == i ? 'rgba(255, 255, 255, 1)':'rgba(255, 255, 255, 0.4)'}}>
                    <div className='dsgnOvw_ContentA_Item_Text helMed'>
                      <p style={{display:'flex', zIndex:'100'}}>
                        <sup className='helReg'>{ index }</sup>{ ItemTitle }
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='dsgnOvw_ContentB' style={{zIndex:'100'}}>
            <div>
              {
                slice.items.map((data, i) => {

                  let subtitleA = <PrismicRichText field={data.subtitle_a} />
                  let descriptA = <PrismicRichText field={data.description_a} />

                  let subTitleB = <PrismicRichText field={data.subtitle_b} />
                  let descriptB = <PrismicRichText field={data.description_b} />

                  let subTitleC = <PrismicRichText field={data.subtitle_c} />
                  let descriptC = <PrismicRichText field={data.description_c} />


                  return(
                    <div className='dsgnOvw_ContentB_Item helReg' style={{display: toggleState == i ? 'block':'none'}} key={i}>
                      <div className='dsgnOvw_ContentB_ItemA_TextContainer'>
                        <div className='dsgnOvw_ContentB_ItemA_Subtitle'>
                          <p>
                            { subtitleA }
                          </p>
                        </div>
                        <div className='dsgnOvw_ContentB_ItemA_Description'>
                          <p>
                            { descriptA }
                          </p>
                        </div>
                      </div>
                      <div className='dsgnOvw_ContentB_ItemA_TextContainer'>
                        <div className='dsgnOvw_ContentB_ItemA_Subtitle'>
                          <p>
                            { subTitleB }
                          </p>
                        </div>
                        <div className='dsgnOvw_ContentB_ItemA_Description'>
                          <p>
                            { descriptB }
                          </p>
                        </div>
                      </div>
                      <div className='dsgnOvw_ContentB_ItemA_TextContainer'>
                        <div className='dsgnOvw_ContentB_ItemA_Subtitle'>
                          <p>
                            { subTitleC }
                          </p>
                        </div>
                        <div className='dsgnOvw_ContentB_ItemA_Description'>
                          <p>
                            { descriptC }
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Component */}
      <div className='sectionB'>
            <div className='dsgnWrapB'>
              {
              arrObj.map((obj, i) => {
                return(
                  <div key={i}>
                    <DesignAccordionV2  obj={obj} i={i}
                      style={{background:obj.background, backgroundClip: obj.backgroundClip, 
                        textFillColor: obj.textFillColor, WebkitTextFillColor: obj.webKitTextFillColor, 
                        WebkitBackgroundClip: obj.webKitBackgroundClip }} 
                      />
                  </div>
                )
              })
              }
            </div>
           </div>
      {/*  */}
    </section>
    </>
  )
}