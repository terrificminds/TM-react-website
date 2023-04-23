import Link from "next/link"

export default function ListItems({obj}) {
    return(
        <>
        <ul>
            <Link href={obj.link}>
                <li className="listItem helReg">{obj.listItem}</li>
            </Link>
            </ul>
        </>
    )
}