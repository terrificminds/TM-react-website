import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import { PrismicNextImage } from '@prismicio/next'
import TitleComponent from '../../components/TitleComponent/titleComponent'

// Lottie
import Lottie from 'lottie-react'

// Career Lotties
import Beingheard from '../../components/Lottie/BeingHeard.json'
import Equality from '../../components/Lottie/Equality.json'
import Exposure from '../../components/Lottie/Exposure.json'
import Mentorship from '../../components/Lottie/Mentorship.json'
import Ownership from '../../components/Lottie/Ownership.json'
import Transparency from '../../components/Lottie/Transparency.json'

// About Lotties
import Team from '../../components/Lottie/About/Team.json'
import Culture from '../../components/Lottie/About/Culture.json'
import EqualityB from '../../components/Lottie/About/Equality.json' 
import Energy from '../../components/Lottie/About/Energy.json'
import Individuality from '../../components/Lottie/About/Individuality.json'
import Freedom from '../../components/Lottie/About/Freedom.json'

/**
 * @typedef {import("@prismicio/client").Content.BeingTerrificSlice} BeingTerrificSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeingTerrificSlice>} BeingTerrificProps
 * @param { BeingTerrificProps }
 */
export default function BeingTerrific({slice, context}){



  const Array1 = slice.items;


  // Career 
  let CustomArray = [
    {
      title: <PrismicRichText field={Array1[0].title} />,
      description: <PrismicRichText field={Array1[0].description} />,
      lottie: Exposure
    },
    {
      title: <PrismicRichText field={Array1[1].title} />,
      description: <PrismicRichText field={Array1[1].description} />,
      lottie: Mentorship
    },
    {
      title: <PrismicRichText field={Array1[2].title} />,
      description: <PrismicRichText field={Array1[2].description} />,
      lottie: Beingheard
    },
    {
      title: <PrismicRichText field={Array1[3].title} />,
      description: <PrismicRichText field={Array1[3].description} />,
      lottie: Equality
    },
    {
      title: <PrismicRichText field={Array1[4].title} />,
      description: <PrismicRichText field={Array1[4].description} />,
      lottie: Ownership
    },
    {
      title: <PrismicRichText field={Array1[5].title} />,
      description: <PrismicRichText field={Array1[5].description} />,
      lottie: Transparency
    },
  ]

  // About
  let CustomArrayB = [
    {
      title: <PrismicRichText field={Array1[0].title} />,
      description: <PrismicRichText field={Array1[0].description} />,
      lottie: Team
    },
    {
      title: <PrismicRichText field={Array1[1].title} />,
      description: <PrismicRichText field={Array1[1].description} />,
      lottie: Culture
    },
    {
      title: <PrismicRichText field={Array1[2].title} />,
      description: <PrismicRichText field={Array1[2].description} />,
      lottie: EqualityB
    },
    {
      title: <PrismicRichText field={Array1[3].title} />,
      description: <PrismicRichText field={Array1[3].description} />,
      lottie: Energy
    },
    {
      title: <PrismicRichText field={Array1[4].title} />,
      description: <PrismicRichText field={Array1[4].description} />,
      lottie: Individuality
    },
    {
      title: <PrismicRichText field={Array1[5].title} />,
      description: <PrismicRichText field={Array1[5].description} />,
      lottie: Freedom
    },
  ]

  console.log(CustomArray,"EFF YOU BICHES")



  return(
    <section className='BeingTerrific'>
      <div className='BeingTerrific_Container'>
        <div className='BeingTerrfic_TitleContainer'>
          {
            context === "bespoke-page" ?
            <TitleComponent 
              title="Platform & Technology"
              description="Terrific Minds offers a broad range of e-commerce web development services with added expertise in design, testing, migration, support and maintenance using Shopify and Magento." />
            :
            <div className='BeingTerrific_Title helMed'>   
            {
              context === "about_page" ? 
              <p>
                At Terrific Minds <br/> We are about <span className='TMorange'>Being Terrific</span>
              </p>
              : 
              <p>
                At Terrific Minds <br/>You are about <span className='TMorange'>Being Terrific</span>
              </p>
            }
          </div>
          }
        </div>
        <div className='BeingTerrific_Showcase'>
            {/* <div className='BeingTerrific_ShowcaseContainer'> */}
              {
                context === "carrers_page" ?
                <div className='BeingTerrific_ShowcaseContainer'>

                {
                  CustomArray.map((data, i) => {
                    return(
                      <div key={i} className='BeingTerrfic_ShowcaseItem helReg'>
                        <div className='BeingTerrific_ShowcaseLogo'>
                          <Lottie animationData={data.lottie} loop={true} style={{height:'50%', width:'50%', objectFit:'contain'}} />
                        </div>
                        <div className='BeingTerrific_ShowcaseTitle'>
                            <p>
                              {data.title}
                            </p>
                        </div><div className='BeingTerrific_ShowcaseDescription'>
                          <p>
                            {data.description}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }

                </div>
                :
                context === "about_page" ?
                (
                  <div className='BeingTerrific_ShowcaseContainer'>

                {
                  CustomArrayB.map((data, i) => {
                    return(
                      <div key={i} className='BeingTerrfic_ShowcaseItem helReg'>
                        <div className='BeingTerrific_ShowcaseLogo'>
                          <Lottie animationData={data.lottie} loop={true} style={{height:'50%', width:'50%', objectFit:'contain'}} />
                        </div>
                        <div className='BeingTerrific_ShowcaseTitle'>
                            <p>
                              {data.title}
                            </p>
                        </div><div className='BeingTerrific_ShowcaseDescription'>
                          <p>
                            {data.description}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }

                </div>
                  )
                  :
                  context === "bespoke-page" ?

                  (
                    <div className='BeingTerrific_ShowcaseContainer'>
                          {
                      slice.items.map((data, i) => {


                        let title = <PrismicRichText field={data.title} />
                        let description = <PrismicRichText field={data.description} />

                        return(
                          <div className={context === "bespoke-page" ? 'BeingTerrfic_ShowcaseItem bespokePage helReg' : 'BeingTerrfic_ShowcaseItem helReg'} key={i}>
                            
                                  <div>
                                    <div className='BeingTerrific_ShowcaseLogo bespokeLogoVariant'>
                                      <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                                    </div>
                                  </div>

                                  <div>
                                  <div className='BeingTerrific_ShowcaseLogo bespokeLogoVariantMob'>
                                    <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                                  </div>
                                    <div className='BeingTerrific_ShowcaseTitle'>
                                      <p>
                                        { title }
                                      </p>
                                    </div>
                                    <div className='BeingTerrific_ShowcaseDescription'>
                                      <p>
                                        { description }
                                      </p>
                                    </div>
                                  </div>
                          </div>
                        )
                      })
                          }
                    </div>
                  )

                  :

                  null
                // <div className='BeingTerrific_ShowcaseContainer'>
                //   {
                //     slice.items.map((data, i) => {


                //       let title = <PrismicRichText field={data.title} />
                //       let description = <PrismicRichText field={data.description} />

                //       return(
                //         <div className={context === "bespoke-page" ? 'BeingTerrfic_ShowcaseItem bespokePage helReg' : 'BeingTerrfic_ShowcaseItem helReg'} key={i}>
                //           {
                //             context === "bespoke-page" ? 
                //               <>
                //                 <div>
                //                   <div className='BeingTerrific_ShowcaseLogo bespokeLogoVariant'>
                //                     <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                //                   </div>
                //                 </div>

                //                 <div>
                //                 <div className='BeingTerrific_ShowcaseLogo bespokeLogoVariantMob'>
                //                   <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                //                 </div>
                //                   <div className='BeingTerrific_ShowcaseTitle'>
                //                     <p>
                //                       { title }
                //                     </p>
                //                   </div>
                //                   <div className='BeingTerrific_ShowcaseDescription'>
                //                     <p>
                //                       { description }
                //                     </p>
                //                   </div>
                //                 </div>
                //               </>
                //             :
                //             (
                //             <>
                //               <div className='BeingTerrific_ShowcaseLogo'>
                //                 <PrismicNextImage field={data.icons} alt={data.icons.alt} />
                //                 <Lottie animationData={{}} loop={true} style={{height:'50%', width:'50%', objectFit:'contain'}} />
                //               </div>
                //               <div className='BeingTerrific_ShowcaseTitle'>
                //                   <p>
                //                     {title}
                //                   </p>
                //               </div><div className='BeingTerrific_ShowcaseDescription'>
                //                 <p>
                //                   {description}
                //                 </p>
                //               </div>
                //             </>)
                //           }
                //         </div>
                //       )
                //     })
                //   }
                // </div>
              } 
            {/* </div> */}
          </div>
      </div>
    </section>
  )
}