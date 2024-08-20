import Image from "next/image";
import Header from "@/components/Header";
import PlaceDetails from "@/components/PlaceDetails";

export default function Aftonstjarnan() {
  const placeInformation = {
    clipTitle: '',
    placeName: 'Aftonstjärnan dskkhfsidohf',
    imageUrl: '/images/aftis.jpg',
    description: 'Description comes here',
  };

  return (
      <PlaceDetails {...placeInformation} />
  );
}
