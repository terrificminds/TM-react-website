import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import TitleB from '../../components/TitleB/titleB'
import CertLogo from '../../components/CertificationLogo/certLogo'

/**
 * @typedef {import("@prismicio/client").Content.CertificationSlice} CertificationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CertificationSlice>} CertificationProps
 * @param { CertificationProps }
 */
export default function Certification() {

  let arrObj = [
    {
      src: '/prof.png'
    },
    {
      src: '/expert.png'
    },
    {
      src: '/master.png'
    },
  ]

  let arrObjB = [ 
    {
      src: '/cert.png'
    },
    {
      src: '/certB.png'
    }
  ]

  let arrObjC = [ 
    {
      src: '/sales.png'
    },
    {
      src: '/technical.png'
    }
  ]

  let arrObjD = [
    {
      src: '/csm.png'
    },
    {
      src: '/cspo.png'
    },
    {
      src: '/cua.png'
    },
  ]

  return(
    <section className='cert' style={{background:'#FFF8F1'}}>
      <div className='certContainer'>
       <TitleB 
          title='Our Certification Include'
          textA='We pursue quality of highest order while undertaking projects; Our Terrific '
          textC='Culture ensures that our employees stay up to date within technology domain.'  />
        <div className='certLogoContent'>
          <div className='certLogoContainer'>
            <div className='certLogoA'>
              {
                arrObj.map((obj, i) => {
                  return(
                      <CertLogo obj={obj} key={i}/>
                  )
                })
              }
            </div>
            <div className='certLogoB'>
              {
                arrObjB.map((obj, i) => {
                  return(
                    <CertLogo obj={obj} key={i} />
                  )
                })
              }
            </div>
            <div className='certLogoC'>
              {
                arrObjC.map((obj, i) => {
                  return(
                    <CertLogo obj={obj} key={i} />
                  )
                })
              }
            </div>
            <div className='certLogoD'>
              {
                arrObjD.map((obj, i) => {
                  return(
                      <CertLogo obj={obj} key={i} />
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

