/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ButtonB from '../../components/ButtonB[noArrow]/buttonB'

/**
 * @typedef {import("@prismicio/client").Content.CarrerChildScheduleMeetingSlice} CarrerChildScheduleMeetingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrerChildScheduleMeetingSlice>} CarrerChildScheduleMeetingProps
 * @param { CarrerChildScheduleMeetingProps }
 */
export default function CarrerChildScheduleMeeting({ slice }){


  let Title = "Want to schedule a meeting with us?"
  let DescriptA = "We're digitally omnipresent, Zoom, Skype, Teams, Meet or WhatsApp, take your pick"
  let DescriptB = "Or if you're feeling analog, let's meet in person. Name a place and we'll drop by because that's good business"

  return(
    <>
    <section className='carrRolSchdl'>
      <div className='carrRolSchdl_Container'>
        <div className='carrRolSchdl_Content'>
          <div className='carrRolSchdl_Title helReg'>
            <p>
              { Title }
            </p>
          </div>  
          <div className='carrRolSchdl_desc descA helReg'>
            <p>
              { DescriptA }
            </p>
          </div>
          <div className='carrRolSchdl_desc descB helReg'>
            <p>
              { DescriptB }
            </p>
          </div>
          <div className='carrRolSchdl_CtaContainer'>
            <div className='carrRolSchdl_cta'>
              <ButtonB className='btnRad btn lightBtn helMed' text='Schedule a call' />
            </div>
            <div className='carrRolSchdl_ContB helReg'>
              <p>Powered by</p><span style={{marginLeft:'0.5em'}}><img src='/Carrers/posArrow.svg' alt='logo' /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}