import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.TeamShowcaseSlice} TeamShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamShowcaseSlice>} TeamShowcaseProps
 * @param { TeamShowcaseProps }
 */
export default function TeamShowcase({ slice }){

  let title = <PrismicRichText field={slice.primary.title} />

  return(
    <>
    <section className='TeamScase'>
      <div className='TeamScase_Container'>
        <div className='TeamScase_Title helMed'>
          <p>
            { title }
          </p>
        </div>
        <div className='TeamScase_Cards'>
          {
            slice.items.map((data, i) => {

              let FullName = <PrismicRichText field={data.full_name} />
              let Position = <PrismicRichText field={data.position} />

              return(
                <div className='TeamScase_Card' key={i}>
                  <div className='TeamScase_InnerCard'>
                    <div className='TeamScase_CardImg'>
                      <PrismicNextImage field={data.image} alt={data.image.alt} />
                    </div>
                    <div className='TeamScase_CardInfo'>
                      <div className='TeamScase_TextContainer'>
                        <div className='TeamScase_Fullname helBold'>
                          <p>
                            { FullName }
                          </p>
                        </div>
                        <div className='TeamScase_Position helReg'>
                          <p>
                            { Position }
                          </p>
                        </div>
                      </div>
                      <div className='TeamScase_SocialIcon'>
                        <div className='TeamScase_SocialIcon_Container'>
                          <Image height={100} width={100}  src='/About/lnkdInIcon.svg' alt='socials' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
    <div className='TeamScase_CarouselContainer'>
      <div className='TeamScase_Carousel'>
        {
          slice.items.map((data, i) => {
            return(
              <div className='TeamScase_CarouselImg' key={i}>
                <PrismicNextImage field={data.carousel_image} alt={data.carousel_image.alt} />
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}
