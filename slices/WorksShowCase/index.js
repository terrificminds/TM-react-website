import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichText from '../../components/RichText/richText'
import ButtonB from '../../components/ButtonB[noArrow]/buttonB'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import Button from '../../components/Button/button'
import WorksShowCaseV2A from '../../components/worksShowCaseV2/ShowCaseA/worksShowCaseV2A'
import WorksShowCaseV2B from '../../components/worksShowCaseV2/ShowCaseB/worksShowCaseV2B'
import WorksShowCaseV2C from '../../components/worksShowCaseV2/ShowCaseC/worksShowCaseV2C'

/**
 * @typedef {import("@prismicio/client").Content.WorksShowCaseSlice} WorksShowCaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksShowCaseSlice>} WorksShowCaseProps
 * @param { WorksShowCaseProps }
 */
export default function WorksShowCase({slice}) {

  let tab = [
    {
      tab: 'All Projects'
    },
    {
      tab: 'Ecommerce'
    },
    {
      tab: 'Design'
    },
    {
      tab: 'Bespoke'
    }
  ]

  return(
    <section className='worksShowCase'>
      <div className='worksShowCaseContainer'>
        <div>
          <div className='worksTabContainer' style={{display:'flex'}}>
            {
              tab.map((obj, i) => {
                return(
                  <ButtonB className='worksTab btn helReg'
                    key={i}
                    text={obj.tab} />
                )
              })
            }
          </div>
          <div className='worksShowCaseContent'>
            <div style={{}}>
              {
                slice.items.map((data, i) => {
                  console.log("hello", data)
                  return(
                    <div key={i}>
                      <div style={{display:'flex', justifyContent:'space-between', margin:'1rem 0'}}>
                        <WorksShowCaseV2A data={data} />
                        <WorksShowCaseV2B data={data} />
                      </div>
                      <div>
                        <WorksShowCaseV2C data={data} />
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
  )
}