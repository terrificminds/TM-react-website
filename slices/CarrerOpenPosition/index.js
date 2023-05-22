/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CarrerOpenPositionSlice} CarrerOpenPositionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrerOpenPositionSlice>} CarrerOpenPositionProps
 * @param { CarrerOpenPositionProps }
 */
export default function CarrerOpenPosition({ slice }){



  const [activeTab, setActiveTab] = useState('technology'); // default state displays "technology" tab


  const handleClick = (tabName) => { // handle Click Filter
    setActiveTab(tabName)
  }

  const FilteredData = slice.items.filter((item) => item.uid[0].text === activeTab); // Filtered Data

    // Data
    let Title = "Open Positions"
    let CategoryA = <PrismicRichText field={slice.primary.category_title_a} />
    let CategoryB = <PrismicRichText field={slice.primary.category_title_b} />
    let CategoryC = <PrismicRichText field={slice.primary.category_title_c} />


  return(
    <div className='carrPos'>
      <div className='carrPos_Container'>
        <div className='carrPos_Title helMed'>
          <p>
            { Title } 
          </p>
        </div>
        {/* Filter Data Container */}
        <div className='carrPos_DataContainer'>
          <div className='carrPos_TabContainer'> 
            <div className='carrPos_TabOuterWrap'>
              <div className='carrPos_ProgressBar'>
                <div className='carrPos_TabWrapper'> {/* CSS Progress bar */}
                <div 
                  style={
                        {
                        position:'absolute', 
                        left: activeTab == "creative" ? '50%': 
                          activeTab == "technology" ? '0%' : 
                          activeTab == "management" ? '100%': '0', 
                        transform: activeTab == "creative" ? 'translateX(-50%)' :
                          activeTab == "technology" ? 'translateX(0%)': 
                          activeTab == "management" ? 'translateX(-100%)': null, 
                        bottom:'-50%', width:'26%', background:'red', height:'1px',
                        zIndex:'100', transition:'all 0.3s ease', border:'1.4px black solid'
                      }
                    }
                  />
                  {/* {
                    TabHead.map((data, i) => {

                      return(
                        <div className='carrPos_Tab' key={i}>
                          <div className='carrPos_TabTitle' onClick={() => handleClick(data.Tab.props.field[0].text, console.log("data", i))}>
                            <p>{data.Tab.props.field[0].text}</p>
                          </div>
                        </div>
                      )
                    })
                  } */}
                  <div className={ activeTab == "technology" ? 'carrPos_Tab Active helReg' : 'carrPos_Tab helReg'} onClick={() => handleClick("technology")}>
                    <p>
                      { CategoryA }
                    </p>
                  </div>
                  <div className={ activeTab == "creative" ? 'carrPos_Tab Active helReg' : 'carrPos_Tab helReg'}  onClick={() => handleClick("creative")}>
                    <p>
                      { CategoryB }
                    </p>
                  </div>
                  <div className={ activeTab == "management" ? 'carrPos_Tab Active helReg' : 'carrPos_Tab helReg'} onClick={() => handleClick("management")}>
                    <p>
                      { CategoryC }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='carrPos_TabContentContainer'>
              <div className='carrPos_TabContent'>
                {
                  FilteredData.map((item) => {

                    // data
                    let PosTitle = <PrismicRichText field={item.position_title} />;

                    let TagA = <PrismicRichText field={item.tag_a} />;
                    let TagB = <PrismicRichText field={item.tag_b} />;
                    let TagC = <PrismicRichText field={item.tag_c} />;
                    let TagD = <PrismicRichText field={item.tag_d} />;

                    console.log("data", item.cta_link.uid)



                    return(
                      <div className='carrPos_TabContentItem' key={item.uid}>
                        <div className='carrPos_TabContentItemContainer'>
                          <div className='carrPos_TabContentText'>
                            <div className='carrPos_TabContentTitle helMed'>
                              <p style={{color:"#000"}}>
                                { PosTitle }
                              </p>
                            </div>
                            <div className='carrPos_TabContent_TagContainer'>
                              <div className='carrPos_TabContent_Tag helReg' 
                                style={{display: item.tag_a[0].text === "" ? 'none' : ''}}>
                                <p>
                                  { TagA }
                                </p>
                              </div>
                              <div className='carrPos_TabContent_Tag helReg' 
                                style={{display: item.tag_b[0].text === "" ? 'none' : ''}}>
                                <p>
                                  { TagB }
                                </p>                              
                              </div>
                              <div className='carrPos_TabContent_Tag helReg' 
                                style={{display: item.tag_c[0].text === "" ? 'none' : ''}}>
                                <p>
                                  { TagC }
                                </p>
                              </div>
                              <div className='carrPos_TabContent_Tag helReg' 
                                style={{display: item.tag_d[0].text === "" ? 'none' : ''}}>
                                <p>
                                  { TagD }
                                </p>                              
                              </div>
                            </div>
                          </div>
                          <div onClick={() => window.location.href = `/carrers/${item.cta_link.uid}`} className='carrPos_TabContent_CTA helMed'>
                            <p>
                              Learn more<span style={{marginLeft:'0.4em'}}><img src='/Carrers/posArrow.svg' alt='arrow' /></span>
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
      </div>
    </div>
  )
}