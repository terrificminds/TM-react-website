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
  title: 'Research',
  accordTitleA:'Using Interviews, Surveys, and Analysis',
  accordDescriptA:'Our design strategy is driven by the valuable insights we gather through interviews, surveys, and analysis. By engaging with users directly, we gain a deep understanding of their needs, preferences, and behaviors. This user-centric approach allows us to create designs that truly resonate with your audience.',
  accordTitleB:'Creating Intuitive and Meaningful Experiences',
  accordDescriptB:'Putting users first is at the core of our design philosophy. By prioritizing their needs, we aim to create intuitive and meaningful experiences. Through careful research and consideration, we ensure that our designs are user-friendly and seamlessly guide users towards their desired actions.',
  accordTitleC:'Crafting Attention-Grabbing Designs with Lasting Impact',
  accordDescriptC:'With our user-centered approach, we harness the power of design to capture attention and leave a lasting impact. By understanding the preferences and behaviors of your target audience, we can create visually appealing and engaging designs.',
  background: 'linear-gradient(90deg, #FF7438 -5.5%, #FFA40A 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testA.gif'
},
{
  title: 'Design',
  accordTitleA:'Our Approach to Captivating Designs',
  accordDescriptA:'At our core, we embrace innovation and unconventional thinking to create captivating designs that leave a lasting impression in the digital world. Our team of talented designers breaks free from the traditional boundaries and goes beyond the ordinary to deliver visually stunning interfaces that truly stand out.',
  accordTitleB:'Harmonizing Aesthetics and Functionality',
  accordDescriptB:'We believe that design should not only be visually appealing but also serve a purpose. Our team excels at harmonizing aesthetics and functionality to create interfaces that are both visually stunning and user-friendly. By combining the principles of good design with the practical needs of users, we ensure that our designs not only engage your audience but also enhance usability.',
  accordTitleC:'Engaging Experiences, Delightful Interactions',
  accordDescriptC:'We understand that a delightful user experience is crucial to the success of any digital product. We craft designs with the aim of building engaging experiences and delightful interactions. By meticulously considering every aspect of the user journey, we ensure that designs captivate audiences and leave a positive, lasting impression.',
  background: 'linear-gradient(90deg, #8642F8 -5.5%, #B436F3 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testB.gif'
  // src:'/Landing/Branding.mp4'
},
{
  title: 'Marketing',
  accordTitleA:'The Power of Creative Marketing Design',
  accordDescriptA:"In the realm of marketing design, we harness the power of creativity and strategic thinking to drive success for your brand. Our talented team specializes in crafting visually compelling designs that go beyond aesthetics to effectively communicate your brand's message and captivate your target audience.",
  accordTitleB:'Visual Storytelling for Lasting Impression',
  accordDescriptB:"Visual storytelling is a key aspect of our marketing design approach. Our experts recognize the significance of creating a narrative through visuals, and we leverage our expertise to develop impactful marketing materials that leave a lasting impression on your audience. By combining creativity with strategic thinking, we ensure that your brand's story is effectively conveyed to your target market.",
  // accordTitleC:'Dolor sit amet',
  // accordDescriptC:'Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat purus et elementum cursus. Enim a eros vulputate ultrices. Risus lorem nisl id ut varius nam vitae pharetra.',
  background: 'linear-gradient(90deg, #00EDB0 -5.5%, #00B0D6 107.25%)',
  backgroundClip: 'text',
  webKitBackgroundClip: 'text',
  textFillColor: 'transparent',
  webKitTextFillColor: 'transparent',
  src: '/testC.gif'
},
{
  title: 'Production',
  accordTitleA:'Captivating Animations and Seamless Transitions',
  accordDescriptA:'Our team specializes in transforming static designs into dynamic and captivating animations. We understand that static visuals may not always effectively convey your message or captivate your audience. Through our expertise in motion graphics, we bring your designs to life with fluid movements and eye-catching transitions.',
  accordTitleB:'Visual Storytelling with Motion Graphics',
  accordDescriptB:'We specialize in using motion graphics for visual storytelling. We believe that videos have the power to convey emotions, tell stories, and connect with your audience on a deeper level. Through our expertise in combining visuals and motion, we create videos that leave a lasting impact and resonate with your viewers.',
  accordTitleC:'Meticulous Attention to Detail in Video Production',
  accordDescriptC:'At Terrific Minds, we take pride in our meticulous attention to detail throughout the entire video production process. We understand that every aspect of video production plays a crucial role in the final result. From concept development to post-production, our experienced team ensures that no detail is overlooked.',
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

      {/*  */}
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