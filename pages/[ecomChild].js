import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'
import GrowWithUs from '../components/Grow With Us/growWithUs'


export default function Page({ page }) {

  let GrowComponent = <GrowWithUs />;
 
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      {/* <GrowWithUs /> */}
      {/* {GrowComponent} */}
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



