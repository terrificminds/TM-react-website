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

let arrObj = [{
  title: 'Web Design',
  accordTitleA:'Dolor sit amet',
  accordDescriptA:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleB:'Dolor sit amet',
  accordDescriptB:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleC:'Dolor sit amet',
  accordDescriptC:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  background: 'linear-gradient(90deg, #FF7438 -5.5%, #FFA40A 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testA.gif'
},
{
  title: 'Branding',
  accordTitleA:'Dolor sit amet',
  accordDescriptA:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleB:'Dolor sit amet',
  accordDescriptB:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleC:'Dolor sit amet',
  accordDescriptC:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  background: 'linear-gradient(90deg, #8642F8 -5.5%, #B436F3 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testB.gif'
},
{
  title: 'UI/UX Design',
  accordTitleA:'Dolor sit amet',
  accordDescriptA:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleB:'Dolor sit amet',
  accordDescriptB:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleC:'Dolor sit amet',
  accordDescriptC:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  background: 'linear-gradient(90deg, #00EDB0 -5.5%, #00B0D6 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testC.gif'
},
{
  title: 'Motion Design',
  accordTitleA:'Dolor sit amet',
  accordDescriptA:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleB:'Dolor sit amet',
  accordDescriptB:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  accordTitleC:'Dolor sit amet',
  accordDescriptC:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  background: 'linear-gradient(90deg, #FF636E -5.5%, #FD6030 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testD.gif'
},
]

export default function DesignOverview({slice}){

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    
    setToggleState(i)
  }


  let title = <PrismicRichText field={slice.primary.title} />

  return(
    <>
    <section 
      className={
                toggleState == 0 ? 'dsgnOvw dsgnOvwBgA': 
                toggleState == 1 ? 'dsgnOvw dsgnOvwBgB':
                toggleState == 2 ? 'dsgnOvw dsgnOvwBgC':
                toggleState == 3 ? 'dsgnOvw dsgnOvwBgD':
                null}>
      <div className='dgnOvw_Container'>
        <div className='dsgnOvw_Title helMed'>
          <p>
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
                      <p style={{display:'flex'}}>
                        <sup className='helReg'>{ index }</sup>{ ItemTitle }
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='dsgnOvw_ContentB'>
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

      {/*  */}
      <div className='sectionB'>
            {/* <div className='dsgnWrap'>
              {
                arrObj.map((obj, i) => {
                  return(
                    <DesignItem 
                    style={{background:obj.background, backgroundClip: obj.backgroundClip, 
                            textFillColor: obj.textFillColor, WebkitTextFillColor: obj.webKitTextFillColor, 
                            WebkitBackgroundClip: obj.webKitBackgroundClip }} obj={obj} key={i} 
                  />
                    )
                })
              }
            </div> */}
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