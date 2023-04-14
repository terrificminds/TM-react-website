/* eslint-disable @next/next/no-img-element */
import { PrismicNextImage } from '@prismicio/next';
import RichText from '../../components/RichText/richText';


export default function TabContent({obj, className}) {
    return(
        <div
            className={className}>
                <div className='contentA'>
                <div className='contentTitle helMed'>
                    <RichText field={obj.tab_content_title} />
                </div>
                <div className='contentDescription helReg'>
                    <RichText field={obj.tab_content_description} />
                </div>
                <div className='contentCTA helMed' style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                    <p>View Full Study</p> <span style={{marginLeft:'0.4rem'}}><img src="/ctaArrow.svg" alt="arrow" /></span>
                </div>
                </div>
                <div className='contentB'>
                <div 
                    className='contentImgContainer'
                    style={{width:'auto', height:'29.1rem'}}>
                    <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover'}} field={obj.tab_content_image}  alt='IMAGE' />
                </div>
                </div>
        </div>
    )
}