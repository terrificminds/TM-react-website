
import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Page({ page }) {
  
  let type = page.type;


  return (
    <>
    <SliceZone slices={page.data.slices} context={type}  components={components} />
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('about_page')

  return {
    props: {
      page,
    },
  }
}
