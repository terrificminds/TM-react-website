

export default function ContactBox({obj}) {
    return(
        <>
        <div className="contactBox">
            <div className="contactText">
                <p>{obj.text}</p>
            </div>
            <div className="contactLink">
                <a href={obj.link}>{obj.linkText}</a>
            </div>
            <div className="contactLink">
                <a href={obj.linkB}>{obj.linkTextB}</a>
            </div>
        </div>
        </>
    )
}