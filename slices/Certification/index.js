/* eslint-disable @next/next/no-img-element */
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
      src: '/csm.png'
    },
    {
      src: '/cspo.png'
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
      src: '/cua.png'
    },
    {
      src: '/certB.png'
    },
    {
      src: '/cert.png'
    },
  ]

  let arrObjE = [
    {
      src: '/ISTQB_International_original_web.original.png'
    }
  ]

  let arrObjA = [
    {
      src: '/prof.png'
    },
    {
      src: '/expert.png'
    },
    {
      src: '/master.png'
    },
    {
      src: '/csm.png'
    },
    {
      src: '/cspo.png'
    },
    {
      src: '/sales.png'
    },
    {
      src: '/technical.png'
    },
    {
      src: '/cua.png'
    },
    {
      src: '/certB.png'
    },
    {
      src: '/cert.png'
    },
    {
      src: '/ISTQB_International_original_web.original.png'
    }
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
            {/* <div> */}
              {
                arrObjA.map((data, i) => {
                  return(
                    <div className='certLogo' key={i}>
                      <img src={data.src} alt='logo' />
                    </div>
                  )
                })
              }
            {/* </div> */}
            {/* <div className='certLogoA'>
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
            <div className='certLogoD'>
              {
                arrObjE.map((obj, i) => {
                  return(
                      <CertLogo obj={obj} key={i} />
                  )
                })
              }
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

