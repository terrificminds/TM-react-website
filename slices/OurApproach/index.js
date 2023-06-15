import React, { useEffect } from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.OurApproachSlice} OurApproachSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurApproachSlice>} OurApproachProps
 * @param { OurApproachProps }
 */
export default function OurApproach({slice}) {



  useEffect(() => {

    let circle = document.querySelectorAll('.ourApproach_Item_Circle')

    let darkCircle = document.querySelectorAll('.ourApproach_Item_Circle_Dark');

    let circleContainer = document.querySelectorAll('.ourApproach_Item_Circle_Container')

    // Opacity to 0 for all circles
    darkCircle.forEach((entry) => {
      entry.style.opacity = "0"
    })

    // Circle A
    circle[0].style.transform="translateX(35%)";
    circle[0].style.zIndex="0"

  

    // Circle B
    circle[1].style.zIndex="10"
    circle[1].style.transform="translateX(20%)";

    // Circle C
    circle[2].style.zIndex="20"

    // Circle D 
    circle[3].style.zIndex="30"
    circle[3].style.transform="translateX(-15%)";

    // Circle E
    circle[4].style.zIndex="40"
    circle[4].style.transform="translateX(-35%)";

    // Mobile Circle
    circle[5].style.transform ="translateY(21%)"
    circle[6].style.transform ="translateY(-2%)"
    circle[7].style.transform ="translateY(-25%)"
    circle[8].style.transform ="translateY(-50%)"
    circle[9].style.transform ="translateY(-75%)"


    console.log(circle,"CIRCLE ME DADDY")


    // Hover Interaction
    // Circle A
    circleContainer[0].addEventListener('mouseover', () => {
      circle[0].style.transform="translateX(35%) rotateY(180deg)";
      circle[0].style.zIndex ="30";

      darkCircle[0].style.opacity="1"
    })

    circleContainer[0].addEventListener('mouseleave', () => {
      circle[0].style.transform="translateX(35%) rotateY(0deg)";
      circle[0].style.zIndex="0";

      darkCircle[0].style.opacity="0"
    })

    // Circle B
    circleContainer[1].addEventListener('mouseover', () => {
      circle[1].style.transform="translateX(20%) rotateY(180deg)";
      circle[1].style.zIndex ="40";

      darkCircle[1].style.opacity="1"
    })

    circleContainer[1].addEventListener('mouseleave', () => {
      circle[1].style.transform="translateX(20%) rotateY(0deg)";
      circle[1].style.zIndex="0";

      darkCircle[1].style.opacity="0"
    })

    // Circle C
    circleContainer[2].addEventListener('mouseover', () => {
      circle[2].style.transform="rotateY(180deg)";
      circle[2].style.zIndex ="60";

      darkCircle[2].style.opacity="1"
    })

    circleContainer[2].addEventListener('mouseleave', () => {
      circle[2].style.transform="rotateY(0deg)";
      circle[2].style.zIndex="0";

      darkCircle[2].style.opacity="0"
    })
    
    // Circle D
    circleContainer[3].addEventListener('mouseover', () => {
      circle[3].style.transform="translateX(-15%) rotateY(180deg)";
      circle[3].style.zIndex ="80";

      darkCircle[3].style.opacity="1"
    })

    circleContainer[3].addEventListener('mouseleave', () => {
      circle[3].style.transform="translateX(-15%) rotateY(0deg)";
      circle[3].style.zIndex="0";

      darkCircle[3].style.opacity="0"
    })

    // Circle E
    circleContainer[4].addEventListener('mouseover', () => {
      circle[4].style.transform="translateX(-35%) rotateY(180deg)";
      circle[4].style.zIndex ="80";

      darkCircle[4].style.opacity="1"
    })

    circleContainer[4].addEventListener('mouseleave', () => {
      circle[4].style.transform="translateX(-35%) rotateY(0deg)";
      circle[4].style.zIndex="0";

      darkCircle[4].style.opacity="0"
    })
            

    let test = document.querySelectorAll('.ourApproach_Item_Circle_Container')

    // test[9].style.height = "150px"


    // TRIAL.addEventListener('mouseover', () => {
    //   TRIAL.classList.add('ourApproach_Item_Circle_Active')
    // })
  })

  return(
    <>
      <section className='ourApproach'>
        <div className='ourApproach_Container'>
          <div className='ourApproach_Title helMed'>
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          {/* desktop component */}
          <div className='ourApproach_Interaction_Container'>
              {
                slice.items.map((data, i) => {
                  return(
                    <div className='ourApproach_Item_Circle_Container' style={{display:'flex'}} key={i}>
                      <div className='ourApproach_Item_Circle' key={i}>
                          <div className='ourApproach_Item_Title helMed'>
                            <p>
                            <PrismicRichText field={data.interaction_title} />
                            </p>
                          </div>
                          <div className='ourApproach_Item_Circle_Dark'> 
                            <div className='ourApproach_Item_Bullet helMed'> 
                              <p>
                                <PrismicRichText field={data.interaction_bullet} />
                              </p>
                            </div>
                          </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
          {/* mobile component */}
          <div className='ourApproach_Interaction_Container mobCircleContainer'>
              {
                slice.items.map((data, i) => {
                  return(
                    <div className='ourApproach_Item_Circle_Container' key={i}>
                      <div className='ourApproach_Item_Circle' key={i}>
                          <div className='ourApproach_Item_Title helMed'>
                            <p>
                            <PrismicRichText field={data.interaction_title} />
                            </p>
                          </div>
                          <div className='ourApproach_Item_Bullet helMed'>
                            <p>
                              <PrismicRichText field={data.interaction_bullet} />
                            </p>
                          </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </section>
    </>
  )
}