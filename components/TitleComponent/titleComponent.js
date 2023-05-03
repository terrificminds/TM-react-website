

export default function TitleComponent({title, description}) {
    return(
        <div className='titleComponentNewContainer'>
            <div className="titleComponentContent">
                <div className='titleComponentTitle helMed'>
                <p>{title}</p>
                </div>
                <div className='titleComponentDescription helMed'>
                <p>{description}</p>
                </div>
            </div>
        </div>
    )
}