import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Page({ page }) {

    
  
  return (
    <>
      <SliceZone slices={page.data.slices} context={page.slugs[0]}  components={components} />
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('bespoke_page')

  return {
    props: {
      page,
    },
  }
}
