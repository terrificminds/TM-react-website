import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.StatusQuoSlice} StatusQuoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatusQuoSlice>} StatusQuoProps
 * @param { StatusQuoProps }
 */
export default function StatusQuo({ slice }){

  let TitleLineA = <PrismicRichText field={slice.primary.title_line_a} />
  let ColoredText = <PrismicRichText field={slice.primary.colored_title} />

  return(
    <>
    <section className='Status'>
      <div className='Status_Container'>
        <div className='Status_TitleContainer helMed'>
          <p>
            { TitleLineA }<span className='TMorange'>{ ColoredText }</span>
          </p>
        </div>
        <div className='Status_Showcase'>
          <div className='Status_ShowcaseContainer'>
            <div className='Status_Showcase_Items'>
              {
                slice.items.map((data, i) => {

                  let title = <PrismicRichText field={data.title} />
                  let description = <PrismicRichText field={data.description} />

                  return(
                    <div className='Status_Showcase_Item' key={i}>
                      <div className='Status_Showcase_Title helMed'>
                        <p>
                          { title }
                        </p>
                      </div>
                      <div className='Status_Showcase_Descript helReg'>
                        <p>
                          { description }
                        </p>
                      </div>
                      <div className='Status_Showcase_ImgContainer'>
                        <div className='Status_Showcase_Img'>
                          <PrismicNextImage field={data.image} alt={data.image.alt} />
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
    </section>
    </>
  )
}