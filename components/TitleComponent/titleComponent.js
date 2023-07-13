

export default function TitleComponent({title, description}) {
    return(
        <div className='titleComponentNewContainer'>
            <div className="titleComponentContent">
                <div className='titleComponentTitle helMed'>
                <h3>{title}</h3>
                </div>
                <div className='titleComponentDescription helMed'>
                <p>{description}</p>
                </div>
            </div>
        </div>
    )
}