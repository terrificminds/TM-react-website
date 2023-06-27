/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import LocationShowCaseV2 from "../components/LocationShowcase/LocationShowcaseV2";


export default function Contact() {

    let Title = "We're a hello away"

    let TitleB = "Let's talk about it"
    let Description = "What do you need help with? Have a project or an idea you’d like to collaborate on? Let’s talk about it."


    let InfoContainer = [
        {
            text:'Call us',
            info:'0471 270 0460'
        },
        {
            text:'Email us',
            info: 'hello@terrificminds.com'
        },
        {
            text:'Chat with us',
            info:'Schedule a time'
        }
    ]

    let Socials=[
        {
            src:'/Contact/FormSection/linked-in-icon.svg'
        },
        {
            src:'/Contact/FormSection/twitter-icon.svg'
        },
        {
            src:'/Contact/FormSection/insta-icon.svg'
        },
        {
            src:'/Contact/FormSection/facebook-icon.svg'
        },
        {
            src:'/Contact/FormSection/youtube-icon.svg'
        }
    ]

    // Form Functionality 
    const [ name, setName ] = useState('');
    const [ companyName, setCompanyName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ options, setOptions ] = useState('');
    const [ message, setMessage ] = useState('');

    // Error Handling
    const [ errors, setErrors ] = useState({});

    // HandleChange Values
    const handleChange = (event) => {
        const { name, value } = event.target;

        // updating state 
        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'options':
                setOptions(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }
    
    //

    // Focused and blur state

    // Name
    const [ nameFocused, setNameFocused ] = useState(false)

    const handleNameFocus = () => {
        setNameFocused(true)
    }

    const handleNameBlur = () => {
        setNameFocused(false)
    }

    // Company
    const [ companyFocused, setCompanyFocused ] = useState(false)
    
    const handleCompanyFocus = () => {
        setCompanyFocused(true)
    }

    const handleCompanyNameBlur = () => {
        setCompanyFocused(false)
    }

    // Email
    const [ emailFocused, setEmailFocused ] = useState(false)

    const handleEmailFocus = () => {
        setEmailFocused(true)
    }

    const handleEmailBlur = () => {
        setEmailFocused(false)
    }

    // Phone
    const [ phoneFocused, setPhoneFocused ] = useState(false)

    const handlePhoneFocus = () => {
        setPhoneFocused(true)
    }

    const handlePhoneBlur = () => {
        setPhoneFocused(false)
    }

    // Option 
    const [ optionFocused, setOptionFocused ] = useState(false)
            
    const handleOptionFocus = () => {
        setOptionFocused(true)
    }

    const handleOptionBlur = () => {
        setOptionFocused(false)
    }

    // Message
    const [ messageFocused, setMessageFocused ] = useState(false)

    const handleMessageFocus = () => {
        setMessageFocused(true)
    }

    const handleMessageBlur = () => {
        setMessageFocused(false)
    }

    



    

    return(
        <>
        <section className="contact_Page">
            {/* contact-hero */}
            <div className="contact_Hero">
                <div className="contact_Title helMed">
                    <h3>
                        { Title }
                    </h3>
                </div>
                <div className="contact_Info_Container">
                    {
                        InfoContainer.map((data, i) => {
                            return(
                                <div className="contact_Info_Item helReg" key={i}>
                                    <div className="contact_Info_Item_Title TMorange">
                                        <p>
                                            { data.text }
                                        </p>
                                    </div>
                                    <div className="contact_Info_Item_Info">
                                        <p>
                                            { data.info }
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* contact-hero-end */}
            {/* contact-form-section */}
            <div className="contact_Form">
                <div className="contact_Form_Left">
                    <div className="contact_Form_Left_Text_Container">
                        <div className="contact_Form_Left_Title helMed">
                            <p>
                                { TitleB }
                            </p>
                        </div>
                        <div className="contact_Form_Left_Description helReg">
                            <p>
                                { Description }
                            </p>
                        </div>
                        <div className="contact_Form_Socials_Container">
                            {
                                Socials.map((data, i) => {
                                    return(
                                        <div className="contact_Form_Socials_Item" key={i}>
                                            <img src={ data.src } alt="icon" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>   
                <div className="contact_Form_Right">
                    <form className="contact_Form_Form">
                        {/* Name */}
                        <div className="contact_Form_Input helMed">
                            <label>
                                NAME<span className="TMorange">*</span>
                            </label>
                            <input 
                                type="text"
                                placeholder="Name *"  
                            />
                        </div>
                        {/* Company Name */}
                        <div className="contact_Form_Input helMed">
                            <label>
                                COMPANY NAME
                            </label>
                            <input 
                                type="text"
                                placeholder="Company Name *"  
                            />
                        </div>
                        {/* Email & Phone */}
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <div className="contact_Form_Input input_email helMed">
                                <label>
                                    Email<span className="TMorange">*</span>
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Email *"  
                                />
                            </div>
                            <div className="contact_Form_Input input_phone helMed">
                                <label>
                                    PHONE
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Phone"  
                                />
                            </div>
                        </div>
                        {/* How did you hear */}
                        <div className="contact_Form_Input helMed">
                            <label>
                                HOW DID YOU HEAR ABOUT US?
                            </label>
                            <select style={{color:'#000', padding:'0 0 0.5rem 0'}}
                                name=""
                                placeholder="Recommended by a Friend">
                                <option value="">Recommended by a Friend</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                        {/* Message */}
                        <div className="contact_Form_Input helMed">
                            <label>
                                MESSAGE
                            </label>
                            <textarea style={{border:'none', borderBottom:'1px grey solid', resize:'none', outline:'none'}}  />
                        </div>
                        {/* NEWS-LETTER-SIGNUP-TOGGLE */}
                        <div className="contact_Form_Input input_Checkbox helMed" >
                            <input type="checkbox" id="" name="" value="" />
                            <label> SIGN UP FOR OUR NEWSLETTER</label>
                        </div>
                        {/* btn */}
                        <div className="contact_Form_Btn">
                            <button>
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* contact-form-section-end */}
        <LocationShowCaseV2 />
        </section>
        </>
    )
}