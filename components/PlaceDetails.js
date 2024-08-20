

import Image from "next/image";
import PlayPauseBtn from "./PlayPauseBtn";
import BtnContainer from "./BtnContainer";


const PlaceDetails = ({ placeName, imageUrl, description }) => {
    return (
        <div className="flex flex-col">
         
            <BtnContainer />
           
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