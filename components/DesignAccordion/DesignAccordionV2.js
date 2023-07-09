/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

export default function DesignAccordionV2({obj, i, style}) {

    console.log(obj,"MYY PBJE")

    const [selected, setSelected] = useState(false);

    const toggle = (i) => {

        if(selected == i) {
            //if the current index is selected, then close it
            return setSelected(null)
        }
        else {
            //if the current index is not selected, then open it
            setSelected(i);
        }

        setSelected(i);
    }
    


   


    return(
        <div className="dsgnAccord V2"  style={{padding:'0.5rem 2rem'}}>
            <div onClick={() => toggle(i)} style={{width:'100%', padding:'1rem 0', cursor:'pointer'}}>
                <div className="accordTitle helMed" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={style}>
                        <p>{obj.title}</p>
                    </div>
                    <div className="arrContB"><img style={{height:'40%', width:'40%', objectFit:'cover', transform: selected == i ? 'rotate(180deg)':'', transition:'all .5s ease'}} src="/accordArrow.svg" alt="" /></div>
                </div>
            </div>
            <div 
            className={
                selected == i ? "accordContent Show aN1" : "accordContent aN1"
            } >
                <div className="accordTextContainer">
                    {/*  */}
                    <div className="accordTitle helReg">
                        <p>
                            { obj.accordTitleA }
                        </p>
                    </div>
                    <div className="accordDescription helReg">
                        <p>
                            { obj.accordDescriptA }
                        </p>
                    </div>
                    {/*  */}
                </div>
                {/*  */}
                <div className="accordTextContainer">
                    <div className="accordTitle helReg">
                        <p>
                            { obj.accordTitleB }
                        </p>
                    </div>
                    <div className="accordDescription helReg">
                        <p>
                            { obj.accordDescriptB }
                        </p>
                    </div>
                </div>
                {/*  */}
                <div className="accordTextContainer">
                    <div className="accordTitle helReg">
                        <p>
                            { obj.accordTitleC }
                        </p>
                    </div>
                    <div className="accordDescription helReg">
                        <p>
                            { obj.accordDescriptC }
                        </p>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    )
}