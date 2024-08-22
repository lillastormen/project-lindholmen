import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection";

export default function Aftonstjarnan() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Aftonstjärnan",
    imageUrl: "/images/aftis.jpg",
    teaser: "",
    description: "",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection tableName="aftonstjarnan" story="" />
    </>
  );
}
