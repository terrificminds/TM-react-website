import { PrismicRichText } from "@prismicio/react";

export default function RichText({ field, className, style }) {
    return(
        field && (
            <div className={className} style={style}>
                <PrismicRichText field={field} />
            </div>
        )
    )
}

