/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ContactBox from "./FooterContactBox/footerContactBox"
import ListItems from "./ListItems/listItems"
import Link from "next/link";


export default function Footer() {

    // footer state(mobile)
    const [activeFooter, setActiveFooter] = useState(false);
    const [activeFooterB, setActiveFooterB] = useState(false);
    
    const [ activeBorder, setActiveBorder ] = useState(false);

    const handleFocus = () => {
        setActiveBorder(true)
    }

    const handleBlur = () => {
        setActiveBorder(false)
    }

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
            link: '/about'
        },
        {
            listItem: 'Partners',
            link: '/partners'
        },
        {
            listItem: 'Blogs',
            link: 'https://blogs.terrificminds.com/'
        },
        {
            listItem: 'Careers',
            link: '/careers'
        },
        {
            listItem: 'Contact',
            link: '/contact'
        },
        {
            listItem: 'Terrific News',
            link: 'https://terrificminds.com/terrific-news'
        }
    ]

    const listItemsB = [
        {
            listItem: 'Magento',
            link: '/ecommerce/magento'
        },
        {
            listItem: 'Shopify',
            link: '/ecommerce/shopify'
        },
        {
            listItem: 'Design',
            link: '/design'
        },
        {
            listItem: 'Works',
            link: '/works'
        },
        {
            listItem: 'Big Commerce',
            link:'/ecommerce/bigcommerce'
        },
        {
            listItem: 'VTEX',
            link: '/ecommerce/vtex'
        },
        {
            listItem: 'Bespoke Services',
            link: '/bespoke'
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
            <div className="footerContainer">
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
                                    <div onFocus={handleFocus} onBlur={handleBlur}  className="mailFormContainer" style={{border: activeBorder  ? '1px #FF5D1D solid':'1px #7A7A7A solid'}}>
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
                            <div className="allRights allRightsMob helReg">
                                <p>
                                Terrific Minds™©2022 | All rights reserved
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
                    <div className="allRights allRightsDesk helReg">
                        <p>
                            Terrific Minds™©2022 | All rights reserved
                        </p>
                    </div>
                    <div className="XListContainer">
                        <ul className="XList helReg">
                            <li className="XListItem">
                                <a href="">Publisher Terms</a>
                            </li>
                            <li className="XListItem">
                                <Link href="/terms&condition">Terms of Service</Link>
                            </li>
                            <li className="XListItem">
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}