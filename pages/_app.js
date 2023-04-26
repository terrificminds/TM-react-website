import '../styles/globals.css'
import '../styles/header.css'
import '../styles/hero.css'
import '../styles/ourWorks.css'
import '../styles/relShip.css'
import '../styles/scaleEcom.css'
import '../styles/dsgnShwCse.css'
import '../styles/bespoke.css'
import '../styles/certif.css'
import '../styles/stories.css'
import '../styles/location.css'
import '../styles/newsLetter.css'
import '../styles/footer.css'
import '../styles/EcommercePage/ecomHero.css'
import '../styles/EcommercePage/greatDigital.css'
import '../styles/WorksPage/works.css'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import Layout from '../components/Layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  )
}
