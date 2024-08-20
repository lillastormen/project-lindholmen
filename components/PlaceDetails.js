import Image from "next/image";
import PlayPauseBtn from "./PlayPauseBtn";

const PlaceDetails = ({ clipTitle, placeName, imageUrl, description }) => {
    return (
        <div className="max-w-3x1 mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">{clipTitle}Clip title</h2>
            <PlayPauseBtn />
            <div className="w-full h-64 relative mb-4">
                <Image 
                    src={imageUrl}
                    alt={placeName}
                    layout="fill"
                    object="cover"
                    className="rounded-lg"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-white">{placeName}</h1>
                </div>
            </div>
            <p className="text-lg leading-relaxed">{description}</p>
            <div>Comments section here</div>
        </div>
    )
}

export default PlaceDetails;