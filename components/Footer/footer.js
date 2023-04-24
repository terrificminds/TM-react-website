/* eslint-disable @next/next/no-img-element */


import ContactBox from "./FooterContactBox/footerContactBox"
import ListItems from "./ListItems/listItems"


export default function Footer() {

    const data = [ {
        description: 'Digital Commerce and Design Delivered with Adobe Commerce (Magento) and Shopify'
    }]

    const listItemsA = [
        {   
            listItem: 'About us',
            link: '/'
        },
        {
            listItem: 'Partners',
            link: '/'
        },
        {
            listItem: 'Blogs',
            link: '/'
        },
        {
            listItem: 'Careers',
            link: '/'
        },
        {
            listItem: 'Contact',
            link: '/'
        }
    ]

    const listItemsB = [
        {
            listItem: 'Magento',
            link: '/'
        },
        {
            listItem: 'Shopify',
            link: '/'
        },
        {
            listItem: 'Design',
            link: '/'
        },
        {
            listItem: 'Works',
            link: '/'
        }
    ]

    const contactBox = [
        {
            text: 'Call Us',
            linkText: '+1 (689) 275-9540',
            link: 'tel:+1 (689) 275-9540'
        },
        {
            text: 'Email Us',
            linkText: 'hello@terrificminds.com',
            link: 'mailto:hello@terrificminds.com'
        }
    ]

    const socialsIcon = [
        {
            icon: '/linkdIn.svg',
        },
        {
            icon: '/faceBook.svg',
        },
        {
            icon: '/insta.svg',
        },
        {
            icon: '/yT.svg',
        }
    ]

    return(
        <>
        <footer className="footer" style={{}} >
            <div className="footerContainer" style={{}}>
                {/* footerTop */}
                <div className="footerA" style={{display:'flex', borderBottom: '1px #555555 solid'}}>
                    <div className="footerAA" style={{width:'75%'}}>
                        <div className="footerAATop" style={{display:'flex'}}>
                            <div style={{width:'40%'}}>
                                <div className="" style={{display:'flex', alignItems:'flex-end'}}>
                                    <div style={{height:'3.5rem', width:'1.75rem',
                                        display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                                        <img style={{height:'100%', width:'100%', objectFit:'cover'}} 
                                            src="/footerHelmet.svg" alt="logo" />
                                    </div>
                                    <div className="helBold" style={{margin:'0 0 0.5rem 0.8rem'}}>
                                        <p>TERRIFIC MINDS</p>
                                    </div>
                                </div>
                                <div className="fDescriptAContainer">
                                    <p className="fDescriptA helReg" style={{color:'#D0D0D0'}}>
                                        {data[0].description}
                                    </p>
                                </div>
                            </div>
                            <div className="listItemsContainer" style={{display:'flex', alignItems:'flex-start',  width:'60%'}}>
                                <div className="listItems">
                                    <p className="listHead helMed">Company</p>
                                    {
                                        listItemsA.map((obj, i) => {
                                            return(
                                                <>
                                                <ListItems key={i}
                                                    obj={obj} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="listItems">
                                    <p className="listHead helMed">Services</p>
                                    {
                                        listItemsB.map((obj, i) => {
                                            return(
                                                <>
                                                <ListItems key={i}
                                                    obj={obj} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="footerAABottom">
                            <div className="helBold">
                                {
                                    contactBox.map((obj, i) => {
                                        return(
                                            <ContactBox key={i}
                                                obj={obj} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="footerAB" style={{width:'25%'}}>
                        <div>
                            <div className="mailHead helMed"><p>Join our email list</p></div>
                            <div className="formContainer">
                                <form className="form">
                                    <div className="mailFormContainer" style={{border:'1px #7A7A7A solid'}}>
                                        <input className="helReg" type="email" placeholder="Enter your mail" />
                                        <button className="btn footerBtn" type="submit"><img src="/mailFormArrow.svg" alt="arrow" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                            <div className="socials">
                                <div className="helMed socialsText"><p>Follow us</p></div>
                                <div style={{display:'flex', padding:'0.8rem 0'}}>
                                    {
                                        socialsIcon.map((obj, i) => {
                                            return(
                                                <>
                                                <div className="socialsIconContainer" key={i}>
                                                    <img src={obj.icon} alt="socialIcon"
                                                        style={{height:'70%', width:'70%', objectFit:'contain'}} />
                                                </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <img src="/accredAgency.svg" alt="accredAgency" />
                            </div>
                            <div className="allRights helReg">
                                <p style={{color:"#D0D0D0"}}>©2022.TERRIFIC MINDS™ | All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footerBottom */}
                <div className="footerB">
                    <div className="footerBLogoContainer">
                        <img src="/10XValueObsession.svg" alt="logo" />
                    </div>
                    <div className="XListContainer">
                        <ul className="XList helReg">
                            <li className="XListItem">
                                <a href="">Publisher Terms</a>
                            </li>
                            <li className="XListItem">
                                <a href="">Terms of Service</a>
                            </li>
                            <li className="XListItem">
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}