import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'
 
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)
 
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
    

  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'ecommercepage':
      return '/ecommerce'
    case 'workspage':
      return '/works'
    case 'works_case_study_page':
      return `/works/${doc.uid}`
    case 'ecommerce_child_pages':
      return `/${doc.uid}`
    default:
      return null
  }
}
 
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)
 
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })
 
  return client
}