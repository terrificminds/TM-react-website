import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CareerChildKeyResponsibilitiesSlice} CareerChildKeyResponsibilitiesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerChildKeyResponsibilitiesSlice>} CareerChildKeyResponsibilitiesProps
 * @param { CareerChildKeyResponsibilitiesProps }
 */
export default function CareerChildKeyResponsibilities({slice}){
  return(
    <section className='carrRolOv_Req'>
      <div className='carrRolOv_Container'>
        <div className='carrRolOv_Content_B'>
          <div className='carrRolOv_Title helBold'>
            <p>
              Key Responsibilities
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