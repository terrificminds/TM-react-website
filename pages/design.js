import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import GrowWithUs from '../components/Grow With Us/growWithUs'

export default function Page({ page }) {
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <GrowWithUs titleA='Starting a new project or want to collaborate with us?' titleB="Let's talk" />
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('design_page')

  return {
    props: {
      page,
    },
  }
}
