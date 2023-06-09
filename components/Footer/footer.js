/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ContactBox from "./FooterContactBox/footerContactBox"
import ListItems from "./ListItems/listItems"


export default function Footer() {

    // footer state(mobile)
    const [activeFooter, setActiveFooter] = useState(false);
    const [activeFooterB, setActiveFooterB] = useState(false)

    const footerState = () => {
        setActiveFooter(!activeFooter)
    }

    const footerStateB = () => {
        setActiveFooterB(!activeFooterB)
    }

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
        },
        {
            listItem: 'Terrific News',
            link: 'https://terrificminds.com/terrific-news'
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
        },
        {
            listItem: 'Big Commerce',
            link:'/'
        },
        {
            listItem: 'VTEX',
            link: '/'
        },
        {
            listItem: 'Bespoke Services',
            link: '/'
        }
    ]

    const contactBox = [
        {
            text: 'Call Us',
            linkText: '+1 (689) 275-9540',
            link: 'tel:+1 (689) 275-9540',
            linkB: 'tel:+61 (8) 6243-6534',
            linkTextB: '+61 (8) 6243-6534- AUS'
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
        <footer className="footer">
            <div className="footerContainer" style={{}}>
                {/* footerTop */}
                <div className="footerContent_Container">
                    <div className="footerLeft_Container">
                        <div className="footerLeft_Container_Top_Content">
                            <div className="footerLeft_Container_Top_ContentA">
                                <div className="footerLeft_Container_Top_Logo_Container">
                                    <div className="footerLeft_Container_Top_Logo">
                                        <img style={{height:'100%', width:'100%', objectFit:'cover'}} 
                                            src="/footerHelmet.svg" alt="logo" />
                                    </div>
                                    <div className="footerLeft_Container_Top_Logo_Title helBold">
                                        <p>TERRIFIC MINDS</p>
                                    </div>
                                </div>
                                <div className="footerLeft_Description helReg">
                                    <p>
                                        {data[0].description}
                                    </p>
                                </div>
                            </div>
                            {/* mobile contact box */}
                            <div className="footerLeft_Bottom mobContactBox">
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
                            {/*  */}
                            {/* Desktop listItems */}
                            <div className="listItemsContainer">
                                <div className="listItems">
                                    <p className="listHead helMed">Company</p>
                                    {
                                        listItemsA.map((obj, i) => {
                                            return(
                                                <ListItems key={i}
                                                    obj={obj} />
                                            )
                                        })
                                    }
                                </div>
                                <div className="listItems">
                                    <p className="listHead helMed">Services</p>
                                    {
                                        listItemsB.map((obj, i) => {
                                            return(
                                                <ListItems key={i}
                                                    obj={obj} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/*  */}
                            {/* Mobile listItems */}
                            <div className="listItemsContainer mobList">
                                <div className="listItems mobListHead">
                                    <div onClick={footerState} style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                        <p className="listHead helMed">
                                            Company
                                        </p> 
                                        <span className={ activeFooter ? "ListItems_Arrow_MobileActive":"ListItems_Arrow_Mobile"} >
                                            <img src="/footer/footerArrow.svg" alt="arrow" />
                                        </span>
                                    </div>
                                    <div className={activeFooter ? "ListItems_MobileActive":"ListItems_Mobile"}>
                                        {
                                            listItemsA.map((obj, i) => {
                                                return(
                                                    <ListItems key={i}
                                                        obj={obj} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="listItems">
                                    <div onClick={footerStateB} style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                        <p className="listHead helMed">
                                            Services
                                        </p> 
                                        <span className={ activeFooterB ? "ListItems_Arrow_MobileActive":"ListItems_Arrow_Mobile"}>
                                            <img src="/footer/footerArrow.svg" alt="arrow" />
                                        </span>
                                    </div>
                                    <div className={activeFooterB ? "ListItems_MobileActive":"ListItems_Mobile"}>
                                        {
                                            listItemsB.map((obj, i) => {
                                                return(
                                                    <ListItems key={i}
                                                    obj={obj} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footerLeft_Bottom">
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
                    {/* footer Right */}
                    <div className="footerRight_Container">
                        <div className="footerRight_MailHead">
                            <div className="mailHead helMed">
                                <p>Join our email list</p>
                            </div>
                            <div className="formContainer">
                                <form className="form">
                                    <div className="mailFormContainer" style={{border:'1px #7A7A7A solid'}}>
                                        <input className="helReg" type="email" placeholder="Enter your mail" />
                                        <button className="btn footerBtn" type="submit">
                                            <img src="/mailFormArrow.svg" alt="arrow" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="socialsContainer">
                            <div className="socials">
                                <div className="socialsText helMed"><p>Follow us</p></div>
                                <div style={{display:'flex', padding:'0.8rem 0'}}>
                                    {
                                        socialsIcon.map((obj, i) => {
                                            return(
                                                <>
                                                <div className="socialsIconContainer" key={i}>
                                                    <img src={obj.icon} alt="socialIcon" />
                                                </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="allRights helReg">
                                <p>
                                    ©2022.TERRIFIC MINDS™ | All rights reserved
                                </p>
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