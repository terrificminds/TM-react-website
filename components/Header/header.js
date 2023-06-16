/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ButtonB from "../ButtonB[noArrow]/buttonB";
import { useRef, useState } from "react";
import ShopifyIcon from "./MegaMenuIcons/shopifyIcon";
import MagentoIcon from "./MegaMenuIcons/magentoIcon";


export default function Header({fill}) {

    const [megaMenu, setMegaMenu] = useState(false); // useState for megaMenu
    const [dropdown, setDropdown] = useState(false);

    const[activeLogo, setActiveLogo] = useState(false);


    let megaMenu_A_Title = 'E-Commerce';
    let megaMenu_B_Title = 'Bespoke Development';

    let megaMenuAItem = [
         {
            title: 'Magento',
            description: 'Feature rich Adobe Ecommerce platform that allows businesses to connect to customers and sell products',
            logo: '/header/magento.svg',
            // logo: <MagentoIcon />,
            alt: 'Magento',
            link: '/magento'
         },
        {
            title: 'Shopify',
            description: 'Strong online ecommerce presence with number of out of themes to match the client product and service',
            // logo: <ShopifyIcon fill={fill} />,
            activeLogo:'/header/shopifyActive.svg',
            logo: '/header/shopify.svg',
            alt: 'Shopify',
            link: '/shopify'
        },
         {
             title: 'VTEX',
             description: 'Use complete dictionary of VTEX APIs to build a store with custom integrations across multiple platforms',
             logo: '/header/vtex.svg',
             alt: 'VTEX',
             link: '/vtex'
         },
         {
             title: 'Big Commerce',
             description: 'Build Ecommerce stores with scalable solutions and strong SEO practices through BigCommerce',
             logo: '/header/bigC.svg',
             alt: 'Big Commerce',
             link: '/bigcommerce'
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

    // to display drop-down-mega-menu function
    const displayMenu = () => {

        if(!megaMenu) {
            document.querySelector(".arrow").classList.add('rotate');
            document.querySelector('.megaMenu').classList.add('reveal');

            document.querySelector('.megaMenu_Container').classList.add('visible')

        }
        else {
            document.querySelector(".arrow").classList.remove('rotate');
            document.querySelector(".megaMenu").classList.remove('reveal');

            document.querySelector('.megaMenu_Container').classList.remove('visible')

        }


        setMegaMenu(!megaMenu) // setMegaMenu true/false

    }

    const dropDownRef = useRef();
    const arrowRef = useRef();
    // to display company dropdown
    const displayCompany = () => {
        if(!dropdown) {
            dropDownRef.current.style.display = 'block';
            setTimeout(() => {
                dropDownRef.current.style.opacity = '1'
                arrowRef.current.style.transform = 'rotate(-180deg)'
            }, 200)
        }
        else {
            dropDownRef.current.style.opacity = '0'
            arrowRef.current.style.transform = 'rotate(0)'
            setTimeout(() => {
                dropDownRef.current.style.display = 'none';
            }, 1000)
        }

        setDropdown(!dropdown);
    }



    return(
        <>
        <nav className="header">
            <div className="headerContainer">
                <div className="headerLeft">
                    <Link href={'/'} style={{display:'flex', alignItems:'center'}}>
                        <div className="headerLogo">
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/headerLogo.svg" alt="logo" />
                        </div>
                        
                    
                        <div className="headerTitle helBold">
                            <p>TERRIFIC MIND</p>
                        </div>
                    </Link>
                </div>
                <div className="headerMid">
                    <div>
                        <ul className="headerList helReg">
                            <li className="headerListItem">Products</li>
                            <li onClick={displayMenu} style={{display:'flex', alignItems:'center'}} className="headerListItem">Technology 
                                <div
                                    style={{margin:'0.2rem 0 0 0.5rem', height:'0.5rem', width:'0.75rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img className="arrow"
                                    style={{height:'100%', width:'100%', objectFit:'contain'}} 
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
                                    style={{height:'100%', width:'100%', objectFit:'contain', transition:'all 0.3s ease'}} 
                                    src="/headerArrow.svg" alt="arrow" />
                                </div>

                                <div ref={dropDownRef} className="companyDropdown">
                                    <ul className="compDrop">
                                        {
                                            [
                                                {title: 'About us', link: '/about'},
                                                {title: 'Careers', link: '/careers'},
                                                {title: 'Partners', link: '/'}
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
                    <ButtonB className='btn darkBtn' text='Get in touch' />
                    <div className="headerHamburger">
                        <div className="hamburgerLine"></div>
                        <div className="hamburgerLine"></div>
                        <div className="hamburgerLine"></div>
                    </div>
                </div>
            </div>


            {/* mega-menu */}
            <div className="megaMenu" style={{zIndex:'999'}}>
                <div className="megaMenu_Container">
                    <div className="megaMenu_A">
                        <div className="megaMenu_A_Container">
                            <div className="megaMenu_A_Title helMed">
                                <p>
                                    { megaMenu_A_Title }
                                    <span className="tiltArrow"><img src="/header/tiltedArrow.svg" alt="arrow" /></span>
                                </p>
                            </div>
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
                                                    return document.querySelectorAll(".megaMenu_A_Item")[3].classList.add('hoverBigC');
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
                                            document.querySelectorAll(".megaMenu_A_Item")[3].classList.remove('hoverBigC');

                                            document.querySelectorAll('.product_Name')[1].classList.remove('shopifyText');

                                            // setActiveLogo(false)

                                        }
                                        
                                        return(
                                            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={() => window.location.href = data.link} className="megaMenu_A_Item" key={i}>
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
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="megaMenu_B">
                        <div className="megaMenu_B_Container">
                            <div className="megaMenu_A_Title helMed">
                                <p>
                                    { megaMenu_B_Title }
                                    <span className="tiltArrow"><img src="/header/tiltedArrow.svg" alt="arrow" /></span>
                                </p>
                            </div>
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