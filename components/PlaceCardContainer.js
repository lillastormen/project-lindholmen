import Link from "next/link";

export default function PlaceCardContainer({ title, time, url, imageUrl }) {
    return (
        <Link href={url}>
            <div className="bg-beige flex flex-row justify-between items-center h-[76px] my-5 mx-5 border-0 rounded-lg">
            <img src={imageUrl} className="size-32 pr-2.5"/>
            <div>
            <h3 className="font-inder text-xl pl-[12px]">{title}</h3>   
                <span className="font-inder text-base pl-[12px]">{time}</span>
            </div>
            </div>  
        </Link>
    )
}