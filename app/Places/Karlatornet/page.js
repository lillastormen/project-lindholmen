import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Karlatornet() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Karlatornet",
    imageUrl: "/images/aftis.jpg",
    description: "Description comes here",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection tableName="karlatornet" />
    </>
  );
}
