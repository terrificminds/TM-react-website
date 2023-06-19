import React from 'react'
import Image from "next/image";
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.AboutHeroSlice} AboutHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutHeroSlice>} AboutHeroProps
 * @param { AboutHeroProps }
 */
export default function AboutHero({slice}){
  let Title = "We're all about";
  let ForgingTitle = 'Forging the Future of'

  let A = "Commerce"
  let B = "AI/ML"
  let C = "Design"

//   let ForgingDescription = "We want to bring User and the digital world together. At Terrific Minds we are specialised in customer-centric digital commerce solutions. Pretium facilisi volutpat ullamcorper arcu. Vitae malesuada in aliquam lacus consequat ut. Morbi semper viverra congue consequat luctus. Etiam imperdiet nisi velit tortor gravida eget."
  let ForgingDescription = "At Terrific Minds, our primary goal is to bridge the gap between users and the digital realm, creating seamless interactions and experiences. We understand the importance of putting the customer at the forefront of our digital commerce solutions, tailoring them to meet their specific needs and preferences."

  return(
      <>
      <main className="aboutHero">
          <div className="aboutHero_Container">
              <div className="aboutHero_TextContainer">
                  <div className="aboutHero_Logo">
                      <Image height={100} width={100}  src="/About/hero/tmLogo.svg" alt="Terrific Minds"/>
                  </div>
                  <div className="aboutHero_Title helMed">
                      <p>
                          {Title}
                      </p>
                  </div>
              </div>
              <div className="aboutHero_GIFContainer">
                  <div className="aboutHero_GIF">
                      <video 
                        autoPlay="true" muted="true" disableRemotePlayback loop="true" 
                        height="100%" playsInline="true" width="100%" style={{height:'100%', width:'100%', objectFit:'cover'}}>
                            <source src="/About/hero/aboutHeroVid.mp4" disableRemotePlayback type="video/mp4" />
                    </video>
                  </div>
              </div>
          </div>
            <div className="aboutHero_ForgingContainer"> 
              <div className="aboutHero_ForgingTitle">
                 <div className="ForgingMain_Title helMed">
                      <p>
                          {ForgingTitle}
                      </p>
                 </div>
                 <div className="Forging_KeyframeTitle">
                      <div className="Forging_KeyframeContainer helMed">
                          <div className="Forging_AnimTitle aboutTextA AnimTitleA"><p>{A}</p></div>
                          <div className="Forging_AnimTitle aboutTextB AnimTitleB"><p>{B}</p></div>
                          <div className="Forging_AnimTitle aboutTextC AnimTitleC"><p>{C}</p></div>
                      </div>
                 </div>
                 <div className="Forging_Description helReg">
                      <p>
                          {ForgingDescription}
                      </p>
                 </div>
                </div>
            </div>
      </main>
      </>
  )
}
