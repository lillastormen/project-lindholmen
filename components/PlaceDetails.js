"use client";
import Image from "next/image";
import BtnContainer from "./BtnContainer";
import TruncatedText from "@/components/TruncatedText";

const PlaceDetails = ({
  placeName,
  imageUrl,
  description,
  audio,
  time,
  audioTitle,
  teaser,
}) => {
  return (
    <div className="flex flex-col items-center px-5 mt-20">
      <BtnContainer audio={audio} time={time} title={audioTitle} />
      <div className="w-full h-64 relative mb-4 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={placeName}
          fill
          objectfit="cover"
          priority
          className=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-beige">{placeName}</h1>
          <p className="text-white text-center">{teaser}</p>
        </div>
      </div>
      <TruncatedText text={description} maxLength={303} />
    </div>
  );
};

export default PlaceDetails;
