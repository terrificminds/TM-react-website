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
        <ButtonB className='carrRolOv_applyCTA btn darkBtn helMed' text='Apply Now' />
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



