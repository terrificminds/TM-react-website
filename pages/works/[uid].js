import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'

export default function Page({ page }) {
  console.log("dynamic", page)
 
  return <SliceZone slices={page.data.slices} components={components} />
}

export async function getStaticProps({ params, previewData }) {
  console.log("dynamic1")
  const client = createClient({ previewData })

  const page = await client.getByUID('works_case_study_page', params.uid)

  
  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('works_case_study_page')
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}



