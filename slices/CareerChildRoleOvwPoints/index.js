import React from 'react'
import { PrismicRichText } from '@prismicio/react'
// CareerChildRoleOvwPoints

/**
 * @typedef {import("@prismicio/client").Content.CareerChildRoleOvwPointsSlice} CareerChildRoleOvwPointsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerChildRoleOvwPointsSlice>} CareerChildRoleOvwPointsProps
 * @param { CareerChildRoleOvwPointsProps }
 */
export default function CareerChildRoleOvwPoints({ slice, context }) {




  return(
    <section className='carrRolOv'>
      <div className='carrRolOv_Container'>
        <div className='carrRolOv_Content_B'>
          <div className='carrRolOv_Title helBold'>
            <p>
              What we need:
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