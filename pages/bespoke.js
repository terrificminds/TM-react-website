import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import GrowWithUs from '../components/Grow With Us/growWithUs'

export default function Page({ page }) {

    console.log(page.slugs[0],"SLUG ME")
  
  return (
    <>
      <SliceZone slices={page.data.slices} context={page.slugs[0]}  components={components} />
      <GrowWithUs titleA="Want to help us" titleB="grow your business ?" />
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
