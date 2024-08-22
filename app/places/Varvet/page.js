import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Varvet() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Varvet",
    imageUrl: "/images/aftis.jpg",
    teaser: "",
    description: "",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection tableName="varvet" story="" />
    </>
  );
}