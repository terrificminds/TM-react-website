/* eslint-disable @next/next/no-img-element */
import { PrismicNextImage } from '@prismicio/next';
import RichText from '../../components/RichText/richText';
import Button from '../Button/button';


export default function TabContent({obj, className}) {

    console.log(obj,"MY_Link")

    return(
        <div
            className={className}>
                <div className='contentA'>
                <div className='contentTitle contentTitleDesk helMed'>
                    <RichText field={obj.tab_content_title} />
                </div>
                <div className='contentDescription helReg'>
                    <RichText field={obj.tab_content_description} />
                </div>
                <Button href={obj.cta_link.url} className="contentCTA btn bgNilBtn helReg" svgClassName="contentCTAArrow" text="View Full Case Study" />
                </div>
                <div className='contentB'>
                    <div>
                        <div className='contentBMobTitle contentTitle helMed'>
                            <RichText field={obj.tab_content_title} />
                        </div>
                        <div className='contentImgContainer'>
                            <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover'}} field={obj.tab_content_image}  alt='IMAGE' />
                       </div>
                    </div>
                </div>
        </div>
    )
}