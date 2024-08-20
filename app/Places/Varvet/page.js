import Image from "next/image";
import Header from "@/components/Header";
import PlaceDetails from "@/components/PlaceDetails";

export default function Varvet() {
  const placeInformation = {
    audioTitle: 'Anders på varvet',
    audio: '/pirate.mp3',
    time: "5 min",
    placeName: 'Varvet',
    imageUrl: '/images/aftis.jpg',
    description: 'Description comes here',
 
  };

  return (
      <PlaceDetails {...placeInformation} />
  );
}
