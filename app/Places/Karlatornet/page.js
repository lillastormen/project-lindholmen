"use client";
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

export async function getStaticProps() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("supabaseUrl and supabaseAnonKey are required.");
  }

  return {
    props: {
      supabaseUrl,
      supabaseAnonKey,
    },
  };
}
