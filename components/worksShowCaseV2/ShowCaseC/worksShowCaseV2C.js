import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../RichText/richText'
import Link from 'next/link'
import Button from '../../Button/button'


export default function WorksShowCaseV2C({data, style,}) {
    return(
        <div className='worksCaseItem worksCaseItemC' 
            style={style}>
            <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover', zIndex:'-10000'}} field={data.image_c} alt="" />
            <div style={{padding:'2rem', position:'absolute', top:'0', left:'0', right:'0', bottom:'0', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div style={{display:'flex', zIndex:'100000'}}>
                <RichText className='imgATag helReg' style={{display: data.img_c_tag_a[0].text == "" ? 'none':''}} field={data.img_c_tag_a} />
                <RichText className='imgATag helReg' style={{display: data.img_c_tag_b[0].text == "" ? 'none':''}} field={data.img_c_tag_b} />
                <RichText className='imgATag helReg' style={{display: data.img_c_tag_c[0].text == "" ? 'none' : '' }} field={data.img_c_tag_c} />
                {/* <RichText className='imgATag helReg' style={{display: data.img_c_tag_a.text == "" ? 'none':''}} field={data.img_c_tag_a} />
                <RichText className='imgATag helReg' style={{display: data.img_c_tag_b.text == "" ? 'none':''}} field={data.img_c_tag_b} />
                <RichText className='imgATag helReg' style={{display: data.img_c_tag_c.text == "" ? 'none' : '' }} field={data.img_c_tag_c} /> */}

                </div>
                <div className='itemReveal' style={{}}>
                <div className='helMed' style={{padding:'0.5rem 0'}}><RichText field={data.img_c_title} /></div>
                <div className='helReg' style={{padding:'0.5rem 0'}}><RichText field={data.img_c_description} /></div>
                <div className='helReg' style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.5rem 0'}}>
                    <RichText  field={data.img_c_tag_category} />
                    <div style={{display:'flex', alignItems:'center'}}>
                    <Link style={{display:'flex', alignItems:'center'}} href={{}}>
                        <Button styleText={{color:'#FFF'}} className='btn bgNilBtn' text='See More' />
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

