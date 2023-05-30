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
import '../styles/grow.css'

import '../styles/WorksPage/works.css'
import '../styles/WorksPage/caseStudyHero.css'
import '../styles/WorksPage/projectOverview.css'
import '../styles/WorksPage/bulletPoints.css'
import '../styles/WorksPage/nextProject.css'
import '../styles/EcomChild/ecomChildHero.css'
import '../styles/EcomChild/overview.css'
import '../styles/EcomChild/services.css'
import '../styles/EcomChild/stats.css'
import '../styles/EcomChild/expertsAtHeart.css'
import '../styles/Components/titleComponent.css'

// Ecommerce Page
import '../styles/EcommercePage/ecomHero.css'
import '../styles/EcommercePage/greatDigital.css'
import '../styles/EcommercePage/ecomSwip.css'

// About
import '../styles/About/aboutHero.css'
import '../styles/About/beingTerrific.css'
import '../styles/About/statusQuo.css'
import '../styles/About/teamShowcase.css'
import '../styles/About/cv2.css'

// Design
import '../styles/Design/designHero.css'
import '../styles/Design/dsgnOvw.css'
// Carrers
import '../styles/Carrers/carrHero.css'
import '../styles/Carrers/carrPos.css'
import '../styles/Carrers/carrImgSlid.css'

// Carrers Child Page
import '../styles/Carrers/carrChild/carrChildSC.css'
import '../styles/Carrers/carrChild/carrChildRoleOv.css'
import '../styles/Carrers/carrChild/carrRolSchdl.css'

// Ecom Child UNIQUE slice
import '../styles/EcomChild/imgShowcase.css'

// Partners
import '../styles/Partners/partnHero.css'






import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver ,repositoryName } from '../prismicio'
import Layout from '../components/Layout/layout'

export default function App({ Component, pageProps }) {


  return (
     <PrismicProvider linkResolver={linkResolver} internalLinkComponent={(props) => <Link {...props} />}>
       <PrismicPreview repositoryName={repositoryName}>
         <Layout>
           <Component {...pageProps} />
         </Layout>
       </PrismicPreview>
     </PrismicProvider>
  )
}
