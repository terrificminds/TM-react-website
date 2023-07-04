/* eslint-disable @next/next/no-img-element */
import Title from '../../components/Title/title'
import React, { useState, useRef, useEffect, use } from 'react'


/**
 * @typedef {import("@prismicio/client").Content.NewsLetterSlice} NewsLetterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsLetterSlice>} NewsLetterProps
 * @param { NewsLetterProps }
 */
export default function NewsLetter() {

  const [ activeBorder, setActiveBorder ] = useState(false)

  const handleBlur = () => {
    setActiveBorder(false)
  }

  const handleFocus = () => {
    setActiveBorder(true)
  }

  const AnimateRef = useRef();
  const AnimBGRef = useRef();

  const TextRef = useRef();


  
  useEffect(() => {

    let interval = 10300;

    let getText = document.querySelectorAll('.interactionTitle');
    let getLink = document.querySelectorAll('.interaction_Link');



    setInterval(() => {
      AnimateRef.current.style.transform="translate(0%,0%)"
      AnimBGRef.current.style.background = "#6814EC"
      
      getText[0].style.opacity = '1'
      getText[1].style.opacity = '0'
      getText[2].style.opacity = '0'
      getText[3].style.opacity = '0'

      getLink[0].style.display = 'block';
      getLink[1].style.display = 'none';
      getLink[2].style.display = 'none';
      getLink[3].style.display = 'none';

      setTimeout(() => {
        AnimateRef.current.style.transform="translate(0%,-30%)"
        AnimBGRef.current.style.background = "#00B0D6"

        getText[0].style.opacity = '0';
        getText[1].style.opacity = '1';
        getText[2].style.opacity = '0';
        getText[3].style.opacity = '0';

        getLink[0].style.display = 'none';
        getLink[1].style.display = 'block';
        getLink[2].style.display = 'none';
        getLink[3].style.display = 'none';

      }, 3000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -26%)"
      }, 3350)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -56%)"
        AnimBGRef.current.style.background = "#FFA40A"

        getText[0].style.opacity = '0';
        getText[1].style.opacity = '0';
        getText[2].style.opacity = '1';
        getText[3].style.opacity = '0';

        getLink[0].style.display = 'none';
        getLink[1].style.display = 'none';
        getLink[2].style.display = 'block';
        getLink[3].style.display = 'none';

      },6000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -53%)"
      }, 6350)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -83%)"
        AnimBGRef.current.style.background = "#6814EC"
        getText[0].style.opacity = '0';
        getText[1].style.opacity = '0';
        getText[2].style.opacity = '0';
        getText[3].style.opacity = '1';

        getLink[0].style.display = 'none';
        getLink[1].style.display = 'none';
        getLink[2].style.display = 'none';
        getLink[3].style.display = 'block';

      }, 9000)
      setTimeout(() => {
        AnimateRef.current.style.transform = "translate(0, -80%)"
      }, 9350)
    }, interval)



  }, [])


  let data = [
    {
      imgA:' slideA1.svg',
      imgB: 'slideA2.svg',
    },
    {
      imgA:' slideB1.svg',
      imgB: 'slideB2.svg',
    },
    {
      imgA:' slideC1.svg',
      imgB: 'slideC2.svg',
    },
    {
      imgA:' slideB1.svg',
      imgB: 'slideB2.svg',
    },
  ]

  let testData = [
    {
      text:' July 2019',
      link:'youtube.com'
    },
    {
      text:' June 2020',
      link:'https://www.youtube.com/watch?v=KjY94sAKLlw&t=10821s'
    },
    {
      text:' May 2039',
      link:'https://www.youtube.com/watch?v=wm5gMKuwSYk'
    },
    {
      text:' April 2009',
      link:'jivrom.com'
    }
  ]

  return(
    <section className='newsL' style={{background:'#FFF'}}>
      <div className='newsLetterContainer'>
         <Title titleA='Terrific Times' />
         <div className='newsLetterWrap'>
            <div className='newsLetter'>
              <div>
                <div className='newsLetterTitle helMed'>
                  <h2>Join our NewsLetter</h2>
                </div>
                <div className='nLDescription helReg'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Libero eget convallis et non tellus eget. Cursus aenean dignissim enim 
                  </p>
                </div>
                {/* Mail comes here */}
                <div onFocus={handleFocus} onBlur={handleBlur} className='newsLetterInput'>
                  <input 
                    style={{border: activeBorder ? '1px #FF5D1D solid':'1px #818181 solid', borderRight:'none'}}
                    className='helReg' 
                    type='email' 
                    placeholder='Enter your mail' />
                  <button className='btn darkBtn bgBtn helReg'>Subscribe</button>
                </div>
              </div>
            </div>
            <div ref={AnimBGRef} className='interaction' style={{}}>

              <div className='interactionContent_Container' style={{color:'#FFF', position:'relative'}}>
                {
                  testData.map((data, i) => {
                    return(
                      <div style={{position:'absolute'}} key={i}>
                        <div ref={TextRef} style={{opacity: i == 0 ? '1':'0', transition:'all 0.3s ease'}} className='interactionTitle helBold'>
                          <h3 >{data.text}</h3>
                        </div>
                        <a style={{display: i == 0 ? 'block':'none'}} className='interaction_Link' href={data.link} target='_blank'>
                        <div className='interaction_CTA helReg'>
                          <p>Download</p>
                        </div>
                        </a>
                    </div>
                    )
                  })
                }
                {/* <div>
                  <div ref={TextRef} className='interactionTitle helBold'>
                    <h3 >{ DUMMYTEXT }</h3>
                  </div>
                  <div className='interaction_CTA helReg'>
                    <p>Download</p>
                  </div>
                </div> */}
              </div>

              <div className='interaction_Container'>
                <div ref={AnimateRef} className='interaction_Move' style={{width:'fit-content', position:'relative', transition:'all 0.3s ease'}}>
                  {
                    data.map((data, i) => {
                      return(
                        <div key={i} className='newsLetter_Item_Container'>{/* space these divs */}
                          <div className='newsLetter_Item'><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.imgA} alt='alt' /></div>
                          <div className='newsLetter_Item'><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={data.imgB} alt='alt' /></div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
         </div>
      </div>
    </section>
  )
}