

export default function RichTitle({title, description}){
    return(
        <div className="ecomChildComponentText">
            <div className="ecomChildComponentTitle helMed">
                <p>{title}</p>
            </div>
            <div className="ecomChildComponentDescription helReg">
                <p>{description}</p>
            </div>
        </div>
    )
}