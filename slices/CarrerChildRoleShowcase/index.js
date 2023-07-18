/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.CarrerChildRoleShowcaseSlice} CarrerChildRoleShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrerChildRoleShowcaseSlice>} CarrerChildRoleShowcaseProps
 * @param { CarrerChildRoleShowcaseProps }
 */
export default function CarrerChildRoleShowcase({ slice }){


  let Title = <PrismicRichText field={slice.primary.role_title} />

  let PrismicData = [
    {
      tag: `${slice.items[0].info_tags[0].text}` ,
      icon:'/Carrers/CareerChildIcons/tabler_location-filled.png'
    },
    {
      tag: `${slice.items[1].info_tags[0].text}` ,
      icon:'/Carrers/CareerChildIcons/game-icons_graduate-cap.png'
    },
    {
      tag: `${slice.items[2].info_tags[0].text}`,
      icon:'/Carrers/CareerChildIcons/ri_time-line.png'
    }
  ]

  return(
    <>
    <section id='footerInvert' className='carrRolShowcase'>
      <div className='carrRolShowcase_Container'>
        <div className='carrRolShowcase_Title helBold'>
          <p> 
            { Title } 
          </p>
        </div>
        <div className='carrRolShowcase_InfoContainer'>
          {
            PrismicData.map((data, i) => {

              return(
                <div className='carrRolShowcase_InfoTag' key={i}>
                  <div className='carrRolShowcase_tagIcon'>
                    <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.icon} alt='icon' />
                  </div>
                  <div className='carrRolShowcase_tagTitle helMed'>
                    <p>
                      { data.tag}
                    </p>
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