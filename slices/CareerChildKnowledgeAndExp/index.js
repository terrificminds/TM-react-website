import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CareerChildKnowledgeAndExpSlice} CareerChildKnowledgeAndExpSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerChildKnowledgeAndExpSlice>} CareerChildKnowledgeAndExpProps
 * @param { CareerChildKnowledgeAndExpProps }
 */
export default function CareerChildKnowledgeAndExp({ slice }) {
  return(
    <section className='carrRolOv'>
      <div className='carrRolOv_Container'>
        <div className='carrRolOv_Content_B'>
          <div className='carrRolOv_Title helBold'>
            <p>
              Knowledge and Experience:
            </p>
          </div>
          <div className='carrRolOv_Content_B_Req'>
            <ul>
              {
                slice.items.map((data, i) => {
                  let Requirements = <PrismicRichText field={data.requirements} />
                  return(
                    <li className='carrRolOv_Reqmnts helMed' key={i}>
                        { Requirements }
                    </li>  
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
  </section>
  )
}