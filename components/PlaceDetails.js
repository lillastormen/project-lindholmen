"use client";
import Image from "next/image";
import BtnContainer from "./BtnContainer";
import TruncatedText from "@/components/TruncatedText";

const PlaceDetails = ({
  placeName,
  imageUrl,
  vintageUrl,
  description,
  audio,
  time,
  audioTitle,
  teaser,
  mapLink,
}) => {
  return (
    <div className="flex flex-col items-center p-5">
      <BtnContainer audio={audio} time={time} title={audioTitle} />
      <div className="w-full h-64 relative mb-2 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={placeName}
          fill
          objectfit="cover"
          priority
          className=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-beige">{placeName}</h1>
          <p className="text-white text-center">{teaser}</p>
        </div>
      </div>
      <a className="text-black text-sm pb-2 w-full underline" href={mapLink}>
        Google Maps
      </a>
      <TruncatedText text={description} maxLength={303} />
      <div className="w-full h-64 relative mb-2 flex justify-center items-center">
        <Image
          src={vintageUrl}
          alt={placeName}
          fill
          objectfit="cover"
          priority
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default PlaceDetails;
