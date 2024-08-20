import Image from "next/image";
import Header from "@/components/Header";
import PlaceDetails from "@/components/PlaceDetails";

export default function Telefonstolpen() {
  const placeInformation = {
    clipTitle: '',
    placeName: 'Telefonstolpen',
    imageUrl: '/images/aftis.jpg',
    description: 'Description comes here',
  };

  return (
      <PlaceDetails {...placeInformation} />
  );
}
