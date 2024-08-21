"use client";
import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure
import { supabase } from "@/supabaseClient";

export default function Varvet() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Varvet",
    imageUrl: "/images/aftis.jpg",
    description: "Description comes here",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection tableName="varvet" supaBase={supabase} />
    </>
  );
}
