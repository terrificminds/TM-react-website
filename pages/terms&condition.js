import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

export default function PrivacyPolicy({ page }) {
    return (
        <>
        <div className='privacy'>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        </>
      )
    }
    
    export async function getStaticProps({ previewData }) {
      const client = createClient({ previewData })
    
      const page = await client.getSingle('terms_condition')
    
      return {
        props: {
          page,
        },
      }
    }