import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CareerChildCompetenciesSlice} CareerChildCompetenciesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerChildCompetenciesSlice>} CareerChildCompetenciesProps
 * @param { CareerChildCompetenciesProps }
 */
export default function CareerChildCompetencies({slice}){
  return(
    <section className='carrRolOv_Req'>
      <div className='carrRolOv_Container'>
        <div className='carrRolOv_Content_B'>
          <div className='carrRolOv_Title helBold'>
            <p>
              Competencies
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