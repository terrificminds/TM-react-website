import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'
import ButtonB from '../../components/ButtonB[noArrow]/buttonB'



export default function Page({ page }) {  
  return (
    <>
      <SliceZone slices={page.data.slices}  components={components} />
      <div className='carrRolOv_Btn'>
        <a href={`mailto:work@terrificminds.com?subject=Applying for the ${page.data.title[0].text} position &body=Hi%20I%20would%20like%20to%20apply%20for%20the%20${page.data.title[0].text}%20how%20are%20you%20doing%3F`}>
          <ButtonB className='carrRolOv_applyCTA btn darkBtn helMed' text='Apply Now' />
        </a>
      </div>
    </>
  )
}



export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('carrers_child_page', params.carrerChild)
  
  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('carrers_child_page')
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}



