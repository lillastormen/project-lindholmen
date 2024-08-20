import Image from "next/image";

const PlaceDetails = ({ title, imageUrl, description }) => {
    return (
        <div className="max-w-3x1 mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="w-full h-64 relative mb-4">
                <Image 
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    object="cover"
                    className="rounded"
                />
            </div>
            <p className="text-lg leading-relaxed">{description}</p>
        </div>
    )
}

export default PlaceDetails;