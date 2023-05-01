/* eslint-disable @next/next/no-img-element */


export default function ImageComponent({src, alt, className, style}) {
    return(
        <div className={className}>
            <img style={style} src={src} alt={alt} />
        </div>
    )
}