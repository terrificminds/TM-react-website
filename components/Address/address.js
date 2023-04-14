/* eslint-disable @next/next/no-img-element */

export default function Address({data, style}) {
    return(
        <div 
            className='addrsItem'
            style={style}>
            <div style={{height:'1.2rem', width:'1.1rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src='/locationPin.svg' alt='Pin' />
            </div>
            <div className='addrs'>
                <div className='addrsCity helBold'><p>{data.city}</p></div>
            <div className='addrsAddrs helReg'><p>{data.addressA}<br />{data.addressB}<br />{data.addressC}<br />{data.addressD}</p></div>
            </div>
        </div>
    )
}