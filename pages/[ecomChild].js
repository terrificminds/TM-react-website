import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../prismicio'
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



export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('ecommerce_child_pages', params.ecomChild)
  
  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('ecommerce_child_pages')
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}



