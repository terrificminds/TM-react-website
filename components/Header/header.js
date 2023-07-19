/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ButtonB from "../ButtonB[noArrow]/buttonB";
import { useEffect, useRef, useState } from "react";
import ShopifyIcon from "./MegaMenuIcons/shopifyIcon";
import MagentoIcon from "./MegaMenuIcons/magentoIcon";


export default function Header({fill}) {

    const [megaMenu, setMegaMenu] = useState(false); // useState for megaMenu
    const [dropdown, setDropdown] = useState(false);
    const [newsDropDown, setNewsDropDown] = useState(false);

    const[activeLogo, setActiveLogo] = useState(false);

    const [ hbActive, setHbActive ] = useState(false);

    const [ hbItemAActive, setHbItemAActive ] = useState(false); // state for Technology 

    const [ hbItemBActive, setHbItemBActive ] = useState(false); // state for Services

    const [ hbItemCActive, setHbItemCActive ] = useState(false); // state for news

    const navRef = useRef()

    // Hamburger e-com drop list item
    let EcomList = [
        {
            title: 'Magento',
            link: '/ecommerce/magento'
        },
        {
            title: 'Shopify',
            link: '/ecommerce/shopify'
        },
        {
            title: 'VTEX',
            link: '/ecommerce/vtex'
        },
        {
            title: 'BigCommerce',
            link: '/ecommerce/bigcommerce'
        }
    ]

    // Hamburger Bespoke drop list item
    let BespokeListLeft = [
        {
            title: 'React',
        },
        {
            title: 'AI & ML',
        },
        {
            title: 'Node js',
        },
        {
            title: 'Java',
        },
    ]

    let BespokeListRight = [
        {
            title: 'QA & Testing',
        },
        {
            title: 'Mobility',
        },
        {
            title: 'Word press',
        },
        {
            title: 'DevOps',
        }
    ]

    // Hamburger Company drop list
    let CompList = [
        {
            title: 'About Us',
            link: '/about'
        },
        {
            title: 'Careers',
            link: '/careers'
        },
        {
            title: 'Partners',
            link:'/partners'
        }
    ]

    let NewsList = [
        {
            text: 'Blog',
            link:'https://blogs.terrificminds.com/'
        },
        {
            text: 'Terrific News',
            link:'https://terrificminds.com/terrific-news'
        }
    ]

    let megaMenu_A_Title = 'E-Commerce';
    let megaMenu_B_Title = 'Bespoke Development';

    let megaMenuAItem = [
         {
            title: 'Magento',
            description: 'Feature rich Adobe Ecommerce platform that allows businesses to connect to customers and sell products',
            logo: '/header/MegaMenu/Magento.svg',
            alt: 'Magento',
            link: '/ecommerce/magento'
         },
        {
            title: 'Shopify',
            description: 'Strong online ecommerce presence with number of out of themes to match the client product and service',
            logo: '/header/MegaMenu/Shopify.svg',
            alt: 'Shopify',
            link: '/ecommerce/shopify'
        },
         {
             title: 'VTEX',
             description: 'Use complete dictionary of VTEX APIs to build a store with custom integrations across multiple platforms',
             logo: '/header/MegaMenu/VTEX.svg',
             alt: 'VTEX',
             link: '/ecommerce/vtex'
         },
         {
             title: 'Big Commerce',
             description: 'Build Ecommerce stores with scalable solutions and strong SEO practices through BigCommerce',
             logo: '/header/MegaMenu/BIGC.svg',
             alt: 'Big Commerce',
             link: '/ecommerce/bigcommerce'
         }
    ]

    let megaMenuBItem = [
        {
            title: 'React',
            src: '/header/bespokeEl/react.svg',
            alt: 'React',
        },
        {
            title: 'QA & Testing',
            src: '/header/bespokeEl/qa.svg',
            alt: 'QA & Testing'
        },
        {
            title:'AI & ML',
            src: '/header/bespokeEl/ai.svg',
            alt: 'AI & ML'
        },
        {
            title: 'Mobility',
            src: '/header/bespokeEl/mobility.svg',
            alt: 'Mobility'        
        },
        {
            title: 'Node js',
            src: '/header/bespokeEl/node.svg',
            alt: 'Node js'
        },
        {
            title: 'Word press',
            src: '/header/bespokeEl/wordpress.svg',
            alt: 'Word press'
        },
        {
            title: 'Java',
            src: '/header/bespokeEl/java.svg',
            alt: 'Java'
        },
        {
            title: 'DevOps',
            src: '/header/bespokeEl/devops.svg',
            alt: 'DevOps'
        }
    ]

    // Hamburger Button toggle
    const Hamburger = () => {
        
        setHbActive(!hbActive);

        if(!hbActive) {
            document.body.classList.add('no-scroll')
            document.querySelector("html").classList.add("overflowHidden");

            document.querySelector('.hb').classList.add("hbActive")

        } else {
            document.body.classList.remove('no-scroll')
            document.querySelector("html").classList.remove("overflowHidden");

            document.querySelector('.hbActive').classList.remove("hbActive");
        }
    }

    // Hamburger Item A(Technology)toggle
    const HamburgerItemA = () => {
        setHbItemAActive(!hbItemAActive);

        if(!hbItemAActive) {
            setHbItemBActive(false)
            setHbItemCActive(false)
        } else return
    }

    const HamburgerItemB = () => {

        setHbItemBActive(!hbItemBActive)

        if (!hbItemBActive) {
            setHbItemAActive(false)
            setHbItemCActive(false)
        } else return
    }

    const HamburgerItemC = () => {
        setHbItemCActive(!hbItemCActive)

        if(!hbItemCActive) {
            setHbItemAActive(false)
            setHbItemBActive(false)
        } else return

    }


    

    //function to toggle dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setDropdown(false)
            setNewsDropDown(false)
            setMegaMenu(false)
        }
    }

    useEffect(()=>{
        //add event listener to check if clicked outside
        document.addEventListener("mousedown", handleClickOutside);

    },[])

    // to display drop-down-mega-menu function
    const displayMenu = () => {

        setMegaMenu(!megaMenu)

        if(!megaMenu) {
            setDropdown(false)
            setNewsDropDown(false)
        }
        else return
    }

    const arrowRef = useRef();
    // to display company dropdown
    const displayCompany = () => {

        setDropdown(!dropdown);

        if(!dropdown) {
            setMegaMenu(false)
            setNewsDropDown(false)
        }
        else return
    }


    const displayNews = () => {
        setNewsDropDown(!newsDropDown)
        if(!newsDropDown) {
            setMegaMenu(false)
            setDropdown(false)
        } else return
    }


    




    return(
        <>
        <nav ref={navRef} className="header">
            <div className="headerContainer">
                <div className="headerLeft">
                    <a href={'/'} style={{display:'flex', alignItems:'center'}}>
                        <div className="headerLogo">
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/headerLogo.svg" alt="logo" />
                        </div>
                        <div className="headerTitle helBold">
                            <p>TERRIFIC MINDS</p>
                        </div>
                    </a>
                </div>
                <div className="headerMid">
                    <div>
                        <ul className="headerList helReg">
                            <li onClick={displayMenu} style={{display:'flex', alignItems:'center'}} className="headerListItem">Technology 
                                <div
                                    style={{margin:'0.2rem 0 0 0.5rem', height:'0.5rem', width:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img className="arrow"
                                    style={{height:'100%', width:'100%', objectFit:'contain', transform: megaMenu ? 'rotate(180deg)':'rotate(0deg)'}} 
                                    src="/headerArrow.svg" alt="arrow" />
                                </div>
                            </li>
                            <Link href={'/design'}>
                                <li className="headerListItem">Design</li>                            
                            </Link>
                            <Link href={'/works'}>
                                <li className="headerListItem">Works</li>
                            </Link>
                            <li onClick={displayCompany} style={{display:'flex', alignItems:'center'}} className="headerListItem rel">Company 
                                <div
                                    style={{margin:'0.2rem 0 0 0.5rem', height:'0.5rem', width:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img ref={arrowRef}
                                    style={{height:'100%', width:'100%', objectFit:'contain', transform: dropdown ? 'rotate(180deg)':'rotate(0deg)', transition:'all 0.3s ease'}} 
                                    src="/headerArrow.svg" alt="arrow" />
                                </div>

                                <div className={dropdown ? "companyDropdown companyVisible":"companyDropdown"}>
                                    <ul className="compDrop">
                                        {
                                            [
                                                {title: 'About us', link: '/about'},
                                                {title: 'Careers', link: '/careers'},
                                                {title: 'Partners', link: '/partners'}
                                            ].map((data, i) => {
                                                return(
                                                    <Link className="companyDropdownItems" href={data.link} key={i}>
                                                        <li style={{listStyle:'none'}} className="companyDropdownItem">{data.title}</li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li onClick={displayNews} className="headerListItem" style={{display:'flex', alignItems:'center', position:'relative'}}>News
                                <div
                                    style={{margin:'0.2rem 0 0 0.5rem', height:'0.5rem', width:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img 
                                    style={{height:'100%', width:'100%', objectFit:'contain', transition:'all 0.3s ease', transform: newsDropDown ? 'rotate(180deg)':'rotate(0deg)'}} 
                                    src="/headerArrow.svg" alt="arrow" />
                                </div>

                                <div className={ newsDropDown ? 'newsDropDown newsDropDown_Reveal':"newsDropDown"}>
                                    <ul className="compDrop">
                                        {
                                            [
                                                {title: 'Blog', link: '/'},
                                                {title: 'Terrific News', link: 'https://terrificminds.com/terrific-news'},
                                            ].map((data, i) => {
                                                return(
                                                    <Link className="companyDropdownItems" href={data.link} key={i}>
                                                        <li style={{listStyle:'none'}} className="companyDropdownItem">{data.title}</li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="headerRight">
                    <a href="/contact">
                    <ButtonB 
                        className='btn darkBtn' 
                        text='Get in touch' 
                    />
                    </a>
                    <div onClick={Hamburger} className="headerHamburger">
                        <div className="hamburgerLine" style={{position:'relative'}}>
                            <div className={ hbActive ? "hamburgerLine_Inner_Active_A" : "hamburgerLine_Inner"} />
                        </div>
                        <div className="hamburgerLine" style={{position:'relative'}}>
                            <div className={ hbActive ? "hamburgerLine_Inner_Active_B" : "hamburgerLine_Inner"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* hamburger-menu */}
            <div className='hb'>
                <div className="hbContainer helMed">
                    <div onClick={HamburgerItemC} className="hb_Item">
                        <p style={{display:'flex'}}>
                            News
                            <span style={{position:'relative', transform:'translate(40%,10%)'}}>
                                <img className="mob_Arrow"
                                style={{transform: hbItemCActive ? 'rotate(180deg)':'rotate(0deg)'}} 
                                src="/headerArrow.svg" alt="arrow" />
                            </span>
                        </p>
                        <div className={hbItemCActive ? 'hb_Item_Drop hb_Item_Drop_Active_News':'hb_Item_Drop'}>
                            <div className="hb_Item_Drop_List_Items">
                                <ul>
                                    {
                                        NewsList.map((data, i) => {
                                            return(
                                                <li className="hb_Item_Drop_List_Item helReg" key={i}>
                                                    <a target="_blank" href={data.link}>
                                                    {
                                                        data.text
                                                    }
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div onClick={HamburgerItemA} className="hb_Item">
                        <p style={{display:"flex"}}>
                            Technology 
                            <span style={{position:'relative', transform:'translate(40%,10%)'}}>
                                <img className="mob_Arrow"
                                style={{transform: hbItemAActive ? 'rotate(180deg)':'rotate(0deg)'}} 
                                src="/headerArrow.svg" alt="arrow" />
                            </span>
                        </p>
                        <div className={hbItemAActive ? "hb_Item_Drop hb_Item_Drop_Active" : "hb_Item_Drop"}>
                            <div className="hb_Item_Drop_Left">
                                <div className="hb_Item_Drop_Title">
                                    <p>
                                        <a href="/ecommerce">
                                            E-Commerce
                                            <span className="tiltArrow"><img src="/header/tiltedArrow.svg" alt="arrow" /></span>
                                        </a>
                                    </p>
                                </div>
                                <div className="hb_Item_Drop_List_Items">
                                    <ul>
                                        {
                                            EcomList.map((data, i) => {
                                                return(
                                                        <li className="hb_Item_Drop_List_Item helReg" key={i}>
                                                            <a href={data.link}>
                                                            {
                                                                data.title
                                                            }
                                                            </a>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="hb_Item_Drop_Right">
                                <div className="hb_Item_Drop_Title">
                                    <p>
                                        <a href="/bespoke">
                                            Bespoke Development 
                                            <span className="tiltArrow"><img src="/header/tiltedArrow.svg" alt="arrow" /></span>
                                        </a>
                                    </p>
                                </div>

                                <div className="hb_Item_Drop_List_Items">
                                    <ul className="hb_Item_Drop_List_Left">
                                        {
                                            BespokeListLeft.map((data, i) => {
                                                return(
                                                    <li className="hb_Item_Drop_List_Item helReg" key={i}>
                                                        {
                                                            data.title
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                    <ul className="hb_Item_Drop_List_Right">
                                        {
                                            BespokeListRight.map((data, i) => {
                                                return(
                                                    <li className="hb_Item_Drop_List_Item helReg" key={i}>
                                                        {
                                                            data.title
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hb_Item">
                        <p>
                            <a href="/design">
                                Design
                            </a>
                        </p>
                    </div>
                    <div className="hb_Item">
                        <p>
                            <a href="/works">
                                Works
                            </a>
                        </p>
                    </div>
                    <div onClick={HamburgerItemB} className="hb_Item">
                        <p style={{display:'flex'}}>
                            Company
                            <span style={{position:'relative', transform:'translate(40%,10%)'}}>
                                <img 
                                className="mob_Arrow"
                                style={{transform: hbItemBActive ? 'rotate(180deg)' : 'rotate(0deg)'}} 
                                src="/headerArrow.svg" alt="arrow" />
                            </span>
                        </p>
                        <div className={hbItemBActive ? 'hb_Item_Drop hb_Item_Drop_Active':'hb_Item_Drop'}>
                            <div className="hb_Item_Drop_List_Items">
                                <ul>
                                    {
                                        CompList.map((data, i) => {
                                            return(
                                                <li className="hb_Item_Drop_List_Item helReg" key={i}>
                                                    <a href={data.link}>
                                                    {
                                                        data.title
                                                    }
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* mega-menu */}
            <div className={ megaMenu ? "megaMenu reveal" : "megaMenu"} style={{zIndex:'999'}}>
                <div className={ megaMenu ? "megaMenu_Container visible" : "megaMenu_Container"}>
                    <div className="megaMenu_A">
                        <div className="megaMenu_A_Container">
                            <a className="megaMenu_A_Title helMed" href="/ecommerce">
                                <p>
                                    { megaMenu_A_Title }
                                    <span className="tiltArrow"><img src="/header/tiltedArrow.svg" alt="arrow" /></span>
                                </p>
                            </a>
                            <div className="megaMenu_A_Items">
                                {
                                    megaMenuAItem.map((data, i) => {
                                            
                                        const mouseEnter = () => { // mouseEnter State
                                                                                
                                            switch (data.title) {
                                                case 'Magento':
                                                    return (
                                                        document.querySelectorAll(".megaMenu_A_Item")[0].classList.add('hoverMagento'),
                                                        document.querySelectorAll('.product_Name')[0].classList.add('magentoText')
                                                    )
                                                case 'Shopify':
                                                    return (
                                                        document.querySelectorAll(".megaMenu_A_Item")[1].classList.add('hoverShopify'),
                                                        document.querySelectorAll('.product_Name')[1].classList.add('shopifyText')
                                                    )
                                                case 'VTEX':
                                                    return (
                                                        document.querySelectorAll(".megaMenu_A_Item")[2].classList.add('hoverVTEX'),
                                                        document.querySelectorAll('.product_Name')[2].classList.add('vtexText')
                                                    )   
                                                case 'Big Commerce':
                                                    return (
                                                        document.querySelectorAll(".megaMenu_A_Item")[3].classList.add('hoverBigC'),
                                                        document.querySelectorAll('.product_Name')[3].classList.add('bigCText')
                                                        )
                                                default:
                                                    break;
                                            }

                                            setActiveLogo(!activeLogo);

                                        }

                                        const mouseLeave = () => { // mouseLeave State
                                                
                                            document.querySelectorAll(".megaMenu_A_Item")[0].classList.remove('hoverMagento');
                                            document.querySelectorAll('.product_Name')[0].classList.remove('magentoText')
                                            document.querySelectorAll(".megaMenu_A_Item")[1].classList.remove('hoverShopify');
                                            document.querySelectorAll(".megaMenu_A_Item")[2].classList.remove('hoverVTEX');
                                            document.querySelectorAll('.product_Name')[2].classList.remove('vtexText')
                                            document.querySelectorAll(".megaMenu_A_Item")[3].classList.remove('hoverBigC');

                                            document.querySelectorAll('.product_Name')[1].classList.remove('shopifyText');

                                            // setActiveLogo(false)

                                        }
                                        
                                        return(
                                            <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href={data.link} className="megaMenu_A_Item" key={i}>
                                                <div className="megaMenu_A_Product">
                                                    <div className="product_Logo">
                                                        <img src={activeLogo ? data.activeLogo: data.logo} alt={data} />
                                                        {/* {data.logo} */}
                                                    </div>
                                                    <div className="product_Name helMed">
                                                        <p>
                                                            {data.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="product_Text helReg">
                                                    <p>
                                                        {data.description}
                                                    </p>
                                                </div>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="megaMenu_B">
                        <div className="megaMenu_B_Container">
                            <a className="megaMenu_A_Title helMed" href="/bespoke">
                                <p>
                                    { megaMenu_B_Title }
                                    <span className="tiltArrow"><img src="/header/tiltedArrow.svg" alt="arrow" /></span>
                                </p>
                            </a>
                            <div className="megaMenu_B_Items">
                                {
                                    megaMenuBItem.map((data, i) => {
                                        return(
                                            <div className="megaMenu_B_Item" key={i}>
                                                <div className="megaMenu_B_Logo">
                                                    <img src={data.src} alt={data.alt} />
                                                </div>
                                                <div className="megaMenu_B_Item_Title helMed">
                                                    <p>
                                                        {data.title}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

        </nav>

        
        </>
    )
}