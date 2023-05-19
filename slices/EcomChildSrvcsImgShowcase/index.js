import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.EcomChildSrvcsImgShowcaseSlice} EcomChildSrvcsImgShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EcomChildSrvcsImgShowcaseSlice>} EcomChildSrvcsImgShowcaseProps
 * @param { EcomChildSrvcsImgShowcaseProps }
 */
export default function EcomChildSrvcsImgShowcase({ slice }){

  console.log("data", slice)

  return(
    <>
    <section className='srvcImgShowcase' style={{background:'#FFFF'}}>
      <div className='srvcImgShowcase_Container'>
          <div className='srvcImgShowcase_ContentWrap'>
            <div className='srvcImgShowcase_Content'>
              {
                slice.items.map((data, i) => {

                  let Title = <PrismicRichText field={data.title} />

                  return(
                    <div className='srvcImgShowcase_Item' key={i}>
                      <div className='srvcImgShowcase_Title helMed'>
                        <p>
                          { Title }
                        </p>
                      </div>
                      <div className='srvcImgShowcase_Img'>
                        <PrismicNextImage field={data.image} alt={data.image.alt} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    </section>
    </>
  )
}