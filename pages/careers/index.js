import { SliceZone } from '@prismicio/react'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

export default function Page({ page }) {


  console.log(page.type, "PAGE")

  return (
    <>
      <SliceZone slices={page.data.slices} context={page.type} components={components} />
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('carrers_page')

  return {
    props: {
      page,
    },
  }
}
