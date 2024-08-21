"use client";
import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection";
import { supabase } from "@/supabaseClient";

export default function Aftonstjarnan() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Aftonstjärnan",
    imageUrl: "/images/aftis.jpg",
    description: "Description comes here",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection tableName="aftonstjarnan" supaBase={supabase} />
    </>
  );
}
