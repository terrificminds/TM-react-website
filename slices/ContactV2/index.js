import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Button from '../../components/Button/button'

/**
 * @typedef {import("@prismicio/client").Content.ContactV2Slice} ContactV2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactV2Slice>} ContactV2Props
 * @param { ContactV2Props }
 */
export default function ContactV2({ slice }){

  let title = <PrismicRichText field={slice.primary.title} />
  let subtitle = <PrismicRichText field={slice.primary.subtitle} />
  let CTAtext = <PrismicRichText field={slice.primary.cta_text} />

  return(
    <>
    <section className='cV2'>
      <div className='cV2_Container'>
        <div className='cV2_TextContainer'>
          <div className='cV2_Title helMed'>
            <p>
              { title }
            </p>
          </div>
          <div className='cV2_SubTitle helReg'>
            <p>
              { subtitle }
            </p>
          </div>
          <div className='cV2_CTA'>
            <Button className='btn darkBtn' text={CTAtext} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}