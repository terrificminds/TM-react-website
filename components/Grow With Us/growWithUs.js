import Button from '../../components/Button/button'


export default function GrowWithUs({titleA, titleB}){

    let text = [
        {
          text: 'We’re digitally omnipresent, Zoom, Skype, Teams, Meet or WhatsApp, take your pick '
        }
      ]
    
      let textB = [
        {
          textB: 'If you’re feeling analog, let’s meet in person. Name a place and we’ll drop by because that’s just good business.'
        }
      ]

    return(
        <section className='growCTA'>
        <div className='growCTAContainer'>
          <div className='growCTAContent'>
            <div className='growCTATitle helMed'>
              <h3>
                {titleA}&nbsp;<span className='TMorange'>{titleB}</span>
              </h3>
            </div>
            <div className='growCTADescription helReg'>
              <p>
                {
                  text.map((text, i) => {
                    return(
                      <span key={i}>{text.text} </span>
                    )
                  })
                }
                <span style={{color:'#FF5D1D'}}> or </span>
                {
                  textB.map((text, i) => {
                    return(
                      <span key={i}>{text.textB}</span>
                    )
                  })
                }
              </p>
            </div>
            <Button 
              className='btn darkBtn' href="/contact"
              text='Talk with us' fill="#FFF" />
          </div>
        </div>
      </section>
    )
}