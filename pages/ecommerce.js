import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hero from '../slices/Hero/index'
const inter = Inter({ subsets: ['latin'] })

import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import Button from '../components/Button/button'

export default function Page({ page }) {

  let text = [
    {
      text: 'We’re digitally omnipresent, Zoom, Skype, Teams, Meet or WhatsApp, take your pick '
    }
  ]

  let textB = [
    {
      textB: 'If you’re feeling analog, let’s meet in person. Name a place and we’ll drop by because that’s just good business.'
    }
  ]

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <section className='growCTA' style={{padding:'2rem', background:'#FFF'}}>
        <div className='growCTAContainer' style={{padding:'4rem 4rem', display:'flex'}}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <div className='helMed' style={{padding:'0 0 2rem 0'}}>
              <p style={{color:'#0E0E0E', fontSize:'2rem'}}>Want to help us <span style={{color:'#FF5D1D'}}>grow your business?</span></p>
            </div>
            <div className='helReg' style={{color:'#0E0E0E', fontSize:'1.13rem', textAlign:'center', width:'42%', lineHeight:'180%', padding:' 0 0 2rem 0'}}>
              <p>
                {
                  text.map((text, i) => {
                    return(
                      <span key={i}>{text.text} </span>
                    )
                  })
                }
                <span style={{color:'#FF5D1D'}}> or </span>
                {
                  textB.map((text, i) => {
                    return(
                      <span key={i}>{text.textB}</span>
                    )
                  })
                }
              </p>
            </div>
            <Button 
              className='btn darkBtn'
              text='Talk with us' />
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('ecommercepage')

  return {
    props: {
      page,
    },
  }
}
