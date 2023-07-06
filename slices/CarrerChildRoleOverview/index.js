import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ButtonB from '../../components/ButtonB[noArrow]/buttonB'

/**
 * @typedef {import("@prismicio/client").Content.CarrerChildRoleOverviewSlice} CarrerChildRoleOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrerChildRoleOverviewSlice>} CarrerChildRoleOverviewProps
 * @param { CarrerChildRoleOverviewProps }
 */
export default function CarrerChildRoleOverview({ slice }){


  let Title = <PrismicRichText field={slice.primary.title} />
  let Description = <PrismicRichText field={slice.primary.description} />

  return(
    <>
    <section className='carrRolOv'>
      <div className='carrRolOv_Container'>
        <div className='carrRolOv_Content'>
          <div className='carrRolOv_Content_A'>
            <div className='carrRolOv_Title helBold'>
              <p>
                { Title }
              </p>
            </div>
            <div className='carrRolOv_Desc helReg'>
              <p>
                { Description }
              </p>
            </div>
          </div>
          {/* <div className='carrRolOv_Content_B'>
            <div className='carrRolOv_Title helBold'>
              <p>What we need: </p>
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
            <ButtonB className='carrRolOv_applyCTA btn darkBtn helMed' text='Apply Now' />
          </div> */}
        </div>
      </div>
    </section>
    </>
  )
}