import Image from "next/image";
import Header from "@/components/Header";
import PlaceDetails from "@/components/PlaceDetails";

export default function Karlatornet() {
  const placeInformation = {
    clipTitle: '',
    placeName: 'Karlatornet',
    imageUrl: '/images/aftis.jpg',
    description: 'Description comes here',
  };

  return (
      <PlaceDetails {...placeInformation} />
  );
}
